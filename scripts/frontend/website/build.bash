#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

echo "🛑 Cleaning Frontend Website"
rm -rfv ../../../frontend/website/dist
echo "🏗️ Building Frontend Website "
export NODE_ENV=$1
npm --prefix ../../../frontend/website run build