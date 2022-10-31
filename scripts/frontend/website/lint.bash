#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit
echo "🔍  Lint Frontend Website"
npm --prefix ../../../frontend/website run lint