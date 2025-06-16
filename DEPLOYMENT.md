# Next.js to AWS S3/CloudFront Deployment Strategy

## Overview

This document outlines the deployment strategy for the Keyte Group website built with Next.js. The site is statically generated and deployed to AWS S3 with CloudFront serving as the CDN. This approach bypasses AWS Amplify and its dependency resolution issues while maintaining high performance and SEO benefits.

## Infrastructure Components

1. **Next.js Static Export**: The site is built using Next.js's static export feature, generating HTML/CSS/JS in the `out` directory
2. **AWS S3**: All static assets are hosted in the `keytegroup` S3 bucket
3. **AWS CloudFront**: CDN distribution `EM0S8BT5LQI3W` serves content with proper caching and SSL
4. **Domain**: `keytegroup.com` and `www.keytegroup.com` point to CloudFront distribution

## Complete Deployment Workflow

### 1. Build the Next.js Site Locally

```bash
# Install dependencies (if needed)
npm install --legacy-peer-deps

# Build the site (generates the 'out' directory)
npm run build
```

If you encounter the export error message about `next export` being deprecated, ignore it - the build still produces the correct `out` directory with static files.

### 2. Deploy to S3 and CloudFront

```bash
# Run the deployment script
./deploy-s3.sh
```

This script:
- Verifies the presence of the `out` directory
- Uploads all content to S3 with appropriate content types and cache headers
- Creates a CloudFront invalidation to ensure immediate content refresh

## Technical Details

### S3 Bucket Configuration

- **Bucket Name**: `keytegroup`
- **Website Endpoint**: http://keytegroup.s3-website-us-east-1.amazonaws.com
- **Index Document**: `index.html`
- **Error Document**: `index.html`
- **Public Access**: Blocked at account level; CloudFront access only

### CloudFront Configuration

- **Distribution ID**: `EM0S8BT5LQI3W`
- **Domain**: d1657kj4sv01us.cloudfront.net
- **Default Root Object**: `index.html`
- **Origin**: keytegroup.s3.amazonaws.com
- **Viewer Protocol Policy**: Redirect to HTTPS
- **Cache Policy**: Optimized with appropriate TTL

### DNS Configuration

Currently, the domain uses an HTML frameset approach:
- `keytegroup.com` serves a frameset that loads CloudFront content
- Future improvement: Direct CNAME to CloudFront instead of using frameset

## Detailed Deployment Script Explanation

The `deploy-s3.sh` script handles all aspects of deployment:

### 1. Environment Setup and Verification
- Checks for AWS CLI installation
- Verifies the Next.js build output in the `out` directory exists
- Ensures required files like `index.html` are present

### 2. File Upload Strategy
- Uploads all files with appropriate content types
- Uses different cache control settings based on file type:
  - HTML files: `max-age=3600` (1 hour)
  - CSS/JS files: `max-age=86400` (24 hours)
  - Images and fonts: `max-age=2592000` (30 days)
  - PDFs: `max-age=86400` (24 hours)

### 3. CloudFront Invalidation
- Creates a CloudFront invalidation for `/*` to ensure immediate content refresh
- Typically takes 5-10 minutes to propagate globally

### 4. Deployment Verification
- Tests the S3 website endpoint for accessibility
- Reports success/failure

## Troubleshooting Common Issues

### 1. S3 403 Forbidden Access
The bucket has public access blocked at the account level. This is expected - content should be accessed via CloudFront.

### 2. CloudFront Serving Stale Content
- Verify the invalidation completed successfully:
  ```bash
  aws cloudfront list-invalidations --distribution-id EM0S8BT5LQI3W
  ```
- Check the status of a specific invalidation:
  ```bash
  aws cloudfront get-invalidation --distribution-id EM0S8BT5LQI3W --id [INVALIDATION_ID]
  ```

### 3. Missing Files After Deployment
- Check the file exists in the `out` directory before deploying
- Verify content was uploaded to S3:
  ```bash
  aws s3 ls s3://keytegroup/path/to/file
  ```

### 4. Build Errors
- Use `--legacy-peer-deps` flag with npm install to avoid dependency conflicts
- Ignore the `next export` deprecation warning during build

## Future Improvements

1. **Direct Domain Access**: Configure DNS to point directly to CloudFront without frameset
2. **Security Headers**: Add security headers via CloudFront functions
3. **Redirect Rules**: Implement redirection for legacy URLs
4. **Error Pages**: Custom error pages and handling
5. **Monitoring**: Set up CloudWatch alarms for availability monitoring

## CloudFront Configuration Update Process

If needed, the CloudFront configuration can be updated:

```bash
# Get current config + ETag
aws cloudfront get-distribution-config --id EM0S8BT5LQI3W > cf-config.json

# Edit cf-config.json
# Remember to preserve the ETag and remove outer DistributionConfig wrapper

# Update distribution
aws cloudfront update-distribution --id EM0S8BT5LQI3W --distribution-config file://cf-update.json --if-match [ETAG]
```

## Reference Information

- **S3 Website URL**: http://keytegroup.s3-website-us-east-1.amazonaws.com
- **CloudFront URL**: https://d1657kj4sv01us.cloudfront.net
- **Main Domain**: https://keytegroup.com
- **AWS Region**: us-east-1
- **Local Build Path**: `./out/`

---

This deployment strategy handles all aspects of deploying a Next.js site to AWS S3/CloudFront while avoiding the dependency issues encountered with AWS Amplify. The automated script makes deployment simple, consistent, and reliable. 