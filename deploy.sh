#!/bin/bash
set -e

cd prod
git init

git config user.name "Noelia Franco"
git config user.email "noeliasfranco@gmail.com"

git add -A
git commit -m "Deploy to GitHub Pages"

# Force push from the current repo's master branch to the remote repo's gh-pages branch.
git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:gh-pages > /dev/null 2>&1
