#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn build
yarn export

# navigate into the build output directory
cd build

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/jy1263/rotmg-dps-calculator.git master:gh-pages

cd -