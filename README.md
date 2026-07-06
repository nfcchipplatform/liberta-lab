# liberta-lab

[LIBERTA LABO](https://liberta.help/lab.html) 専用ページのソースリポジトリです。

## デプロイ（自動）

`main` ブランチへ push すると、GitHub Actions が FTP 経由で本番サーバーへ自動反映します。

### 初回だけ：GitHub Secrets を登録

https://github.com/nfcchipplatform/liberta-lab/settings/secrets/actions

| Secret 名 | 値 |
|---|---|
| `FTP_SERVER` | `www1158.onamae.ne.jp` |
| `FTP_USERNAME` | `info@liberta.help` |
| `FTP_PASSWORD` | （FTPパスワード） |
| `FTP_REMOTE_DIR` | `/home/r3253290/public_html/` |

### 日常の更新

```bash
git add .
git commit -m "更新内容"
git push
```

push 後、Actions タブで結果を確認: https://github.com/nfcchipplatform/liberta-lab/actions

## ファイル構成

| ファイル | 説明 |
|---|---|
| `lab.html` | LABO ページ本体 |
| `lab.css` | ページ固有スタイル |
| `lab.js` | ページ固有スクリプト |

`lab.html` は既存サイトの `styles.css` と `images/` を参照するため、`index.html` と同じフォルダに配置されます。
