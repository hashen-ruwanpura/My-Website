#!/bin/bash

echo "GitHub Pages Troubleshooting Tool"
echo "================================="
echo

# Function to check URL and display status
check_url() {
    local url=$1
    echo "Checking $url..."
    status=$(curl -s -o /dev/null -w "%{http_code}" "$url")
    if [ "$status" == "200" ]; then
        echo "✅ Status: $status (OK)"
    else
        echo "❌ Status: $status (Error)"
    fi
}

# Check main domain and URLs
echo "Checking domain access:"
check_url "https://hashenruwanpura.com"
check_url "https://www.hashenruwanpura.com"
check_url "https://hashen-ruwanpura.github.io"

echo
echo "Verify these additional settings:"
echo "1. GitHub Pages settings:"
echo "   - Go to repository Settings > Pages"
echo "   - Source should be 'GitHub Actions'"
echo "   - Custom domain should be 'hashenruwanpura.com'"
echo "   - 'Enforce HTTPS' should be checked"
echo 
echo "2. Check latest workflow run:"
echo "   - Go to repository Actions tab"
echo "   - The latest 'Deploy to GitHub Pages' workflow should be successful"
echo
echo "3. Check browser issues:"
echo "   - Try accessing in an incognito/private window"
echo "   - Clear your browser cache"
echo "   - Try a different browser"
echo 
echo "4. Wait for changes to propagate:"
echo "   - GitHub Pages and DNS changes can take time"
echo "   - Check back in 5-10 minutes"
