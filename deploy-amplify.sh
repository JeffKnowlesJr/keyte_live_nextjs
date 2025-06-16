#!/bin/bash

# =============================================================================
# AWS Amplify Deployment Script for Keyte Group Next.js Site
# Version: 2.0
# =============================================================================

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m'

print_status() { echo -e "${GREEN}✅ $1${NC}"; }
print_info() { echo -e "${BLUE}ℹ️  $1${NC}"; }
print_warning() { echo -e "${YELLOW}⚠️  $1${NC}"; }
print_error() { echo -e "${RED}❌ $1${NC}"; }
print_header() { echo -e "${PURPLE}🚀 $1${NC}"; }
print_step() { echo -e "${CYAN}📋 $1${NC}"; }

print_header "Keyte Group Amplify Deployment Script v2.0"
echo "=================================================="
echo ""

# Pre-flight checks
print_step "Running pre-flight checks..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    print_error "package.json not found. Please run this script from the project root."
    exit 1
fi

# Check if Next.js project
if ! grep -q "next" package.json; then
    print_error "This doesn't appear to be a Next.js project."
    exit 1
fi

print_status "Project structure verified"

# Check Node.js version
NODE_VERSION=$(node --version)
print_info "Node.js version: $NODE_VERSION"

# Check if dependencies are installed
if [ ! -d "node_modules" ]; then
    print_warning "node_modules not found. Installing dependencies..."
    npm install
fi

print_status "Dependencies verified"

# Lint check
print_step "Running linting..."
if npm run lint; then
    print_status "Linting passed"
else
    print_warning "Linting issues found, but continuing..."
fi

# Build the application
print_step "Building Next.js application..."
echo "This may take a few minutes..."

if npm run build; then
    print_status "Build completed successfully!"
else
    print_error "Build failed. Please fix build errors before deploying."
    exit 1
fi

# Verify build output
print_step "Verifying build output..."

if [ ! -d "out" ]; then
    print_error "Build output directory 'out' not found. Build may have failed."
    exit 1
fi

# Check if essential files exist
ESSENTIAL_FILES=("out/index.html" "out/_next" "out/images")
for file in "${ESSENTIAL_FILES[@]}"; do
    if [ ! -e "$file" ]; then
        print_warning "Expected file/directory not found: $file"
    fi
done

print_status "Build output verified"

# Check build size
BUILD_SIZE=$(du -sh out | cut -f1)
print_info "Build size: $BUILD_SIZE"

# Git status check
print_step "Checking Git status..."
if [ -n "$(git status --porcelain)" ]; then
    print_warning "You have uncommitted changes. Consider committing before deployment."
    echo "Uncommitted files:"
    git status --porcelain
    echo ""
    read -p "Continue anyway? (y/N): " -n 1 -r
    echo ""
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        print_info "Deployment cancelled."
        exit 0
    fi
fi

print_status "Git status checked"

# Check for Amplify CLI
print_step "Checking deployment tools..."

if command -v amplify &> /dev/null; then
    print_status "Amplify CLI found"
    AMPLIFY_VERSION=$(amplify --version)
    print_info "Amplify CLI version: $AMPLIFY_VERSION"
    
    # Check if Amplify is initialized
    if [ -f "amplify/.config/project-config.json" ]; then
        print_status "Amplify project initialized"
        
        # Offer to deploy with CLI
        echo ""
        print_info "Amplify CLI deployment available"
        read -p "Deploy with Amplify CLI now? (y/N): " -n 1 -r
        echo ""
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            print_step "Deploying with Amplify CLI..."
            amplify publish
            print_status "Deployment completed!"
            exit 0
        fi
    else
        print_info "Amplify not initialized in this project"
    fi
else
    print_info "Amplify CLI not found"
fi

# Manual deployment instructions
echo ""
print_header "Manual Deployment Options"
echo "=========================================="
echo ""

print_step "Option 1: AWS Amplify Console (Recommended)"
echo "1. Go to AWS Amplify Console: https://console.aws.amaznpmon.com/amplify/"
echo "2. Click 'New app' > 'Host web app'"
echo "3. Connect your Git repository"
echo "4. Use the amplify.yml build settings (already configured)"
echo "5. Set environment variables if needed:"
echo "   - NODE_ENV=production"
echo "6. Deploy!"
echo ""

print_step "Option 2: Manual Upload"
echo "1. Zip the 'out' directory contents"
echo "2. Upload to your hosting provider"
echo "3. Configure web server for SPA routing"
echo ""

print_step "Option 3: Other Platforms"
echo "• Vercel: Run 'vercel --prod'"
echo "• Netlify: Connect Git repo or upload 'out' folder"
echo "• Traditional hosting: Upload 'out' contents to web root"
echo ""

print_header "Post-Deployment Checklist"
echo "=========================================="
echo "After deployment, verify:"
echo "✅ Homepage loads correctly"
echo "✅ All navigation links work"
echo "✅ NIVO slider functions"
echo "✅ Mobile navigation works"
echo "✅ SEO metadata is present"
echo "✅ Images load properly"
echo "✅ Performance is acceptable"
echo ""

print_header "Useful Commands"
echo "=========================================="
echo "• Test build locally: npm run start"
echo "• Analyze bundle: ANALYZE=true npm run build"
echo "• Check performance: Google PageSpeed Insights"
echo "• Validate SEO: Google Search Console"
echo ""

print_status "Deployment preparation completed!"
print_info "Build is ready for deployment to any static hosting platform."

# Final summary
echo ""
print_header "Deployment Summary"
echo "=========================================="
echo "📦 Build Status: ✅ Success"
echo "📁 Output Directory: out/"
echo "📊 Build Size: $BUILD_SIZE"
echo "🔧 Configuration: Static export with CDN optimization"
echo "🚀 Ready for: AWS Amplify, Vercel, Netlify, or traditional hosting"
echo ""
print_status "All systems go! 🚀"
