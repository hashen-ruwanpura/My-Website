#!/bin/bash

echo "Emergency GitHub Pages Deployment"
echo "==============================="
echo

# Ensure we have basic files in the build directory
mkdir -p frontend/build
touch frontend/build/.nojekyll

echo "Committing and pushing changes..."
git add frontend/build/
git commit -m "Add basic index.html to build directory"
git push

echo "Creating a direct GitHub Pages deployment..."
cd frontend/build
git init
git checkout --orphan gh-pages
git add .
git commit -m "Direct deployment of static files"
git remote add origin-pages https://github.com/hashen-ruwanpura/My-Website.git || git remote set-url origin-pages https://github.com/hashen-ruwanpura/My-Website.git
echo "Now you need to push with your GitHub credentials:"
echo "git push -f origin-pages gh-pages"
echo
echo "After pushing, check your GitHub repository settings to ensure GitHub Pages is configured to deploy from the gh-pages branch."
