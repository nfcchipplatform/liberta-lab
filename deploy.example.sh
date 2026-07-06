#!/usr/bin/env bash
# 本番サーバーへ lab ページを同期する例
# 使い方: cp deploy.example.sh deploy.sh && 編集して実行

set -euo pipefail

REMOTE_USER="your-user"
REMOTE_HOST="your-server.example.com"
REMOTE_PATH="/var/www/liberta.help"

rsync -avz --progress \
  lab.html lab.css lab.js \
  "${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_PATH}/"

echo "Deployed to https://liberta.help/lab.html"
