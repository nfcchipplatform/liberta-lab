# liberta-lab

[LIBERTA LABO](https://liberta.help/lab.html) 専用ページのソースリポジトリです。

## ファイル構成

| ファイル | 説明 |
|---|---|
| `lab.html` | LABO ページ本体 |
| `lab.css` | ページ固有スタイル |
| `lab.js` | ページ固有スクリプト |

## デプロイ（自動）

`main` ブランチへ push すると、GitHub Actions が本番サーバーへ自動反映します。

### 初回だけ：GitHub Secrets を登録

リポジトリの **Settings → Secrets and variables → Actions → New repository secret** で以下を追加してください。

| Secret 名 | 内容 | 例 |
|---|---|---|
| `DEPLOY_HOST` | サーバーのホスト名 | `sv1234.xserver.jp` |
| `DEPLOY_USER` | SSH ユーザー名 | `liberta` |
| `DEPLOY_SSH_KEY` | SSH 秘密鍵（全文） | `-----BEGIN OPENSSH PRIVATE KEY-----...` |
| `DEPLOY_PATH` | アップロード先（index.html があるフォルダ） | `/home/xxx/liberta.help/public_html` |
| `DEPLOY_PORT` | SSH ポート（省略可、デフォルト 22） | `10022` |

Secrets 登録後、`main` に push すれば `lab.html` / `lab.css` / `lab.js` が自動デプロイされます。

### 日常の更新フロー

```bash
# 編集 → commit → push するだけ
git add .
git commit -m "更新内容"
git push
```

push 後、GitHub の **Actions** タブでデプロイ結果を確認できます。

## 本番サイトとの関係

`lab.html` は既存コーポレートサイトの `styles.css` と `images/` を参照します。  
3ファイルは **index.html と同じフォルダ** に配置されます。

```
サイトルート/
├── index.html      ← 既存
├── styles.css      ← 既存
├── images/         ← 既存
├── lab.html        ← このリポジトリ（自動デプロイ）
├── lab.css
└── lab.js
```
