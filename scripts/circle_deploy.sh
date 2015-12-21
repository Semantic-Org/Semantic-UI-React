#!/usr/bin/env bash

NPM_PACKAGE_NAME=$(json -f package.json name)
NPM_PACKAGE_VERSION=$(json -f package.json version)

#
# configure git
#
git config --global user.name "tadeploy"
git config --global user.email "devteam@technologyadvice.com"

#
# generate changelog
#
echo "...generating changelog"
curl -X POST github-changelog-api.herokuapp.com/$CIRCLE_PROJECT_USERNAME/$CIRCLE_PROJECT_REPONAME \
 | json contents > CHANGELOG.md

git add CHANGELOG.md

if [[ -n $(git status --porcelain) ]]; then
  echo "...starting push, CHANGELOG.md is dirty after build"
  git commit -n -m "deploy CHANGELOG.md by $CIRCLE_USERNAME [ci skip]"
  git push origin $CIRCLE_BRANCH
else
  echo "...skipping push, repo is clean after build"
fi

#
# s3 sync
#
SOURCE_DIRECTORY=./dist
S3_BUCKET=ta-stardust-assets

echo "...syncing with s3"
aws s3 sync ${SOURCE_DIRECTORY} s3://${S3_BUCKET}/${NPM_PACKAGE_VERSION}/ --delete --acl public-read

#
# npm publish
#
echo "...checking if $NPM_PACKAGE_NAME@$NPM_PACKAGE_VERSION is already published"

NPM_PUBLISHED_VERSIONS=$(npm view ${NPM_PACKAGE_NAME} versions | sed "s/[][',]//g")
NPM_IS_PUBLISHED=false

for ver in ${NPM_PUBLISHED_VERSIONS[@]}; do
  [[ ${NPM_PACKAGE_VERSION} == ${ver} ]] && NPM_IS_PUBLISHED=true
done

if ${NPM_IS_PUBLISHED}; then
 echo "...$NPM_PACKAGE_NAME@$NPM_PACKAGE_VERSION is already published"
else
 echo "...publishing $NPM_PACKAGE_NAME@$NPM_PACKAGE_VERSION"
 echo "...writing ~/.npmrc"
 echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > ~/.npmrc
 echo "...publishing"
 npm publish
fi

#
# gh-pages
#
echo "...deploying gh-pages"
git push -f $CIRCLE_BRANCH:gh-pages
git checkout gh-pages
gulp docs
git add .
git add -f docs/build

if [[ -n $(git status --porcelain) ]]; then
  echo "...starting push, gh-pages is dirty after build"
  git commit -n -m "deploy gh-pages by $CIRCLE_USERNAME [ci skip]"
  git push origin gh-pages
else
  echo "...skipping push, gh-pages is clean after build"
fi
