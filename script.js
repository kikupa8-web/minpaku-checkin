/* ===== i18n ===== */
const i18n = {
  ja: {
    page_title: 'チェックイン情報登録',
    checkin_info: 'チェックイン情報',
    est_time: '所要時間 約5分',
    owner_only: 'オーナーのみ閲覧',
    primary_guest: '代表者（1人目）',
    companions: '同行者',
    agreements: '同意事項',
    name: 'お名前',
    name_placeholder: '山田 太郎 / Taro Yamada',
    kana: 'フリガナ',
    kana_placeholder: 'ヤマダ タロウ',
    birthdate: '生年月日',
    occupation: 'ご職業',
    occupation_placeholder: '会社員',
    email: 'メールアドレス',
    phone: '電話番号',
    gender: '性別',
    gender_male: '男性',
    gender_female: '女性',
    gender_other: 'その他',
    residence_q: '日本に住所がありますか？',
    yes: 'はい',
    no: 'いいえ',
    address: '住所',
    address_placeholder: '東京都渋谷区...',
    foreign_notice: '⚠ 海外居住の方はパスポート情報が必要です（旅館業法）',
    nationality: '国籍',
    nationality_placeholder: '国名を入力...',
    passport_number: 'パスポート番号',
    passport_image: 'パスポート画像（顔写真ページ）',
    choose_file: 'ファイル選択',
    take_photo: '撮影する',
    encrypted_msg: '暗号化通信で送信されます',
    add_companion: '同行者を追加',
    companion_note: '宿泊する方全員の情報をご登録ください',
    companion_label: '同行者{n}人目',
    remove: '削除',
    collapse: '折りたたむ',
    expand: '展開する',
    agree_privacy: '個人情報の取り扱いに同意する',
    agree_rules: 'ハウスルールを確認しました',
    show_detail: '詳細を見る',
    hide_detail: '閉じる',
    privacy_text: '<p>ご提供いただいた個人情報は、旅館業法に基づく宿泊者名簿の作成および管理の目的に限り使用いたします。</p><p style="margin-top:8px;">パスポート画像を含む個人情報は、チェックイン日から3年間保管した後、適切に削除いたします。第三者への提供は法令に基づく場合を除き行いません。</p>',
    submit: '登録する',
    submitting: '送信中...',
    err_required: '必須項目です',
    err_email: 'メールアドレスの形式が正しくありません',
    err_phone: '電話番号の形式が正しくありません',
    err_passport_num: '英数字で入力してください',
    err_passport_image: 'パスポート画像を添付してください',
    err_file_size: 'ファイルサイズは10MB以下にしてください',
    err_agreement: '同意事項をご確認ください',
    err_submit_fail: '送信に失敗しました。再度お試しください。',
    err_checkin_date: 'チェックイン日を選択してください',
    checkin_date: 'チェックイン日',
    confirm_remove: 'この同行者の情報を削除しますか？',
    companion_added: '同行者カードを追加しました',
    companion_removed: '同行者カードを削除しました'
  },
  en: {
    page_title: 'Check-in Registration',
    checkin_info: 'Check-in Information',
    est_time: 'About 5 minutes',
    owner_only: 'Viewed by owner only',
    primary_guest: 'Primary Guest',
    companions: 'Companions',
    agreements: 'Agreements',
    name: 'Full Name',
    name_placeholder: 'Taro Yamada',
    kana: 'Name (Katakana)',
    kana_placeholder: 'ヤマダ タロウ',
    birthdate: 'Date of Birth',
    occupation: 'Occupation',
    occupation_placeholder: 'Engineer',
    email: 'Email',
    phone: 'Phone Number',
    gender: 'Gender',
    gender_male: 'Male',
    gender_female: 'Female',
    gender_other: 'Other',
    residence_q: 'Do you have an address in Japan?',
    yes: 'Yes',
    no: 'No',
    address: 'Address',
    address_placeholder: 'Shibuya, Tokyo...',
    foreign_notice: '⚠ Passport information is required for overseas residents (Hotel Business Act)',
    nationality: 'Nationality',
    nationality_placeholder: 'Enter country name...',
    passport_number: 'Passport Number',
    passport_image: 'Passport Photo Page',
    choose_file: 'Choose File',
    take_photo: 'Take Photo',
    encrypted_msg: 'Sent via encrypted connection',
    add_companion: 'Add Companion',
    companion_note: 'Please register all guests staying',
    companion_label: 'Companion #{n}',
    remove: 'Remove',
    collapse: 'Collapse',
    expand: 'Expand',
    agree_privacy: 'I agree to the privacy policy',
    agree_rules: 'I have read the house rules',
    show_detail: 'Show details',
    hide_detail: 'Hide',
    privacy_text: '<p>Your personal information will be used solely for the purpose of creating and managing the guest register as required by the Hotel Business Act.</p><p style="margin-top:8px;">Personal information including passport images will be retained for 3 years from the check-in date and then properly deleted. We will not share your information with third parties except as required by law.</p>',
    submit: 'Submit',
    submitting: 'Submitting...',
    err_required: 'This field is required',
    err_email: 'Please enter a valid email address',
    err_phone: 'Please enter a valid phone number',
    err_passport_num: 'Please use alphanumeric characters only',
    err_passport_image: 'Please attach your passport image',
    err_file_size: 'File size must be 10MB or less',
    err_agreement: 'Please confirm the agreements',
    err_submit_fail: 'Submission failed. Please try again.',
    err_checkin_date: 'Please select a check-in date',
    checkin_date: 'Check-in Date',
    confirm_remove: 'Remove this companion?',
    companion_added: 'Companion card added',
    companion_removed: 'Companion card removed'
  },
  zh: {
    page_title: '入住登记',
    checkin_info: '入住信息',
    est_time: '约5分钟',
    owner_only: '仅房东可见',
    primary_guest: '主要住客（第1位）',
    companions: '同行人',
    agreements: '同意事项',
    name: '姓名',
    name_placeholder: '山田 太郎 / Taro Yamada',
    kana: '假名',
    kana_placeholder: 'ヤマダ タロウ',
    birthdate: '出生日期',
    occupation: '职业',
    occupation_placeholder: '公司职员',
    email: '电子邮件',
    phone: '电话号码',
    gender: '性别',
    gender_male: '男',
    gender_female: '女',
    gender_other: '其他',
    residence_q: '您在日本有住址吗？',
    yes: '是',
    no: '否',
    address: '地址',
    address_placeholder: '东京都涩谷区...',
    foreign_notice: '⚠ 海外居住者需要护照信息（旅馆业法）',
    nationality: '国籍',
    nationality_placeholder: '输入国家名称...',
    passport_number: '护照号码',
    passport_image: '护照照片页',
    choose_file: '选择文件',
    take_photo: '拍照',
    encrypted_msg: '通过加密连接发送',
    add_companion: '添加同行人',
    companion_note: '请登记所有入住人员',
    companion_label: '同行人 第{n}位',
    remove: '删除',
    collapse: '折叠',
    expand: '展开',
    agree_privacy: '同意隐私政策',
    agree_rules: '已确认住房规则',
    show_detail: '查看详情',
    hide_detail: '关闭',
    privacy_text: '<p>您提供的个人信息仅用于根据旅馆业法创建和管理住客名册。</p><p style="margin-top:8px;">包括护照图片在内的个人信息将在入住日起保留3年后妥善删除。除法律要求外，不会向第三方提供。</p>',
    submit: '提交',
    submitting: '提交中...',
    err_required: '必填项',
    err_email: '请输入有效的电子邮件地址',
    err_phone: '请输入有效的电话号码',
    err_passport_num: '请使用字母和数字',
    err_passport_image: '请附上护照图片',
    err_file_size: '文件大小不能超过10MB',
    err_agreement: '请确认同意事项',
    err_submit_fail: '提交失败，请重试。',
    err_checkin_date: '请选择入住日期',
    checkin_date: '入住日期',
    confirm_remove: '确定要删除此同行人吗？',
    companion_added: '已添加同行人',
    companion_removed: '已删除同行人'
  },
  ko: {
    page_title: '체크인 등록',
    checkin_info: '체크인 정보',
    est_time: '약 5분 소요',
    owner_only: '호스트만 열람 가능',
    primary_guest: '대표자 (첫 번째)',
    companions: '동행자',
    agreements: '동의 사항',
    name: '이름',
    name_placeholder: '야마다 타로 / Taro Yamada',
    kana: '후리가나',
    kana_placeholder: 'ヤマダ タロウ',
    birthdate: '생년월일',
    occupation: '직업',
    occupation_placeholder: '회사원',
    email: '이메일',
    phone: '전화번호',
    gender: '성별',
    gender_male: '남성',
    gender_female: '여성',
    gender_other: '기타',
    residence_q: '일본에 주소가 있습니까?',
    yes: '예',
    no: '아니오',
    address: '주소',
    address_placeholder: '도쿄도 시부야구...',
    foreign_notice: '⚠ 해외 거주자는 여권 정보가 필요합니다 (여관업법)',
    nationality: '국적',
    nationality_placeholder: '국가명을 입력...',
    passport_number: '여권 번호',
    passport_image: '여권 사진 페이지',
    choose_file: '파일 선택',
    take_photo: '촬영',
    encrypted_msg: '암호화된 연결로 전송됩니다',
    add_companion: '동행자 추가',
    companion_note: '숙박하시는 모든 분의 정보를 등록해 주세요',
    companion_label: '동행자 {n}번째',
    remove: '삭제',
    collapse: '접기',
    expand: '펼치기',
    agree_privacy: '개인정보 처리에 동의합니다',
    agree_rules: '숙소 규칙을 확인했습니다',
    show_detail: '자세히 보기',
    hide_detail: '닫기',
    privacy_text: '<p>제공하신 개인정보는 여관업법에 따른 숙박자 명부 작성 및 관리 목적으로만 사용됩니다.</p><p style="margin-top:8px;">여권 이미지를 포함한 개인정보는 체크인 날짜로부터 3년간 보관 후 적절히 삭제됩니다. 법률에 의한 경우를 제외하고 제3자에게 제공하지 않습니다.</p>',
    submit: '등록하기',
    submitting: '전송 중...',
    err_required: '필수 항목입니다',
    err_email: '올바른 이메일 주소를 입력해 주세요',
    err_phone: '올바른 전화번호를 입력해 주세요',
    err_passport_num: '영문과 숫자로 입력해 주세요',
    err_passport_image: '여권 이미지를 첨부해 주세요',
    err_file_size: '파일 크기는 10MB 이하여야 합니다',
    err_agreement: '동의 사항을 확인해 주세요',
    err_submit_fail: '전송에 실패했습니다. 다시 시도해 주세요.',
    err_checkin_date: '체크인 날짜를 선택해 주세요',
    checkin_date: '체크인 날짜',
    confirm_remove: '이 동행자의 정보를 삭제하시겠습니까?',
    companion_added: '동행자 카드가 추가되었습니다',
    companion_removed: '동행자 카드가 삭제되었습니다'
  }
};

/* ===== Nationalities (ISO, 4 languages) ===== */
const nationalities = [
  { code: 'US', ja: 'アメリカ合衆国', en: 'United States', zh: '美国', ko: '미국' },
  { code: 'GB', ja: 'イギリス', en: 'United Kingdom', zh: '英国', ko: '영국' },
  { code: 'CN', ja: '中国', en: 'China', zh: '中国', ko: '중국' },
  { code: 'KR', ja: '韓国', en: 'South Korea', zh: '韩国', ko: '한국' },
  { code: 'TW', ja: '台湾', en: 'Taiwan', zh: '台湾', ko: '대만' },
  { code: 'HK', ja: '香港', en: 'Hong Kong', zh: '香港', ko: '홍콩' },
  { code: 'PH', ja: 'フィリピン', en: 'Philippines', zh: '菲律宾', ko: '필리핀' },
  { code: 'VN', ja: 'ベトナム', en: 'Vietnam', zh: '越南', ko: '베트남' },
  { code: 'TH', ja: 'タイ', en: 'Thailand', zh: '泰国', ko: '태국' },
  { code: 'MY', ja: 'マレーシア', en: 'Malaysia', zh: '马来西亚', ko: '말레이시아' },
  { code: 'SG', ja: 'シンガポール', en: 'Singapore', zh: '新加坡', ko: '싱가포르' },
  { code: 'ID', ja: 'インドネシア', en: 'Indonesia', zh: '印度尼西亚', ko: '인도네시아' },
  { code: 'IN', ja: 'インド', en: 'India', zh: '印度', ko: '인도' },
  { code: 'AU', ja: 'オーストラリア', en: 'Australia', zh: '澳大利亚', ko: '호주' },
  { code: 'NZ', ja: 'ニュージーランド', en: 'New Zealand', zh: '新西兰', ko: '뉴질랜드' },
  { code: 'CA', ja: 'カナダ', en: 'Canada', zh: '加拿大', ko: '캐나다' },
  { code: 'DE', ja: 'ドイツ', en: 'Germany', zh: '德国', ko: '독일' },
  { code: 'FR', ja: 'フランス', en: 'France', zh: '法国', ko: '프랑스' },
  { code: 'IT', ja: 'イタリア', en: 'Italy', zh: '意大利', ko: '이탈리아' },
  { code: 'ES', ja: 'スペイン', en: 'Spain', zh: '西班牙', ko: '스페인' },
  { code: 'NL', ja: 'オランダ', en: 'Netherlands', zh: '荷兰', ko: '네덜란드' },
  { code: 'BR', ja: 'ブラジル', en: 'Brazil', zh: '巴西', ko: '브라질' },
  { code: 'MX', ja: 'メキシコ', en: 'Mexico', zh: '墨西哥', ko: '멕시코' },
  { code: 'RU', ja: 'ロシア', en: 'Russia', zh: '俄罗斯', ko: '러시아' },
  { code: 'SE', ja: 'スウェーデン', en: 'Sweden', zh: '瑞典', ko: '스웨덴' },
  { code: 'NO', ja: 'ノルウェー', en: 'Norway', zh: '挪威', ko: '노르웨이' },
  { code: 'DK', ja: 'デンマーク', en: 'Denmark', zh: '丹麦', ko: '덴마크' },
  { code: 'FI', ja: 'フィンランド', en: 'Finland', zh: '芬兰', ko: '핀란드' },
  { code: 'CH', ja: 'スイス', en: 'Switzerland', zh: '瑞士', ko: '스위스' },
  { code: 'AT', ja: 'オーストリア', en: 'Austria', zh: '奥地利', ko: '오스트리아' },
  { code: 'PT', ja: 'ポルトガル', en: 'Portugal', zh: '葡萄牙', ko: '포르투갈' },
  { code: 'BE', ja: 'ベルギー', en: 'Belgium', zh: '比利时', ko: '벨기에' },
  { code: 'IE', ja: 'アイルランド', en: 'Ireland', zh: '爱尔兰', ko: '아일랜드' },
  { code: 'IL', ja: 'イスラエル', en: 'Israel', zh: '以色列', ko: '이스라엘' },
  { code: 'AE', ja: 'アラブ首長国連邦', en: 'United Arab Emirates', zh: '阿拉伯联合酋长国', ko: '아랍에미리트' },
  { code: 'SA', ja: 'サウジアラビア', en: 'Saudi Arabia', zh: '沙特阿拉伯', ko: '사우디아라비아' },
  { code: 'ZA', ja: '南アフリカ', en: 'South Africa', zh: '南非', ko: '남아프리카' },
  { code: 'EG', ja: 'エジプト', en: 'Egypt', zh: '埃及', ko: '이집트' },
  { code: 'TR', ja: 'トルコ', en: 'Turkey', zh: '土耳其', ko: '터키' },
  { code: 'PL', ja: 'ポーランド', en: 'Poland', zh: '波兰', ko: '폴란드' },
  { code: 'CZ', ja: 'チェコ', en: 'Czech Republic', zh: '捷克', ko: '체코' },
  { code: 'HU', ja: 'ハンガリー', en: 'Hungary', zh: '匈牙利', ko: '헝가리' },
  { code: 'GR', ja: 'ギリシャ', en: 'Greece', zh: '希腊', ko: '그리스' },
  { code: 'AR', ja: 'アルゼンチン', en: 'Argentina', zh: '阿根廷', ko: '아르헨티나' },
  { code: 'CL', ja: 'チリ', en: 'Chile', zh: '智利', ko: '칠레' },
  { code: 'CO', ja: 'コロンビア', en: 'Colombia', zh: '哥伦比亚', ko: '콜롬비아' },
  { code: 'PE', ja: 'ペルー', en: 'Peru', zh: '秘鲁', ko: '페루' },
  { code: 'NP', ja: 'ネパール', en: 'Nepal', zh: '尼泊尔', ko: '네팔' },
  { code: 'MM', ja: 'ミャンマー', en: 'Myanmar', zh: '缅甸', ko: '미얀마' },
  { code: 'KH', ja: 'カンボジア', en: 'Cambodia', zh: '柬埔寨', ko: '캄보디아' },
  { code: 'LK', ja: 'スリランカ', en: 'Sri Lanka', zh: '斯里兰卡', ko: '스리랑카' },
  { code: 'BD', ja: 'バングラデシュ', en: 'Bangladesh', zh: '孟加拉国', ko: '방글라데시' },
  { code: 'PK', ja: 'パキスタン', en: 'Pakistan', zh: '巴基斯坦', ko: '파키스탄' },
  { code: 'JP', ja: '日本', en: 'Japan', zh: '日本', ko: '일본' }
];

/* ===== State ===== */
let currentLang = 'ja';
let companionCount = 0;
let submitting = false;
const passportData = {};

/* ===== URL Params ===== */
const params = new URLSearchParams(location.search);
const property = params.get('property') || '@marugame';
const urlLang = params.get('lang');

/* ===== GAS Endpoint (replace with actual URL) ===== */
const GAS_ENDPOINT = 'https://script.google.com/macros/s/AKfycbzJNLXRedjEr7jSVrZhbzptzHCGfHUJhapC62qL-imG1HlrKmGMBWTgbgAzxHbypzo/exec';

/* ===== Init ===== */
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('propertyName').textContent = property;

  if (urlLang && i18n[urlLang]) {
    currentLang = urlLang;
  } else {
    const browserLang = (navigator.language || '').slice(0, 2);
    if (i18n[browserLang]) currentLang = browserLang;
  }
  const savedLang = localStorage.getItem('checkin_lang');
  if (savedLang && i18n[savedLang]) currentLang = savedLang;

  applyLanguage(currentLang);
  buildNationalityList();
  bindEvents();
  updateProgress();
});

/* ===== Language ===== */
function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('checkin_lang', lang);
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;

  document.querySelectorAll('.lang-switcher button').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  const t = i18n[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) el.textContent = t[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key]) el.placeholder = t[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key]) el.innerHTML = t[key];
  });
  document.title = t.page_title || 'Check-in';

  buildNationalityList();

  document.querySelectorAll('.guest-card__label').forEach(el => {
    const n = el.dataset.companionNum;
    if (n) el.textContent = t.companion_label.replace('{n}', n);
  });
}

function buildNationalityList() {
  const dl = document.getElementById('nationalities');
  dl.innerHTML = '';
  nationalities.forEach(n => {
    const opt = document.createElement('option');
    opt.value = n[currentLang] || n.en;
    opt.dataset.code = n.code;
    dl.appendChild(opt);
  });
}

/* ===== Events ===== */
function bindEvents() {
  document.querySelectorAll('.lang-switcher button').forEach(btn => {
    btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
  });

  bindResidenceToggle('primary');
  bindPassportUpload(document.getElementById('primaryCard'));

  document.getElementById('addCompanionBtn').addEventListener('click', addCompanion);
  document.getElementById('submitBtn').addEventListener('click', handleSubmit);

  document.querySelectorAll('.agreement-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.getElementById(btn.dataset.target);
      const isOpen = target.classList.toggle('open');
      btn.textContent = i18n[currentLang][isOpen ? 'hide_detail' : 'show_detail'];
    });
  });

  document.getElementById('checkinForm').addEventListener('focusout', (e) => {
    if (e.target.matches('input, select')) validateField(e.target);
  });

  document.getElementById('checkinForm').addEventListener('input', () => {
    updateProgress();
  });
  document.getElementById('checkinForm').addEventListener('change', () => {
    updateProgress();
  });
}

/* ===== Residence Toggle ===== */
function bindResidenceToggle(prefix) {
  const card = prefix === 'primary'
    ? document.getElementById('primaryCard')
    : document.querySelector(`[data-companion-id="${prefix}"]`);
  if (!card) return;

  const radios = card.querySelectorAll(`input[name="${prefix}_residence"]`);
  radios.forEach(r => {
    r.addEventListener('change', () => {
      const addressRow = card.querySelector(`[id="${prefix}_address_row"]`);
      const foreignBlock = card.querySelector(`[id="${prefix}_foreign"]`);
      const kanaRow = card.querySelector(`[id="${prefix}_kana_row"]`);

      if (r.value === 'japan') {
        if (addressRow) addressRow.style.display = '';
        if (foreignBlock) foreignBlock.classList.remove('visible');
        if (kanaRow) kanaRow.style.display = '';
      } else {
        if (addressRow) addressRow.style.display = 'none';
        if (foreignBlock) foreignBlock.classList.add('visible');
        if (kanaRow) kanaRow.style.display = 'none';
      }
      updateProgress();
    });
  });
}

/* ===== Passport Upload ===== */
function bindPassportUpload(card) {
  const fileBtn = card.querySelector('.passport-file-btn');
  const cameraBtn = card.querySelector('.passport-camera-btn');
  const fileInput = card.querySelector('.passport-file-input');
  const cameraInput = card.querySelector('.passport-camera-input');
  const preview = card.querySelector('.passport-preview');
  const nameSpan = card.querySelector('.passport-preview__name');
  const removeBtn = card.querySelector('.passport-preview__remove');
  const guestId = card.dataset.role === 'primary' ? 'primary' : card.dataset.companionId;

  if (!fileBtn) return;

  fileBtn.addEventListener('click', () => fileInput.click());
  cameraBtn.addEventListener('click', () => cameraInput.click());

  const handleFile = async (file) => {
    if (!file) return;
    if (file.size > 10 * 1024 * 1024) {
      alert(i18n[currentLang].err_file_size);
      return;
    }
    const resized = await resizeImage(file);
    passportData[guestId] = resized;
    nameSpan.textContent = file.name;
    preview.classList.add('visible');
    card.querySelector('.passport-buttons').style.display = 'none';
    updateProgress();
  };

  fileInput.addEventListener('change', (e) => handleFile(e.target.files[0]));
  cameraInput.addEventListener('change', (e) => handleFile(e.target.files[0]));

  removeBtn.addEventListener('click', () => {
    delete passportData[guestId];
    preview.classList.remove('visible');
    card.querySelector('.passport-buttons').style.display = '';
    fileInput.value = '';
    cameraInput.value = '';
    updateProgress();
  });
}

/* ===== Image Resize ===== */
function resizeImage(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const maxDim = 1600;
        let w = img.width, h = img.height;
        if (w > maxDim || h > maxDim) {
          if (w > h) { h = Math.round(h * maxDim / w); w = maxDim; }
          else { w = Math.round(w * maxDim / h); h = maxDim; }
        }
        const canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        canvas.getContext('2d').drawImage(img, 0, 0, w, h);
        resolve(canvas.toDataURL('image/jpeg', 0.85));
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });
}

/* ===== Companion Cards ===== */
function addCompanion() {
  companionCount++;
  const id = 'comp_' + companionCount;
  const t = i18n[currentLang];
  const label = t.companion_label.replace('{n}', companionCount);

  const html = `
    <div class="guest-card" data-companion-id="${id}" data-role="companion">
      <div class="guest-card__header">
        <span class="guest-card__label" data-companion-num="${companionCount}">${label}</span>
        <div>
          <button type="button" class="guest-card__collapse-btn" data-action="toggle">${t.collapse}</button>
          <button type="button" class="guest-card__remove" data-action="remove">${t.remove}</button>
        </div>
      </div>
      <div class="guest-card__body">
        <div class="guest-card__summary"></div>
        <div class="field-row">
          <label for="${id}_name"><span data-i18n="name">${t.name}</span><span class="required" aria-hidden="true">&#9679;</span></label>
          <div class="input-wrap">
            <input type="text" id="${id}_name" name="${id}_name" required autocomplete="off" aria-required="true" data-i18n-placeholder="name_placeholder" placeholder="${t.name_placeholder}">
            <span class="input-check" aria-hidden="true">&#10003;</span>
          </div>
          <div class="field-error" role="alert"></div>
        </div>
        <div class="field-row field-row--inline">
          <div>
            <label for="${id}_birthdate"><span data-i18n="birthdate">${t.birthdate}</span><span class="required" aria-hidden="true">&#9679;</span></label>
            <div class="input-wrap">
              <input type="date" id="${id}_birthdate" name="${id}_birthdate" required aria-required="true">
              <span class="input-check" aria-hidden="true">&#10003;</span>
            </div>
            <div class="field-error" role="alert"></div>
          </div>
          <div>
            <label for="${id}_occupation"><span data-i18n="occupation">${t.occupation}</span><span class="required" aria-hidden="true">&#9679;</span></label>
            <div class="input-wrap">
              <input type="text" id="${id}_occupation" name="${id}_occupation" required aria-required="true" data-i18n-placeholder="occupation_placeholder" placeholder="${t.occupation_placeholder}">
              <span class="input-check" aria-hidden="true">&#10003;</span>
            </div>
            <div class="field-error" role="alert"></div>
          </div>
        </div>
        <div class="field-row">
          <label><span data-i18n="residence_q">${t.residence_q}</span><span class="required" aria-hidden="true">&#9679;</span></label>
          <div class="radio-group">
            <label class="radio-label">
              <input type="radio" name="${id}_residence" value="japan" required aria-required="true">
              <span data-i18n="yes">${t.yes}</span>
            </label>
            <label class="radio-label">
              <input type="radio" name="${id}_residence" value="foreign">
              <span data-i18n="no">${t.no}</span>
            </label>
          </div>
          <div class="field-error" role="alert"></div>
        </div>
        <div class="field-row" id="${id}_address_row" style="display:none;">
          <label for="${id}_address"><span data-i18n="address">${t.address}</span></label>
          <div class="input-wrap">
            <input type="text" id="${id}_address" name="${id}_address" data-i18n-placeholder="address_placeholder" placeholder="${t.address_placeholder}">
            <span class="input-check" aria-hidden="true">&#10003;</span>
          </div>
          <div class="field-error" role="alert"></div>
        </div>
        <div class="foreign-block" id="${id}_foreign">
          <p class="foreign-block__notice" data-i18n="foreign_notice">${t.foreign_notice}</p>
          <div class="field-row">
            <label for="${id}_nationality"><span data-i18n="nationality">${t.nationality}</span><span class="required" aria-hidden="true">&#9679;</span></label>
            <div class="input-wrap">
              <input type="text" id="${id}_nationality" name="${id}_nationality" list="nationalities" autocomplete="off" data-i18n-placeholder="nationality_placeholder" placeholder="${t.nationality_placeholder}">
              <span class="input-check" aria-hidden="true">&#10003;</span>
            </div>
            <div class="field-error" role="alert"></div>
          </div>
          <div class="field-row">
            <label for="${id}_passport_num"><span data-i18n="passport_number">${t.passport_number}</span><span class="required" aria-hidden="true">&#9679;</span></label>
            <div class="input-wrap">
              <input type="text" id="${id}_passport_num" name="${id}_passport_num" autocomplete="off" placeholder="AB1234567" pattern="[A-Za-z0-9]+">
              <span class="input-check" aria-hidden="true">&#10003;</span>
            </div>
            <div class="field-error" role="alert"></div>
          </div>
          <div class="passport-upload">
            <label><span data-i18n="passport_image">${t.passport_image}</span><span class="required" aria-hidden="true">&#9679;</span></label>
            <div class="passport-buttons">
              <button type="button" class="passport-btn passport-file-btn">&#128193; <span data-i18n="choose_file">${t.choose_file}</span>
                <input type="file" accept="image/*" class="passport-file-input">
              </button>
              <button type="button" class="passport-btn passport-camera-btn">&#128247; <span data-i18n="take_photo">${t.take_photo}</span>
                <input type="file" accept="image/*" capture="environment" class="passport-camera-input">
              </button>
            </div>
            <div class="passport-preview">
              <span class="passport-preview__check" aria-hidden="true">&#10003;</span>
              <span class="passport-preview__name"></span>
              <button type="button" class="passport-preview__remove" aria-label="削除">&times;</button>
            </div>
            <p class="passport-security">&#128274; <span data-i18n="encrypted_msg">${t.encrypted_msg}</span></p>
          </div>
        </div>
      </div>
    </div>
  `;

  const container = document.getElementById('companionCards');
  container.insertAdjacentHTML('beforeend', html);

  const card = container.lastElementChild;
  bindResidenceToggle(id);
  bindPassportUpload(card);

  card.querySelector('[data-action="remove"]').addEventListener('click', () => {
    if (confirm(t.confirm_remove)) {
      delete passportData[id];
      card.remove();
      announce(t.companion_removed);
      renumberCompanions();
      updateProgress();
    }
  });

  card.querySelector('[data-action="toggle"]').addEventListener('click', function () {
    const isCollapsed = card.classList.toggle('collapsed');
    this.textContent = i18n[currentLang][isCollapsed ? 'expand' : 'collapse'];
    const summary = card.querySelector('.guest-card__summary');
    if (isCollapsed) {
      const nameVal = card.querySelector('input[type="text"]').value;
      summary.textContent = nameVal || '---';
    }
  });

  const firstInput = card.querySelector('input[type="text"]');
  if (firstInput) firstInput.focus();

  announce(t.companion_added);
  updateProgress();
}

function renumberCompanions() {
  const cards = document.querySelectorAll('#companionCards .guest-card');
  cards.forEach((card, i) => {
    const label = card.querySelector('.guest-card__label');
    if (label) {
      label.dataset.companionNum = i + 1;
      label.textContent = i18n[currentLang].companion_label.replace('{n}', i + 1);
    }
  });
  companionCount = cards.length;
}

/* ===== Validation ===== */
function validateField(input) {
  const errorEl = input.closest('.field-row')?.querySelector('.field-error')
    || input.closest('.input-wrap')?.parentElement?.querySelector('.field-error');
  const checkEl = input.closest('.input-wrap')?.querySelector('.input-check');
  const t = i18n[currentLang];
  let error = '';

  if (input.required && !input.value.trim()) {
    error = t.err_required;
  } else if (input.type === 'email' && input.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
    error = t.err_email;
  } else if (input.type === 'tel' && input.value && !/^[\d\-+() ]{7,20}$/.test(input.value)) {
    error = t.err_phone;
  } else if (input.name.includes('passport_num') && input.value && !/^[A-Za-z0-9]+$/.test(input.value)) {
    error = t.err_passport_num;
  }

  if (errorEl) errorEl.textContent = error;
  input.classList.toggle('invalid', !!error);
  input.setAttribute('aria-invalid', !!error);
  if (checkEl) checkEl.classList.toggle('visible', !error && !!input.value.trim());

  return !error;
}

function validateAll() {
  let firstError = null;
  const t = i18n[currentLang];

  // チェックイン日のバリデーション
  const checkinInput = document.getElementById('checkin_date');
  const checkinError = checkinInput?.closest('.field-row')?.querySelector('.field-error');
  if (checkinInput && !checkinInput.value) {
    if (checkinError) checkinError.textContent = t.err_checkin_date;
    checkinInput.classList.add('invalid');
    if (!firstError) firstError = checkinInput;
  } else {
    if (checkinError) checkinError.textContent = '';
    if (checkinInput) checkinInput.classList.remove('invalid');
  }

  const allInputs = document.querySelectorAll('#checkinForm input[required], #checkinForm select[required]');
  allInputs.forEach(input => {
    if (input.type === 'radio') return;
    if (!input.closest('.field-row')?.offsetParent && !input.closest('.guest-card__body')) return;
    if (input.closest('.foreign-block') && !input.closest('.foreign-block').classList.contains('visible')) return;
    if (input.closest('[style*="display: none"]') || input.closest('[style*="display:none"]')) return;

    const valid = validateField(input);
    if (!valid && !firstError) firstError = input;
  });

  const residenceGroups = document.querySelectorAll('.radio-group');
  residenceGroups.forEach(group => {
    const radios = group.querySelectorAll('input[type="radio"]');
    const checked = Array.from(radios).some(r => r.checked);
    const errorEl = group.closest('.field-row')?.querySelector('.field-error');
    if (!checked) {
      if (errorEl) errorEl.textContent = t.err_required;
      if (!firstError) firstError = radios[0];
    }
  });

  document.querySelectorAll('.guest-card[data-role="companion"], #primaryCard').forEach(card => {
    const residence = card.querySelector('input[name$="_residence"]:checked');
    if (residence && residence.value === 'foreign') {
      const guestId = card.dataset.role === 'primary' ? 'primary' : card.dataset.companionId;
      if (!passportData[guestId]) {
        const uploadEl = card.querySelector('.passport-upload label');
        if (uploadEl && !firstError) {
          firstError = uploadEl;
          const errDiv = document.createElement('div');
          errDiv.className = 'field-error';
          errDiv.textContent = t.err_passport_image;
          errDiv.setAttribute('role', 'alert');
          const existing = card.querySelector('.passport-upload > .field-error');
          if (existing) existing.remove();
          card.querySelector('.passport-upload').appendChild(errDiv);
        }
      }
    }
  });

  const privacy = document.getElementById('agreePrivacy');
  const agreementErr = document.getElementById('agreementError');
  if (!privacy.checked) {
    agreementErr.textContent = t.err_agreement;
    if (!firstError) firstError = privacy;
  } else {
    agreementErr.textContent = '';
  }

  if (firstError) {
    firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
    if (firstError.focus) firstError.focus();
  }

  return !firstError;
}

/* ===== Progress ===== */
function updateProgress() {
  let total = 0, filled = 0;

  const countField = (input) => {
    if (input.closest('.foreign-block') && !input.closest('.foreign-block').classList.contains('visible')) return;
    if (input.closest('[style*="display: none"]') || input.closest('[style*="display:none"]')) return;
    total++;
    if (input.type === 'checkbox') { if (input.checked) filled++; }
    else if (input.type === 'radio') {
      const name = input.name;
      const group = document.querySelectorAll(`input[name="${name}"]`);
      if (input === group[0]) {
        total--;
        total++;
        if (Array.from(group).some(r => r.checked)) filled++;
      } else {
        total--;
      }
    }
    else if (input.value.trim()) filled++;
  };

  document.querySelectorAll('#checkinForm input[required], #checkinForm select[required]').forEach(countField);

  const pct = total > 0 ? Math.round((filled / total) * 100) : 0;
  const bar = document.getElementById('progressFill');
  bar.style.width = pct + '%';
  bar.parentElement.setAttribute('aria-valuenow', pct);

  updateSectionChecks();
}

function updateSectionChecks() {
  checkSection('sectionPrimary', () => {
    const card = document.getElementById('primaryCard');
    const required = card.querySelectorAll('input[required]');
    return Array.from(required).every(inp => {
      if (inp.closest('.foreign-block') && !inp.closest('.foreign-block').classList.contains('visible')) return true;
      if (inp.closest('[style*="display: none"]') || inp.closest('[style*="display:none"]')) return true;
      if (inp.type === 'radio') {
        return Array.from(document.querySelectorAll(`input[name="${inp.name}"]`)).some(r => r.checked);
      }
      return inp.value.trim() !== '';
    });
  });

  checkSection('sectionAgreements', () => {
    return document.getElementById('agreePrivacy').checked;
  });
}

function checkSection(sectionId, checkFn) {
  const section = document.getElementById(sectionId);
  if (!section) return;
  const icon = section.querySelector('.check-icon');
  if (icon) icon.classList.toggle('visible', checkFn());
}

/* ===== Submit ===== */
async function handleSubmit() {
  if (submitting) return;
  if (!validateAll()) return;

  submitting = true;
  const btn = document.getElementById('submitBtn');
  btn.disabled = true;
  btn.classList.add('loading');
  btn.querySelector('[data-i18n="submit"]').textContent = i18n[currentLang].submitting;

  const payload = buildPayload();

  try {
    const res = await fetch(GAS_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify(payload),
      redirect: 'follow',
      signal: AbortSignal.timeout(30000)
    });

    const result = await res.json();
    if (result.status === 'ok') {
      const checkinDateVal = document.getElementById('checkin_date').value;
      location.replace(`thanks.html?property=${encodeURIComponent(property)}&checkin=${encodeURIComponent(checkinDateVal)}&lang=${currentLang}`);
    } else {
      throw new Error(result.error || 'unknown');
    }
  } catch (err) {
    alert(i18n[currentLang].err_submit_fail);
    submitting = false;
    btn.disabled = false;
    btn.classList.remove('loading');
    btn.querySelector('[data-i18n="submit"]').textContent = i18n[currentLang].submit;
  }
}

function buildPayload() {
  const guests = [];

  const primaryResidence = document.querySelector('input[name="primary_residence"]:checked')?.value;
  const primaryGuest = {
    role: 'primary',
    name: val('primary_name'),
    name_kana: primaryResidence === 'japan' ? val('primary_kana') : null,
    birthdate: val('primary_birthdate'),
    gender: document.querySelector('input[name="primary_gender"]:checked')?.value || null,
    occupation: val('primary_occupation'),
    email: val('primary_email'),
    phone: val('primary_phone'),
    residence: primaryResidence === 'japan'
      ? { type: 'japan', address: val('primary_address') }
      : { type: 'foreign', nationality: findNationalityCode(val('primary_nationality')) },
    passport: primaryResidence === 'foreign' ? {
      number: val('primary_passport_num'),
      image_base64: passportData['primary'] || null
    } : null
  };
  guests.push(primaryGuest);

  document.querySelectorAll('#companionCards .guest-card').forEach(card => {
    const id = card.dataset.companionId;
    const residence = card.querySelector(`input[name="${id}_residence"]:checked`)?.value;
    const guest = {
      role: 'companion',
      name: val(`${id}_name`),
      birthdate: val(`${id}_birthdate`),
      occupation: val(`${id}_occupation`),
      residence: residence === 'japan'
        ? { type: 'japan', address: val(`${id}_address`) || null }
        : { type: 'foreign', nationality: findNationalityCode(val(`${id}_nationality`)) },
      passport: residence === 'foreign' ? {
        number: val(`${id}_passport_num`),
        image_base64: passportData[id] || null
      } : null
    };
    guests.push(guest);
  });

  return {
    property: property,
    checkin_date: document.getElementById('checkin_date').value,
    guests: guests,
    agreements: {
      privacy: document.getElementById('agreePrivacy').checked
    },
    submitted_at: new Date().toISOString()
  };
}

function val(id) {
  const el = document.getElementById(id);
  return el ? el.value.trim() : '';
}

function findNationalityCode(name) {
  const entry = nationalities.find(n =>
    n.ja === name || n.en === name || n.zh === name || n.ko === name
  );
  return entry ? entry.code : name;
}

/* ===== Announce for a11y ===== */
function announce(msg) {
  const region = document.getElementById('liveRegion');
  region.textContent = msg;
  setTimeout(() => { region.textContent = ''; }, 3000);
}
