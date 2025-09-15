#!/bin/bash

echo "Checking DNS settings for hashenruwanpura.com..."
echo ""

echo "A record lookup:"
dig hashenruwanpura.com +short
echo ""

echo "CNAME record lookup:"
dig www.hashenruwanpura.com +short
echo ""

echo "GitHub Pages IP addresses should be one of these:"
echo "185.199.108.153"
echo "185.199.109.153"
echo "185.199.110.153"
echo "185.199.111.153"
echo ""

echo "Testing site accessibility:"
curl -I https://hashenruwanpura.com
echo ""

echo "Done! Check if your DNS records are correctly pointing to GitHub Pages IP addresses."
