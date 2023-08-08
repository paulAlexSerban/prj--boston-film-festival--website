#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

source ../config.env

echo "Watching landing-ssg..."

if [ -d ../public ]; then
  echo "Removing old public folder..."
  rm -rfv ../src/public
  mkdir ../src/public
fi

cp -rfv ../../../assets/dist/* ../src/public
export PUBLIC_PATH="/"
npm --prefix .. run watch