#!/bin/bash

echo "GitHub Pages Setup Verification Script"
echo "====================================="
echo

# Check for CNAME file
if [ -f "CNAME" ]; then
  echo "✅ CNAME file exists"
  echo "   Content: $(cat CNAME)"
else
  echo "❌ CNAME file is missing!"
fi

# Check for .nojekyll file
if [ -f ".nojekyll" ]; then
  echo "✅ .nojekyll file exists at root level"
else
  echo "❌ .nojekyll file is missing at root level!"
fi

if [ -f "frontend/build/.nojekyll" ]; then
  echo "✅ .nojekyll file exists in build directory"
else
  echo "❌ .nojekyll file is missing in build directory!"
  echo "   Creating .nojekyll in frontend/build/"
  mkdir -p frontend/build/
  touch frontend/build/.nojekyll
fi

# Check GitHub workflow file
if [ -f ".github/workflows/deploy.yml" ]; then
  echo "✅ GitHub workflow file exists"
  if grep -q "touch frontend/build/.nojekyll" ".github/workflows/deploy.yml"; then
    echo "✅ Workflow file includes .nojekyll creation"
  else
    echo "❌ Workflow file does not include .nojekyll creation!"
  fi
else
  echo "❌ GitHub workflow file is missing!"
fi

# Check for redundant workflow files
WORKFLOW_COUNT=$(find .github/workflows -name "*.yml" | wc -l)
if [ "$WORKFLOW_COUNT" -gt 1 ]; then
  echo "⚠️  Multiple workflow files detected. This might cause conflicts:"
  ls -la .github/workflows/*.yml
else
  echo "✅ Only one workflow file exists"
fi

echo
echo "Next steps:"
echo "1. Commit and push these changes"
echo "2. Go to your GitHub repository Settings > Pages"
echo "3. Verify that GitHub Pages is configured to deploy from GitHub Actions"
echo "4. Check the Actions tab to monitor the deployment"
echo
echo "DNS Configuration (for Cloudflare):"
echo "- Ensure you have A records for the apex domain pointing to GitHub Pages IPs:"
echo "  185.199.108.153"
echo "  185.199.109.153"
echo "  185.199.110.153"
echo "  185.199.111.153"
echo "- Set CNAME record for 'www' pointing to 'hashen-ruwanpura.github.io.'"
