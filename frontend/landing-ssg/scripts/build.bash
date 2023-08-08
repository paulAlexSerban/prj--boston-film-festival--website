#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

source ../config.env

# Parse command-line options
while getopts ":m:p:e:" opt; do
  case $opt in
  e) ENV="$OPTARG" ;;
  *) usage ;;
  esac
done

# Shift the options and arguments so that $1 refers to the first non-option argument
shift $((OPTIND - 1))

if [[ -z $ENV ]]; then
  ENV="dev"
fi

if [[ $ENV == "dev" ]]; then
  export SERVER_ENV="development"
elif [[ $ENV == "gh_pages" ]]; then
  export PUBLIC_PATH="/prj--boston-film-festival--website/"
elif [[ $ENV == "prod" ]]; then
  export PUBLIC_PATH="/"
fi

echo "Building landing-ssg..."
if [ -d ../public ]; then
  echo "Removing old public folder..."
  rm -rfv ../src/public
  mkdir ../src/public
fi
mkdir ../src/public

cp -rfv ../../../assets/dist/* ../src/public
npm --prefix .. run build
