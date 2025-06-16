#!/bin/bash

# =============================================================================
# AWS Amplify Deployment Script for Keyte Group Next.js Site
# =============================================================================

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

print_status() { echo -e "${GREEN}✅ $1${NC}"; }
print_info() { echo -e "${BLUE}ℹ️  $1${NC}"; }
print_warning() { echo -e "${YELLOW}⚠️  $1${NC}"; }
print_error() { echo -e "${RED}❌ $1${NC}"; }

echo -e "${BLUE}🚀 Keyte Group Amplify Deployment Script${NC}"
echo "=============================================="

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
    print_error "AWS CLI is not installed. Please install it first."
    exit 1
fi

# Check if Amplify CLI is installed
if ! command -v amplify &> /dev/null; then
    print_warning "Amplify CLI not found. Installing..."
    npm install -g @aws-amplify/cli
fi

print_info "Building Next.js application..."
npm run build

print_info "Checking build output..."
if [ ! -d "out" ]; then
    print_error "Build output directory 'out' not found. Build may have failed."
    exit 1
fi

print_status "Build completed successfully!"

echo ""
echo "Next steps for Amplify deployment:"
echo "1. Go to AWS Amplify Console: https://console.aws.amazon.com/amplify/"
echo "2. Click 'New app' > 'Host web app'"
echo "3. Connect your Git repository"
echo "4. Use the amplify.yml build settings (already created)"
echo "5. Set environment variables if needed"
echo "6. Deploy!"
echo ""
echo "Or use Amplify CLI:"
echo "1. Run: amplify init"
echo "2. Run: amplify add hosting"
echo "3. Run: amplify publish"
echo ""

print_status "Deployment preparation completed!"
