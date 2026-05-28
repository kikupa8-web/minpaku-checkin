/* ====================================================
   民泊チェックインフォーム — Google Apps Script
   （固定URL方式 — トークン不要）
   ==================================================== */

// ===== 設定 =====
const CONFIG = {
  SPREADSHEET_ID: '12hIt-StJxu1dSJRYDT8ipgtUsubs7w87XTkjRvlfH3I',
  DRIVE_FOLDER_ID: '1O5y2dTx1eirERy5g989ixvxOJ_-zH-tC',
  OWNER_EMAIL: 'kikupa8@gmail.com',
  SHEET_REGISTRATIONS: 'registrations'
};

/* ----- Web App エントリポイント ----- */
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    // 必須チェック
    if (!data.property || !data.checkin_date) {
      return jsonResponse({ status: 'error', error: 'missing_fields' });
    }

    // 宿泊者データ保存
    const ss = SpreadsheetApp.openById(CONFIG.SPREADSHEET_ID);
    const regSheet = ss.getSheetByName(CONFIG.SHEET_REGISTRATIONS);

    // パスポート画像がある場合のみDriveフォルダを読み込む
    const hasPassport = (data.guests || []).some(g => g.passport && g.passport.image_base64);
    const folder = hasPassport ? DriveApp.getFolderById(CONFIG.DRIVE_FOLDER_ID) : null;

    const guests = data.guests || [];
    guests.forEach((guest, index) => {
      let passportUrl = '';

      // パスポート画像をDriveに保存
      if (folder && guest.passport && guest.passport.image_base64) {
        passportUrl = savePassportImage(
          folder,
          guest.passport.image_base64,
          data.checkin_date,
          index
        );
      }

      // スプレッドシートに1行追加
      regSheet.appendRow([
        data.property,
        data.checkin_date,
        data.submitted_at,
        guest.role,                               // primary / companion
        guest.name,
        guest.name_kana || '',
        guest.birthdate,
        guest.gender || '',
        guest.occupation,
        guest.email || '',
        guest.phone || '',
        guest.residence ? guest.residence.type : '',
        guest.residence ? (guest.residence.address || '') : '',
        guest.residence ? (guest.residence.nationality || '') : '',
        guest.passport ? (guest.passport.number || '') : '',
        passportUrl
      ]);
    });

    // オーナーに通知メール（個人情報は含めない）
    sendNotification(data.property, guests.length);

    return jsonResponse({ status: 'ok' });

  } catch (err) {
    console.error('doPost error:', err);
    return jsonResponse({ status: 'error', error: 'server_error', detail: err.message });
  }
}

// 動作確認用
function doGet(e) {
  const action = (e && e.parameter && e.parameter.action) || 'status';

  try {
    if (action === 'setup') {
      return setupSheets();
    }
    const ss = SpreadsheetApp.openById(CONFIG.SPREADSHEET_ID);
    const sheets = ss.getSheets().map(s => s.getName());
    return jsonResponse({ status: 'ok', sheets: sheets });
  } catch (err) {
    return jsonResponse({ status: 'error', detail: err.message });
  }
}

function setupSheets() {
  const ss = SpreadsheetApp.openById(CONFIG.SPREADSHEET_ID);

  // registrations シートをセットアップ
  let regSheet = ss.getSheetByName(CONFIG.SHEET_REGISTRATIONS);
  if (!regSheet) {
    regSheet = ss.insertSheet(CONFIG.SHEET_REGISTRATIONS);
  }
  regSheet.clear();
  regSheet.getRange(1, 1, 1, 16).setValues([['property', 'checkin_date', 'submitted_at', 'role', 'name', 'name_kana', 'birthdate', 'gender', 'occupation', 'email', 'phone', 'residence_type', 'address', 'nationality', 'passport_number', 'passport_image_url']]);

  return jsonResponse({ status: 'ok', message: 'シートのセットアップが完了しました' });
}

/* ----- パスポート画像保存 ----- */
function savePassportImage(folder, base64Data, checkinDate, guestIndex) {
  try {
    // "data:image/jpeg;base64,..." の形式からデータ部分を抽出
    const parts = base64Data.split(',');
    const mimeMatch = parts[0].match(/data:(.*?);/);
    const mimeType = mimeMatch ? mimeMatch[1] : 'image/jpeg';
    const raw = parts.length > 1 ? parts[1] : parts[0];

    // 拡張子を決定
    const ext = mimeType.includes('png') ? 'png' :
                mimeType.includes('heic') ? 'heic' : 'jpg';

    // ランダムIDでファイル名生成（個人情報をファイル名に入れない）
    const randomId = Utilities.getUuid().split('-')[0];
    const fileName = `${checkinDate}_${randomId}_guest${guestIndex + 1}.${ext}`;

    // Base64デコードしてBlobを作成
    const decoded = Utilities.base64Decode(raw);
    const blob = Utilities.newBlob(decoded, mimeType, fileName);

    // Driveに保存
    const file = folder.createFile(blob);

    // ファイルのURLを返す
    return file.getUrl();

  } catch (err) {
    console.error('savePassportImage error:', err);
    return 'ERROR: ' + err.message;
  }
}

/* ----- 通知メール ----- */
function sendNotification(property, guestCount) {
  if (!CONFIG.OWNER_EMAIL) return;

  try {
    const subject = `[チェックイン] ${property} に新規登録（${guestCount}名）`;
    const body = `${property} に新しいチェックイン情報が登録されました。\n\n`
      + `宿泊者数: ${guestCount}名\n`
      + `登録日時: ${new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}\n\n`
      + `スプレッドシートを確認してください。\n`
      + `※ セキュリティのため、このメールに個人情報は含まれていません。`;

    MailApp.sendEmail(CONFIG.OWNER_EMAIL, subject, body);
  } catch (err) {
    console.error('sendNotification error:', err);
  }
}

/* ----- JSON レスポンス ----- */
function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
