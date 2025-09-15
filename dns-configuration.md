# DNS Configuration for GitHub Pages with Custom Domain

## Required DNS Records for GitHub Pages

### 1. A Records (for apex domain)
The following A records should be configured in Cloudflare:
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153

### 2. CNAME Record (for www subdomain)
CNAME  www  hashen-ruwanpura.github.io.

## Instructions:
1. Log in to your Cloudflare account
2. Select your domain (hashenruwanpura.com)
3. Go to DNS settings
4. Add the four A records pointing to the GitHub Pages IP addresses
5. Add a CNAME record for www pointing to your GitHub Pages domain
6. Make sure Cloudflare is set to "DNS Only" or "Proxied" (grey cloud)

## Verifying DNS propagation:
Run the following commands to verify your DNS setup:

```
dig hashenruwanpura.com +noall +answer
dig www.hashenruwanpura.com +noall +answer
```

## Troubleshooting:
- DNS changes can take up to 48 hours to propagate globally
- Ensure your GitHub repository has a CNAME file with "hashenruwanpura.com" (no www)
- Check GitHub repository settings to ensure GitHub Pages is enabled
- Verify that your custom domain is configured correctly in GitHub Pages settings
