# 民泊チェックイン情報登録フォーム

宿泊者の身分証（本人確認書類）を事前に登録してもらう Web フォームです。  
旅館業法の宿帳記載義務に対応し、チェックイン業務を効率化します。

---

## 1. 公開手順（Cloudflare Pages）

1. GitHub で新しいリポジトリ `minpaku-checkin` を作成（Public）
2. このフォルダのファイルをすべてアップロード（`_headers` ファイルも忘れずに）
3. Cloudflare ダッシュボード → **Workers & Pages** → **Create application** → **Pages**
4. **Connect to Git** → GitHub を連携 → `minpaku-checkin` を選択
5. ビルド設定: Framework preset `None`、Build command 空欄、Output directory `/`
6. **Save and Deploy** → 1〜2 分で公開
7. 独自ドメインを設定: **Custom domains** → `checkin.あなたのドメイン.com` を追加
8. URL 例: `https://checkin.marugame-stay.com/`

---

## 2. Google スプレッドシートの準備

### 受信用シート（シート名: `registrations`）

宿泊者ごとに 1 行ずつ記録されます。

| 列 | 内容 |
|---|---|
| A | token |
| B | property |
| C | checkin_date |
| D | submitted_at |
| E | role（primary / companion） |
| F | name |
| G | name_kana |
| H | birthdate |
| I | gender |
| J | occupation |
| K | email |
| L | phone |
| M | residence_type（japan / foreign） |
| N | address |
| O | nationality |
| P | passport_number |
| Q | passport_image_url（Drive リンク） |

### tokens シート（シート名: `tokens`）

| 列 | 内容 |
|---|---|
| A | token（12 文字英数字） |
| B | property（@marugame など） |
| C | guest_name（予約者名） |
| D | checkin（チェックイン日） |
| E | expires（有効期限 = チェックイン日 + 1 日） |
| F | used（TRUE / FALSE） |
| G | used_at（使用日時） |

---

## 3. Google Apps Script の設定

1. スプレッドシートを開き **拡張機能 → Apps Script** をクリック
2. GAS のコードを貼り付け（別途指示書を参照）
3. **デプロイ → 新しいデプロイ → ウェブアプリ** を選択
4. 設定:
   - 実行するユーザー: **自分**
   - アクセスできるユーザー: **全員（ログイン不要）**
5. 「デプロイ」をクリック → 表示された **Web アプリ URL** をコピー
6. `script.js` を開き、下記の行を見つけて URL を貼り付け:
   ```js
   const GAS_ENDPOINT = 'https://script.google.com/macros/s/ここにIDを貼り付け/exec';
   ```
7. GitHub にプッシュ（または直接ファイルを更新）

---

## 4. Drive フォルダの権限設定

パスポート画像が保存されるフォルダは**必ず非公開**にしてください。

1. Google Drive で画像保存用フォルダを開く
2. フォルダを右クリック → **共有**
3. 「一般的なアクセス」を **制限付き（自分のみ）** に設定
4. **毎月 1 回、共有設定を確認してください**（カレンダーにリマインダー推奨）

---

## 5. トークン発行の手順

1. スプレッドシートのメニューバーに追加される **「チェックイン管理」→「トークン + URL 生成」** をクリック
2. ダイアログに以下を入力:
   - 物件名（@marugame）
   - ゲスト名
   - チェックイン日
3. 「生成」をクリック → tokens シートに行が追加され、URL が表示される
4. URL をコピーしてゲストに送付

### URL の書式

```
https://あなたのユーザー名.github.io/checkin/?token=xK9mP2qR7vL3&property=@marugame&checkin=2026-05-20&lang=ja
```

---

## 6. QR コード生成

上記 URL を QR コードに変換してゲストに送付します。

推奨ツール:
- [QR Tiger](https://www.qrtiger.com/) — 無料プランあり
- [QR Code Generator](https://www.qr-code-generator.com/)

QR コードは予約確認メッセージに画像として添付するか、PDF に埋め込むと便利です。

---

## 7. トラブル時の対処

### 「リンクが無効と出る」とゲストから連絡があった場合

1. tokens シートで該当トークンを確認
2. チェック項目:
   - `used` が TRUE → すでに登録済み（必要なら新トークンを発行）
   - `expires` が過去日 → 有効期限切れ（新トークンを発行）
   - 該当行が存在しない → URL の入力ミス（正しい URL を再送付）

### 送信エラーが出る場合

1. GAS のデプロイ URL が `script.js` に正しく設定されているか確認
2. GAS の**実行ログ**を確認（Apps Script → 実行数）
3. スプレッドシートのシート名が `registrations` `tokens` と完全一致しているか確認
4. Drive の容量に空きがあるか確認

---

## 8. 個人情報保護

### 必須の対策

- **Google アカウントの 2 段階認証を必ず有効にしてください**
- パスポート画像の Drive フォルダは**自分のみアクセス可能**に設定
- スプレッドシートの共有設定も**自分のみ**に設定

### パスポート画像の保存期間

旅館業法により、宿泊者名簿は**チェックイン日から 3 年間**保存が必要です。

- 3 年経過後は速やかに削除してください
- 削除対象: Drive 内のパスポート画像 + スプレッドシートの該当行
- 年に 1 回、古いデータの棚卸しを推奨

### 毎月の確認事項

- [ ] Drive フォルダの共有設定が「自分のみ」になっているか
- [ ] スプレッドシートの共有設定が「自分のみ」になっているか
- [ ] Google アカウントの 2 段階認証が有効か
- [ ] 不審なアクセスがないか（Google アカウントのセキュリティ履歴）

---

## ファイル構成

```
checkin/
├── index.html    フォーム本体
├── error.html    トークン無効時のエラー画面
├── thanks.html   送信完了画面
├── style.css     スタイルシート
├── script.js     入力制御・送信処理・多言語対応
└── README.md     この運用手順書
```
