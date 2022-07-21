#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn build
yarn export

# navigate into the build output directory
cd out

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/rotmg-mirror/rotmg-mirror.github.io.git master:gh-pages

cd -