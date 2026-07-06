# liberta-lab

[LIBERTA LABO](https://liberta.help/lab.html) 専用ページのソースリポジトリです。

## ファイル構成

| ファイル | 説明 |
|---|---|
| `lab.html` | LABO ページ本体 |
| `lab.css` | ページ固有スタイル |
| `lab.js` | ページ固有スクリプト |

## 更新の流れ

```powershell
# 1. 編集して GitHub に push（コードのみ）
git add lab.html lab.css lab.js
git commit -m "更新内容"
git push

# 2. ローカルから本番へデプロイ
.\deploy.ps1
```

FTP の接続情報は `.env` に保存します（Git には含めません）。

### 初回セットアップ

```powershell
copy .env.example .env
# .env を編集して FTP 情報を入力

copy deploy.example.ps1 deploy.ps1   # または deploy.ps1 をそのまま使う
```

## 本番との関係

`lab.html` は既存サイトの `styles.css` と `images/` を参照します。  
デプロイ先は `index.html` と同じフォルダです。
