# 🔧 AWS Amplify Build Troubleshooting Guide

## 📊 **Build Failure Analysis: Keyte Group Project**

### **Timeline of Issues Encountered**

#### **Build Attempt 1** (`e4618d8` commit)
```
npm error `npm ci` can only install packages when your package.json and package-lock.json are in sync.
npm error Invalid: lock file's picomatch@2.3.1 does not satisfy picomatch@4.0.2
```
**Issue**: Package lock file had dependency version conflicts

#### **Build Attempt 2** (`af52d7f` commit)  
```
npm error `npm ci` can only install packages when your package.json and package-lock.json are in sync.
npm error Invalid: lock file's picomatch@2.3.1 does not satisfy picomatch@4.0.2
npm error Missing: picomatch@2.3.1 from lock file
```
**Issue**: Same dependency conflicts persisted

#### **Build Attempt 3** (`fc99ed4` commit)
```
npm error The `npm ci` command can only install with an existing package-lock.json
```
**Issue**: Lock file missing entirely from repository

---

## 🎯 **Root Cause Analysis**

### **Why This Happened**
1. **Next.js Update**: Upgraded from 14.0.4 to 15.3.3 locally
2. **Partial Lock File Regeneration**: `npm install` didn't fully resolve all conflicts
3. **Multiple Dependency Versions**: Lock file contained conflicting versions of `picomatch`
4. **Lock File Removal**: Attempting to fix by removing lock file but not regenerating

### **Technical Details**
```json
// Conflicting entries in package-lock.json:
"picomatch": "2.3.1"  // Old version
"picomatch": "4.0.2"  // New version required by Next.js 15.3.3
```

---

## 🛠️ **Step-by-Step Resolution**

### **Current Status** (fc99ed4 commit)
✅ **Next.js Updated**: 15.3.3 (security fixes)  
✅ **TypeScript Errors Fixed**: Legacy HTML attributes resolved  
✅ **Slider Component Fixed**: Missing image added, improved error handling  
❌ **Missing Lock File**: package-lock.json not in repository  

### **Required Actions**

#### **1. Regenerate Lock File**
```bash
# From project root
npm install
```
This will create a new `package-lock.json` with all dependencies resolved.

#### **2. Verify Build Locally**
```bash
npm run build
```
Should complete successfully with no TypeScript errors.

#### **3. Commit Lock File**
```bash
git add package-lock.json
git commit -m "Add package-lock.json for Amplify CI/CD compatibility"
git push origin master
```

#### **4. Monitor Amplify Build**
Expected successful build log:
```
✓ npm ci completed successfully
✓ Creating an optimized production build  
✓ Compiled successfully
✓ Linting and checking validity of types
✓ Collecting page data
✓ Generating static pages (30/30)
✓ Finalizing page optimization
```

---

## 📋 **AWS Amplify Build Environment Details**

### **Build Configuration**
- **Compute**: 8GiB Memory, 4vCPUs, 128GB Disk Space
- **Build Image**: Amazon Linux 2
- **Node.js**: Latest LTS (auto-detected)
- **Package Manager**: npm (uses `npm ci` for clean installs)

### **Build Process**
1. **Environment Setup**: Clone repo, setup build environment
2. **Dependency Installation**: `npm ci` (requires exact lock file match)
3. **Build Execution**: `npm run build` (Next.js static export)
4. **Deployment**: Upload `out/` directory to CDN

### **amplify.yml Configuration**
```yaml
version: 1
applications:
  - frontend:
      phases:
        preBuild:
          commands:
            - npm ci  # This is where our build was failing
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

---

## 🚨 **Common Amplify Build Issues & Solutions**

### **1. npm ci Failures**
**Symptoms**: 
- `npm ci can only install with an existing package-lock.json`
- `lock file's X does not satisfy Y`

**Solutions**:
- Always commit `package-lock.json` to repository
- Regenerate lock file after package updates: `rm package-lock.json && npm install`
- Use `npm ci` locally to test before pushing

### **2. TypeScript Build Errors**
**Symptoms**:
- `Property 'border' does not exist on type`
- Legacy HTML attribute errors

**Solutions**:
- Remove deprecated HTML attributes (`border`, `align`, `valign`)
- Use React-compliant props (`frameBorder={0}` instead of `frameBorder="0"`)
- Replace anchor names with IDs (`<span id="X">` instead of `<a name="X">`)

### **3. Missing Dependencies**
**Symptoms**:
- Module not found errors during build
- Missing peer dependencies

**Solutions**:
- Run `npm audit` to check for issues
- Install missing peer dependencies explicitly
- Update dependencies to compatible versions

### **4. Build Timeout Issues**
**Symptoms**:
- Build exceeds time limits
- Memory errors during compilation

**Solutions**:
- Optimize bundle size with `npm run build:analyze`
- Remove unused dependencies
- Use dynamic imports for large components

---

## 📈 **Performance Monitoring**

### **Build Time Benchmarks**
- **Dependency Installation**: ~30-60 seconds (with cache)
- **Next.js Compilation**: ~2-4 minutes (30 pages)
- **Static Export**: ~30 seconds
- **Total Build Time**: ~4-6 minutes

### **Success Indicators**
- ✅ `npm ci` completes without errors
- ✅ TypeScript compilation succeeds
- ✅ All 30 pages generate successfully
- ✅ No runtime errors in production build
- ✅ Images and assets load correctly

---

## 🎯 **Next Steps After Resolution**

1. **Performance Optimization**: Bundle analysis and code splitting
2. **SEO Enhancement**: Verify all metadata and structured data
3. **Monitoring Setup**: Configure error tracking and analytics
4. **Testing**: Cross-browser compatibility testing
5. **Backup Strategy**: Document deployment rollback procedures

---

**Status**: ⏳ **Awaiting Lock File Regeneration**  
**Last Updated**: 2025-06-16  
**Build Environment**: AWS Amplify Standard (8GB/4CPU)  
**Target**: Static Next.js Export with CDN Deployment 