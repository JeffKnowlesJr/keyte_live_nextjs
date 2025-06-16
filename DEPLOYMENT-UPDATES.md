# CloudFront Access Issues & Solution

## Problem Identified

We identified an issue with the CloudFront distribution that's causing "Access Denied" errors when accessing resources. The root cause is:

1. CloudFront is configured with **Origin Access Control (OAC)** for secure S3 access
2. The frameset HTML is trying to access CloudFront URL directly (`https://d1657kj4sv01us.cloudfront.net/`)
3. This URL path requests a directory listing from S3, which is blocked by OAC security

## Current Status

- ✅ S3 Deployment: Successfully deploying Next.js static files to S3
- ✅ CloudFront: Properly configured with OAC for security
- ✅ Main Page: Successfully serving the index.html file as default root object
- ❌ Direct Paths: Directory paths like `/images/` return 403 Forbidden
- ❌ Frameset: Current frameset fails because it references `/` instead of `/index.html`

## Solution: Updated Frameset HTML

The simplest and most immediate solution is to update the frameset HTML on your domain host to point explicitly to `/index.html`:

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
  <head>
    <title>The Keyte Group</title>
    <meta name="description" content="The Keyte Group: Optimizing Your Organization's Performance and Building Capacity with Existing Human Resources" />
    <meta name="keywords" content="KeyteGroup organization performance capacity building human resources optimization" />
  </head>
  <frameset rows="100%,*" border="0">
    <frame src="https://d1657kj4sv01us.cloudfront.net/index.html" frameborder="0" />
  </frameset>
</html>
```

### Implementation Steps

1. Save the HTML above as `index.html`
2. Upload to your domain host (replacing the current index.html)
3. Test access at keytegroup.com

This solution maintains the security of Origin Access Control while fixing the access denied issues.

## Alternative Solutions (For Future Consideration)

1. **Option A: Remove OAC** - Would allow directory listing but reduce security
2. **Option B: Create a new CloudFront distribution** - Without OAC, but requires DNS changes
3. **Option C: Use CloudFront Functions** - To add default index.html to directory requests

## Long-Term Recommendation

For the best SEO and user experience, eventually migrate away from the frameset approach entirely:

1. Point keytegroup.com DNS directly to CloudFront
2. Remove the frameset wrapper
3. Use CloudFront custom error responses

This would provide clean URLs and better SEO, but requires DNS changes at your domain provider. 