#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

echo "🛑  Cleaning Frontend Website node_modules"
rm -rfv ../../../frontend/website/node_modules
echo "🔧  Installing Frontend Website"
npm --prefix ../../../frontend/website install
