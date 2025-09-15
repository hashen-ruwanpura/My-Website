#!/bin/bash

echo "GitHub Pages Site Diagnostics"
echo "==========================="
echo

# Check GitHub Pages direct URL
echo "Checking GitHub Pages direct URL..."
curl -s -I "https://hashen-ruwanpura.github.io/My-Website/" | head -n 1
echo

# Check custom domain
echo "Checking custom domain..."
curl -s -I "https://hashenruwanpura.com/" | head -n 1
echo

# Check problematic path
echo "Checking problematic frontend/build path..."
curl -s -I "https://hashenruwanpura.com/frontend/build/" | head -n 1
echo

# Check DNS resolution
echo "Checking DNS resolution for hashenruwanpura.com..."
dig hashenruwanpura.com +short
echo

echo "Recommendations:"
echo "1. Try accessing your site at: https://hashen-ruwanpura.github.io/My-Website/"
echo "2. If that works, temporarily remove your custom domain in GitHub Pages settings"
echo "3. After a successful deployment, re-add your custom domain"
echo "4. Wait for DNS propagation (up to 48 hours)"
echo "5. Try using a different device or network to access your site"
echo
echo "Remember that DNS changes and cached redirects can take time to update globally."
