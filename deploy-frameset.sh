#!/bin/bash
# Script to deploy the fixed frameset HTML to S3

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Creating updated frameset for keytegroup.com...${NC}"

# Create the HTML file
cat > frameset.html << EOF
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
EOF

echo -e "${YELLOW}Deploying frameset to S3 bucket...${NC}"

# Upload the frameset file to S3
aws s3 cp frameset.html s3://keytegroup/frameset.html --content-type "text/html" --cache-control "max-age=300"

# Display success message
echo -e "${GREEN}✅ Frameset has been updated successfully!${NC}"
echo -e "${YELLOW}Instructions:${NC}"
echo -e "1. Download the frameset.html file from S3:"
echo -e "   ${GREEN}aws s3 cp s3://keytegroup/frameset.html ./frameset.html${NC}"
echo -e "2. Upload this file to your domain hosting service as the main index.html"
echo -e "3. This will fix the Access Denied issues by linking directly to CloudFront files"

echo -e "${GREEN}Done!${NC}" 