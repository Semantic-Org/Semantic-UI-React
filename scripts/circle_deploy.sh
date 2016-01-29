#!/usr/bin/env bash

NPM_PACKAGE_VERSION=$(json -f package.json version)

#
# configure git
#
git config --global user.name "tadeploy"
git config --global user.email "devteam@technologyadvice.com"
git config --global push.default simple

#
# generate changelog
#
echo "...generating changelog"
ta-script circle_ci/create_changelog

#
# gh-pages
#
echo "...deploying gh-pages"
git push -f origin $CIRCLE_BRANCH:gh-pages
git checkout gh-pages
gulp docs
git add .
git add -f docs/build

if [[ -n $(git status --porcelain) ]]; then
  echo "...starting push, gh-pages is dirty after build"
  git commit -n -m "deploy gh-pages by $CIRCLE_USERNAME"
  git push origin gh-pages
else
  echo "...skipping push, gh-pages is clean after build"
fi
