#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
echo 'joco.io' > CNAME

git init
git add -A
git commit -m 'deploy'

# forcibly (-f) push the commit to the gh-pages branch of portfolio5.git
git push -f git@github.com:jocoio/portfolio5.git main:gh-pages

cd -