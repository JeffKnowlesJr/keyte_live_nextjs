# 🚀 Deployment Guide - Keyte Group Website

## 📋 Overview

This guide covers all deployment options for the Keyte Group Next.js website, including AWS Amplify (recommended), Vercel, Netlify, and traditional hosting solutions.

**Current Configuration**: Static export optimized for CDN deployment
**Recommended Platform**: AWS Amplify (matches original AWS infrastructure)

---

## 🎯 Pre-Deployment Checklist

### ✅ **Required Steps Before Deployment**

1. **Build Verification**
   ```bash
   npm run build
   ```
   - Verify build completes without errors
   - Check `out/` directory is generated
   - Confirm all pages render correctly

2. **Metadata Validation**
   - All pages have proper SEO metadata ✅
   - JSON-LD structured data implemented ✅
   - Open Graph tags configured ✅
   - Twitter Cards configured ✅

3. **Asset Verification**
   - All images load correctly
   - CSS files are properly linked
   - JavaScript functionality works
   - Favicon and icons are present

4. **Performance Check**
   ```bash
   npm run build
   # Check bundle size and optimization
   ```

---

## 🏆 Recommended: AWS Amplify Deployment

### **Why AWS Amplify?**
- ✅ Matches original AWS infrastructure (S3 + CloudFront)
- ✅ Automatic CI/CD from Git
- ✅ Built-in CDN and SSL
- ✅ Easy custom domain setup
- ✅ Excellent performance for static sites

### **Step-by-Step Amplify Deployment**

#### **Option A: Amplify Console (Recommended)**

1. **Prepare Repository**
   ```bash
   # Ensure all changes are committed
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **AWS Amplify Console Setup**
   - Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
   - Click **"New app"** → **"Host web app"**
   - Connect your Git repository (GitHub/GitLab/Bitbucket)
   - Select the repository and branch (`main`)

3. **Build Configuration**
   - Amplify will auto-detect the `amplify.yml` file
   - Verify the build settings:
   ```yaml
   version: 1
   applications:
     - frontend:
         phases:
           preBuild:
             commands:
               - npm ci
           build:
             commands:
               - npm run build
         artifacts:
           baseDirectory: out
           files:
             - '**/*'
         cache:
           paths:
             - node_modules/**/*
             - .next/cache/**/*
       appRoot: .
   ```

4. **Environment Variables** (if needed)
   - `NODE_ENV=production`
   - Any custom environment variables

5. **Deploy**
   - Click **"Save and deploy"**
   - Monitor the build process
   - Deployment typically takes 3-5 minutes

6. **Custom Domain Setup**
   - In Amplify Console, go to **"Domain management"**
   - Add custom domain: `keytegroup.com`
   - Configure DNS settings as provided
   - SSL certificate is automatically provisioned

#### **Option B: Amplify CLI**

1. **Install Amplify CLI**
   ```bash
   npm install -g @aws-amplify/cli
   ```

2. **Initialize Amplify**
   ```bash
   amplify init
   # Follow prompts:
   # - Project name: keyte-group-website
   # - Environment: production
   # - Default editor: your choice
   # - App type: javascript
   # - Framework: react
   # - Source directory: .
   # - Build directory: out
   # - Build command: npm run build
   # - Start command: npm run start
   ```

3. **Add Hosting**
   ```bash
   amplify add hosting
   # Select: Amazon CloudFront and S3
   # Select: PROD (S3 with CloudFront using HTTPS)
   ```

4. **Deploy**
   ```bash
   amplify publish
   ```

### **Amplify Deployment Script**

Use the provided deployment script for automated deployment:

```bash
# Make script executable
chmod +x deploy-amplify.sh

# Run deployment
./deploy-amplify.sh
```

---

## 🌐 Alternative Deployment Options

### **Vercel Deployment**

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

3. **Configuration** (vercel.json)
   ```json
   {
     "buildCommand": "npm run build",
     "outputDirectory": "out",
     "trailingSlash": true
   }
   ```

### **Netlify Deployment**

1. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `out`

2. **Deploy via Git**
   - Connect repository in Netlify dashboard
   - Configure build settings
   - Deploy automatically on push

3. **Manual Deploy**
   ```bash
   npm run build
   # Upload 'out' folder to Netlify
   ```

### **Traditional Hosting (cPanel/FTP)**

1. **Build for Production**
   ```bash
   npm run build
   ```

2. **Upload Files**
   - Upload entire `out/` directory contents to web root
   - Ensure `.htaccess` file is configured for SPA routing

3. **Apache Configuration** (.htaccess)
   ```apache
   RewriteEngine On
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteRule . /index.html [L]
   ```

---

## 🔧 Build Configuration Details

### **Next.js Configuration** (next.config.js)

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for CDN deployment
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  
  // Image optimization for static export
  images: {
    unoptimized: true
  },
  
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          }
        ]
      }
    ]
  }
}
```

### **Package.json Scripts**

```json
{
  "scripts": {
    "dev": "next dev --hostname 0.0.0.0",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "deploy:amplify": "./deploy-amplify.sh",
    "deploy:vercel": "vercel --prod",
    "build:analyze": "ANALYZE=true npm run build"
  }
}
```

---

## 🔍 Post-Deployment Verification

### **Essential Checks**

1. **Functionality Testing**
   - [ ] Homepage loads correctly
   - [ ] All navigation links work
   - [ ] NIVO slider functions properly
   - [ ] Mobile navigation works
   - [ ] Contact form submits (if implemented)

2. **SEO Verification**
   - [ ] Meta tags are present in page source
   - [ ] Open Graph tags work (test with Facebook debugger)
   - [ ] Twitter Cards display correctly
   - [ ] JSON-LD structured data validates
   - [ ] Sitemap is accessible

3. **Performance Testing**
   - [ ] Google PageSpeed Insights score
   - [ ] Core Web Vitals metrics
   - [ ] Image loading optimization
   - [ ] CSS/JS minification

4. **Cross-Browser Testing**
   - [ ] Chrome/Chromium
   - [ ] Firefox
   - [ ] Safari
   - [ ] Edge
   - [ ] Mobile browsers

### **SEO Tools for Verification**

- **Google Search Console**: Submit sitemap and monitor indexing
- **Google PageSpeed Insights**: Performance testing
- **Facebook Sharing Debugger**: Open Graph validation
- **Twitter Card Validator**: Twitter Cards testing
- **Schema.org Validator**: Structured data validation

---

## 🚨 Troubleshooting

### **Common Build Issues**

1. **Build Fails**
   ```bash
   # Clear cache and rebuild
   rm -rf .next out node_modules
   npm install
   npm run build
   ```

2. **Images Not Loading**
   - Check image paths are relative
   - Verify images exist in `public/` directory
   - Ensure `images.unoptimized: true` in next.config.js

3. **CSS Not Applied**
   - Verify CSS files are in `public/css/`
   - Check CSS imports in layout.tsx
   - Ensure proper MIME types

4. **JavaScript Errors**
   - Check browser console for errors
   - Verify jQuery and Foundation scripts load
   - Test script initialization timing

### **Deployment Issues**

1. **Amplify Build Fails**
   - Check build logs in Amplify Console
   - Verify Node.js version compatibility
   - Check environment variables

2. **404 Errors**
   - Verify routing configuration
   - Check trailing slash settings
   - Ensure proper redirects

3. **Performance Issues**
   - Enable CDN caching
   - Optimize images
   - Minify CSS/JS
   - Enable compression

### **Troubleshooting: Package Lock File Issues**

#### **Common Amplify Build Failures**

##### **Issue 1: Missing package-lock.json**
```
npm error The `npm ci` command can only install with an existing package-lock.json
```

**Cause**: The `package-lock.json` file is missing from the repository.

**Solution**:
```bash
# Generate a new lock file
npm install

# Commit the new lock file
git add package-lock.json
git commit -m "Add missing package-lock.json for Amplify build"
git push origin master
```

##### **Issue 2: Package Lock File Version Conflicts**
```
npm error Invalid: lock file's picomatch@2.3.1 does not satisfy picomatch@4.0.2
npm error Missing: picomatch@2.3.1 from lock file
```

**Cause**: Dependency version conflicts in the lock file after updating packages.

**Solution**:
```bash
# Remove conflicted lock file
rm package-lock.json

# Remove node_modules to ensure clean state
rm -rf node_modules

# Regenerate lock file from scratch
npm install

# Verify build works locally
npm run build

# Commit the clean lock file
git add package-lock.json
git commit -m "Regenerate package-lock.json to resolve dependency conflicts"
git push origin master
```

##### **Issue 3: Legacy HTML Attributes in TypeScript**
```
Type error: Property 'border' does not exist on type 'DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>'
```

**Cause**: Legacy HTML attributes like `border="0"`, `frameBorder="0"` are not valid in React/TypeScript.

**Solution**:
- Remove `border="0"` from `<img>` elements
- Change `frameBorder="0"` to `frameBorder={0}` on `<iframe>` elements
- Change `allowFullScreen=""` to `allowFullScreen` on `<iframe>` elements
- Replace `<a name="X">` with `<span id="X">` for anchor points

### **AWS Amplify Build Environment**
- **Compute**: 8GiB Memory, 4vCPUs, 128GB Disk Space
- **Node.js Version**: Latest LTS (automatically selected)
- **Build Command**: `npm ci` (requires exact lock file match)
- **Cache**: Environment and dependency caching enabled

### **Build Process Flow**
1. **Clone Repository** → Pull latest commit from configured branch
2. **Environment Cache** → Restore cached dependencies if available
3. **Backend Build** → Check for backend environment (none in our case)
4. **Frontend Build** → 
   - **preBuild**: `npm ci` (install dependencies)
   - **build**: `npm run build` (create static export)
   - **postBuild**: Deploy to CDN

### **Monitoring Build Success**
After fixing package-lock.json issues, successful builds should show:
```
✓ npm ci completed successfully
✓ Creating an optimized production build
✓ Compiled successfully
✓ Generating static pages (30/30)
✓ Finalizing page optimization
```

---

## 📊 Performance Optimization

### **Pre-Deployment Optimization**

1. **Image Optimization**
   ```bash
   # Optimize images before deployment
   # Use tools like imagemin or online compressors
   ```

2. **Bundle Analysis**
   ```bash
   npm install --save-dev @next/bundle-analyzer
   ANALYZE=true npm run build
   ```

3. **CSS Optimization**
   - Remove unused CSS
   - Minify stylesheets
   - Combine CSS files where possible

### **CDN Configuration**

1. **Cache Headers**
   - Static assets: 1 year cache
   - HTML files: 1 hour cache
   - API responses: No cache

2. **Compression**
   - Enable Gzip/Brotli compression
   - Optimize for text-based files

---

## 🔐 Security Considerations

### **Security Headers** (Implemented)

- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`

### **Additional Security**

1. **HTTPS Enforcement**
   - Ensure SSL certificate is active
   - Redirect HTTP to HTTPS

2. **Content Security Policy**
   - Consider implementing CSP headers
   - Whitelist trusted domains

3. **Regular Updates**
   - Keep dependencies updated
   - Monitor security advisories

---

## 📈 Monitoring & Analytics

### **Recommended Monitoring**

1. **Google Analytics 4**
   - Add GA4 tracking code
   - Set up conversion goals
   - Monitor user behavior

2. **Google Search Console**
   - Submit sitemap
   - Monitor search performance
   - Track indexing status

3. **Performance Monitoring**
   - Core Web Vitals tracking
   - Uptime monitoring
   - Error tracking

---

## 🎯 Success Metrics

### **Deployment Success Criteria**

- [ ] **Build Success**: Clean build with no errors
- [ ] **Visual Fidelity**: 100% match with original design
- [ ] **Functionality**: All features work identically
- [ ] **Performance**: Equal or better Core Web Vitals
- [ ] **SEO**: All metadata and structured data present
- [ ] **Security**: All security headers implemented
- [ ] **Accessibility**: WCAG compliance maintained

### **Post-Deployment Goals**

- **Performance Score**: 90+ on Google PageSpeed Insights
- **SEO Score**: Maintain or improve search rankings
- **Uptime**: 99.9% availability
- **Load Time**: < 3 seconds first contentful paint

---

**🚀 Ready for Production Deployment!**

Choose your preferred deployment method and follow the step-by-step instructions above. AWS Amplify is recommended for the best performance and easiest maintenance. 