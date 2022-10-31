#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

echo "👀  Watching Frontend Website"
export NODE_ENV="watch"
npm --prefix ../../../frontend/website run watch
