# Keyte Group Website - Next.js Conversion Guide

## Overview

This guide provides a complete automated conversion from the current static HTML/CSS/JS website to a modern Next.js application while preserving **exact visual appearance and functionality**. The conversion uses AWS Amplify for deployment, which provides superior SEO performance compared to S3 static hosting.

## Why AWS Amplify Over S3?

✅ **Better SEO** - No iframes, proper HTML rendering, better search engine indexing  
✅ **Automatic SSL/HTTPS** - Built-in security  
✅ **Global CDN** - Edge locations worldwide for faster loading  
✅ **Automatic builds** - Deploy directly from Git commits  
✅ **Branch-based deployments** - Test changes before going live  
✅ **Built-in form handling** - Contact forms work out of the box  
✅ **Custom domain support** - Easy keytegroup.com integration  
✅ **Performance monitoring** - Built-in analytics and Core Web Vitals  
✅ **Atomic deployments** - All-or-nothing deployments prevent broken states  
✅ **Rollback capabilities** - Easy revert to previous versions  

## Conversion Scripts

The conversion is automated through modular scripts:

### Main Script
- `next-build.sh` - Main orchestration script

### Phase Scripts
- `scripts/phase2-templates.sh` - Template componentization
- `scripts/phase3-pages.sh` - Page structure conversion
- `scripts/phase4-assets.sh` - Asset migration and optimization
- `scripts/phase5-deployment.sh` - Amplify deployment setup

## Prerequisites

Before running the conversion:

1. **Node.js 18+** - Required for Next.js
2. **npm** - Package manager
3. **Git** - Version control
4. **AWS CLI** - For Amplify deployment (optional)

## Quick Start

### Option 1: Full Conversion (Recommended)
```bash
./next-build.sh
```

### Option 2: Step-by-Step
```bash
# Phase 1: Project setup only
./next-build.sh setup

# Then run individual phases
./scripts/phase2-templates.sh $(pwd) $(pwd)_nextjs
./scripts/phase3-pages.sh $(pwd) $(pwd)_nextjs
./scripts/phase4-assets.sh $(pwd) $(pwd)_nextjs
./scripts/phase5-deployment.sh $(pwd) $(pwd)_nextjs
```

### Option 3: Validate Prerequisites Only
```bash
./next-build.sh validate
```

## What Gets Converted

### ✅ Preserved Exactly
- **Visual Design** - Pixel-perfect preservation
- **CSS Styles** - All existing styles maintained
- **Content** - All text, images, and media unchanged
- **URL Structure** - Existing URLs preserved with redirects
- **Functionality** - Mobile menu, slider, navigation
- **SEO** - Meta tags, structured data, sitemap
- **Accessibility** - ARIA attributes, keyboard navigation

### 🔄 Modernized
- **HTML Templates** → React Components
- **jQuery Code** → React Hooks + TypeScript
- **Static Files** → Next.js App Router
- **S3 Deployment** → AWS Amplify
- **Manual Builds** → Automated CI/CD

### 📁 File Structure After Conversion

```
keyte_live_nextjs/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Homepage
│   ├── not-found.tsx            # 404 page
│   ├── globals.css              # Global styles (copied from app.css)
│   ├── who-we-are/             # About pages
│   ├── what-we-do/             # Services pages
│   ├── what-we-did/            # Portfolio pages
│   ├── who-we-served/          # Client pages
│   ├── how-we-think/           # Thought leadership
│   └── contact/                # Contact pages
├── components/                  # React components
│   ├── layout/                 # Header, Footer, Navigation
│   └── home/                   # Homepage-specific components
├── lib/                        # Utilities and helpers
│   ├── utils/                  # Converted JavaScript functionality
│   ├── analytics.ts            # Google Analytics setup
│   ├── seo.ts                  # SEO utilities
│   └── sitemap.ts              # Sitemap generation
├── public/                     # Static assets
│   ├── images/                 # All existing images
│   ├── files/                  # All existing files
│   ├── _redirects              # URL redirects for SEO
│   ├── _headers                # Performance headers
│   └── robots.txt              # Search engine directives
├── .github/workflows/          # CI/CD automation
├── amplify.yml                 # Amplify build configuration
├── next.config.js              # Next.js configuration
├── deploy-amplify.sh           # Deployment script
└── package.json                # Dependencies and scripts
```

## Deployment Process

### 1. Automated Setup
The scripts create all necessary Amplify configuration files:
- `amplify.yml` - Build specification
- `public/_redirects` - URL redirects for SEO preservation
- `public/_headers` - Performance and security headers
- `.github/workflows/amplify-deploy.yml` - CI/CD pipeline

### 2. Manual Amplify Setup
After running the conversion scripts:

1. **Push to Git Repository**
   ```bash
   cd keyte_live_nextjs
   git init
   git add .
   git commit -m "Initial Next.js conversion"
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

2. **Connect to AWS Amplify**
   - Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
   - Click "New app" → "Host web app"
   - Connect your Git repository
   - Amplify will automatically detect the `amplify.yml` configuration

3. **Configure Custom Domain**
   - In Amplify console, go to "Domain management"
   - Add custom domain: `keytegroup.com`
   - Follow DNS configuration instructions

4. **Set Environment Variables** (if needed)
   - `NEXT_PUBLIC_SITE_URL=https://keytegroup.com`
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID=your-analytics-id`

### 3. Automatic Deployments
Once connected, Amplify automatically:
- Builds on every Git push
- Runs tests and linting
- Deploys to staging/production
- Invalidates CDN cache
- Provides deployment previews for pull requests

## Testing the Conversion

### Local Development
```bash
cd keyte_live_nextjs
npm install
npm run dev
```
Visit `http://localhost:3000` to test locally.

### Build Testing
```bash
npm run build
```
This creates the `out/` directory with static files for Amplify.

### Deployment Testing
```bash
./deploy-amplify.sh
```
This validates the build and provides deployment instructions.

## SEO Preservation

The conversion maintains SEO through:

1. **URL Redirects** - All existing URLs redirect to new structure
2. **Meta Tags** - All existing meta tags preserved
3. **Structured Data** - JSON-LD schema maintained
4. **Sitemap** - Automatically generated XML sitemap
5. **Robots.txt** - Search engine directives
6. **Open Graph** - Social media sharing tags
7. **Canonical URLs** - Proper canonical link structure

## Performance Optimizations

- **Static Generation** - Pre-built HTML for faster loading
- **Image Optimization** - Automatic WebP conversion and lazy loading
- **Code Splitting** - JavaScript bundles split for optimal loading
- **CDN Caching** - Global edge caching through Amplify
- **Compression** - Automatic Gzip/Brotli compression
- **Core Web Vitals** - Monitoring and optimization

## Rollback Plan

If issues arise:

1. **Amplify Rollback** - Use Amplify console to rollback to previous deployment
2. **DNS Rollback** - Point domain back to current S3 setup
3. **Git Rollback** - Revert Git commits if needed

The original site remains untouched during conversion (backed up automatically).

## Support and Maintenance

### Updating Content
- Edit React components in `app/` directory
- Push changes to Git - Amplify auto-deploys
- Use branch-based deployments for testing

### Adding New Pages
- Create new page in appropriate `app/` subdirectory
- Follow existing page structure and SEO patterns
- Update navigation components if needed

### Performance Monitoring
- Use Amplify's built-in performance monitoring
- Google Analytics 4 integration included
- Core Web Vitals tracking enabled

## Cost Comparison

### Current S3 Setup
- S3 hosting: ~$1-5/month
- CloudFront: ~$5-20/month
- Manual deployment time
- Limited SEO capabilities

### Amplify Setup
- Amplify hosting: ~$1-15/month (includes CDN)
- Automatic deployments
- Better SEO performance
- Built-in monitoring and analytics
- Branch deployments included

## Troubleshooting

### Build Failures
```bash
# Check Node.js version
node --version  # Should be 18+

# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Check for TypeScript errors
npm run lint
```

### Deployment Issues
```bash
# Test build locally
npm run build

# Check Amplify logs in AWS console
# Verify environment variables are set
```

### SEO Issues
- Verify redirects in `public/_redirects`
- Check meta tags in page components
- Validate sitemap generation
- Test with Google Search Console

## Next Steps After Conversion

1. **Monitor Performance** - Use Amplify analytics and Google Search Console
2. **Test All Functionality** - Verify mobile menu, forms, and navigation
3. **Update DNS** - Point keytegroup.com to Amplify domain
4. **Set Up Monitoring** - Configure alerts for downtime or performance issues
5. **Plan Content Updates** - Train team on new Git-based workflow

---

**Questions or Issues?**
Contact the development team or refer to the detailed logs in `conversion.log` after running the scripts. 