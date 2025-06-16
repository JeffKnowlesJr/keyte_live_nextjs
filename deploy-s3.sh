#!/bin/bash
# Keyte Group Website - S3 Static Hosting Deployment Script
# Version: 2.1 Production Build

# Configuration
AWS_REGION="us-east-1"
S3_BUCKET="keytegroup"  # CloudFront points to this bucket, not keytegroup.com
CLOUDFRONT_DISTRIBUTION_ID="EM0S8BT5LQI3W"  # Found the CloudFront distribution ID

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}🚀 Keyte Group Website Deployment Script v2.1${NC}"
echo "=================================================="

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
    echo -e "${RED}❌ AWS CLI is not installed. Please install it first.${NC}"
    exit 1
fi

# Check if we're in the correct directory and out folder exists
if [ ! -d "out" ]; then
    echo -e "${RED}❌ 'out' directory not found. Please run this script from the project root directory after building.${NC}"
    exit 1
fi

if [ ! -f "out/index.html" ]; then
    echo -e "${RED}❌ index.html not found in out directory. Please build the project first.${NC}"
    exit 1
fi

echo -e "${YELLOW}📂 Verifying file structure in out directory...${NC}"

# Verify required files exist in out directory
required_files=("out/index.html")

for file in "${required_files[@]}"; do
    if [ ! -f "$file" ]; then
        echo -e "${RED}❌ Required file missing: $file${NC}"
        exit 1
    fi
done

echo -e "${GREEN}✅ All required files found in out directory${NC}"

# Create S3 bucket if it doesn't exist
echo -e "${YELLOW}🪣 Checking S3 bucket...${NC}"
if ! aws s3 ls "s3://$S3_BUCKET" 2>/dev/null; then
    echo -e "${YELLOW}Creating S3 bucket: $S3_BUCKET${NC}"
    aws s3 mb "s3://$S3_BUCKET" --region "$AWS_REGION"
    
    # Enable static website hosting
    aws s3 website "s3://$S3_BUCKET" --index-document index.html --error-document index.html
fi

# Sync all files from out directory to S3
echo -e "${YELLOW}📤 Uploading files from out directory to S3...${NC}"

# Upload all files from out directory with appropriate content types
aws s3 sync out/ "s3://$S3_BUCKET" \
    --region "$AWS_REGION" \
    --delete \
    --cache-control "max-age=3600" \
    --exclude "*.css" \
    --exclude "*.js" \
    --exclude "*.png" \
    --exclude "*.jpg" \
    --exclude "*.jpeg" \
    --exclude "*.gif" \
    --exclude "*.svg" \
    --exclude "*.ico" \
    --exclude "*.woff" \
    --exclude "*.woff2" \
    --exclude "*.ttf" \
    --exclude "*.pdf"

# Upload CSS files with specific content type and longer cache
aws s3 sync out/ "s3://$S3_BUCKET" \
    --region "$AWS_REGION" \
    --exclude "*" \
    --include "*.css" \
    --content-type "text/css" \
    --cache-control "max-age=86400"

# Upload JavaScript files with specific content type and longer cache
aws s3 sync out/ "s3://$S3_BUCKET" \
    --region "$AWS_REGION" \
    --exclude "*" \
    --include "*.js" \
    --content-type "application/javascript" \
    --cache-control "max-age=86400"

# Upload image files with long cache
aws s3 sync out/ "s3://$S3_BUCKET" \
    --region "$AWS_REGION" \
    --exclude "*" \
    --include "*.png" \
    --include "*.jpg" \
    --include "*.jpeg" \
    --include "*.gif" \
    --include "*.svg" \
    --content-type-by-extension \
    --cache-control "max-age=2592000"

# Upload favicon
aws s3 sync out/ "s3://$S3_BUCKET" \
    --region "$AWS_REGION" \
    --exclude "*" \
    --include "*.ico" \
    --content-type "image/x-icon" \
    --cache-control "max-age=2592000"

# Upload font files
aws s3 sync out/ "s3://$S3_BUCKET" \
    --region "$AWS_REGION" \
    --exclude "*" \
    --include "*.woff" \
    --include "*.woff2" \
    --include "*.ttf" \
    --content-type-by-extension \
    --cache-control "max-age=2592000"

# Upload PDF files
aws s3 sync out/ "s3://$S3_BUCKET" \
    --region "$AWS_REGION" \
    --exclude "*" \
    --include "*.pdf" \
    --content-type "application/pdf" \
    --cache-control "max-age=86400"

# Set bucket policy for public read access
echo -e "${YELLOW}🔐 Setting bucket policy for public access...${NC}"
cat > bucket-policy.json << EOF
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::$S3_BUCKET/*"
        }
    ]
}
EOF

aws s3api put-bucket-policy --bucket "$S3_BUCKET" --policy file://bucket-policy.json
rm bucket-policy.json

# Invalidate CloudFront distribution if specified
if [ ! -z "$CLOUDFRONT_DISTRIBUTION_ID" ]; then
    echo -e "${YELLOW}☁️ Invalidating CloudFront cache...${NC}"
    aws cloudfront create-invalidation \
        --distribution-id "$CLOUDFRONT_DISTRIBUTION_ID" \
        --paths "/*"
fi

# Output success information
echo -e "${GREEN}✅ Deployment completed successfully!${NC}"
echo "=================================================="
echo -e "${GREEN}🌐 Website URL: http://$S3_BUCKET.s3-website-$AWS_REGION.amazonaws.com${NC}"
echo -e "${GREEN}📊 S3 Console: https://console.aws.amazon.com/s3/buckets/$S3_BUCKET${NC}"

# Verify deployment
echo -e "${YELLOW}🔍 Verifying deployment...${NC}"
response=$(curl -s -o /dev/null -w "%{http_code}" "http://$S3_BUCKET.s3-website-$AWS_REGION.amazonaws.com")
if [ "$response" = "200" ]; then
    echo -e "${GREEN}✅ Website is accessible and responding${NC}"
else
    echo -e "${RED}❌ Website returned HTTP $response - please check configuration${NC}"
fi

echo -e "${GREEN}🎉 Keyte Group Website v2.1 deployed successfully!${NC}" 