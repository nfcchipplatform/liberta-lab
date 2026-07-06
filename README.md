# liberta-lab

[LIBERTA LABO](https://liberta.help/lab.html) 専用ページのソースリポジトリです。

## ファイル構成

| ファイル | 説明 |
|---|---|
| `lab.html` | LABO ページ本体 |
| `lab.css` | ページ固有スタイル |
| `lab.js` | ページ固有スクリプト（アニメーション・ハンバーガーメニュー） |

## 本番サイトとの関係

`https://liberta.help/lab.html` として公開するため、本番サーバーでは以下のファイルを **サイトルート** に配置します。

```
/var/www/liberta.help/   （例）
├── index.html           ← 既存コーポレートサイト
├── styles.css           ← 既存（lab.html から参照）
├── images/              ← 既存（lab.html から参照）
├── lab.html             ← このリポジトリ
├── lab.css              ← このリポジトリ
└── lab.js               ← このリポジトリ
```

`lab.html` は `./styles.css` と `./images/` を参照するため、コーポレートサイトと同じディレクトリに配置してください。

## ローカル確認

コーポレートサイトのファイル（`styles.css`, `images/` など）と同じフォルダに `lab.html` 等を置いてブラウザで開くか、簡易サーバーを使います。

```bash
# 例: コーポレートサイトのルートで
python -m http.server 8080
# http://localhost:8080/lab.html
```

## Git 操作

```bash
git remote add origin https://github.com/nfcchipplatform/liberta-lab.git
git add lab.html lab.css lab.js README.md .gitignore
git commit -m "Initial commit: add LIBERTA LABO page"
git push -u origin main
```

## デプロイ

サーバーへの反映方法は環境に合わせて設定してください（rsync / FTP / GitHub Actions など）。

`deploy.example.sh` に rsync の例を記載しています。実際のホスト名・パスに合わせて編集してください。
