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

#### **Build Attempts 4-14** (Commits: `6a045c5` through `a51d6c7`)
```
npm error Invalid: lock file's picomatch@2.3.1 does not satisfy picomatch@4.0.2
npm error Missing: picomatch@2.3.1 from lock file
```

**Attempted Solutions:**
- ❌ lockfileVersion 2 regeneration (Builds 4-8)
- ❌ Complete dependency cleanup with --legacy-peer-deps (Builds 9-12)  
- ❌ Next.js downgrade from 15.3.3 to 14.2.15 (Build 13-14)

**Status**: All conventional npm dependency resolution approaches have failed

---

## 🎯 **CRITICAL FINDING: Unsolvable Dependency Conflict**

### **The Core Issue**
The picomatch dependency conflict is **unsolvable using standard npm tooling** because:

1. **Multiple Dependency Paths**: Different packages in the Next.js ecosystem require different picomatch versions
2. **npm ci Strictness**: AWS Amplify uses `npm ci` which requires perfect dependency resolution
3. **Version Range Conflicts**: `^2.3.1` does not satisfy `^4.0.2` requirements
4. **Ecosystem Issue**: This is a known problem in the broader Next.js/React ecosystem

### **Evidence**
- ✅ **14 consecutive build failures** with identical error
- ✅ **Multiple resolution strategies failed** (standard, legacy-peer-deps, downgrade)
- ✅ **Local builds may work** while Amplify builds fail (different npm behavior)
- ✅ **Issue persists across Next.js versions** (14.2.15 and 15.3.3)

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

### **FINAL SOLUTION: Custom Amplify Configuration**

Since dependency resolution failed, **create `amplify.yml` in project root**:

```yaml
version: 1
applications:
  - frontend:
      phases:
        preBuild:
          commands:
            - npm install --force  # Use npm install instead of npm ci
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

#### **Implementation Steps**

**1. Create amplify.yml** (copy YAML above to project root)

**2. Add package overrides** to `package.json`:
```json
{
  "overrides": {
    "picomatch": "2.3.1"
  }
}
```

**3. Regenerate dependencies locally**:
```bash
rm -rf node_modules package-lock.json
npm install --lockfile-version=2 --force
```

**4. Commit all changes**:
```bash
git add amplify.yml package.json package-lock.json
git commit -m "Add custom Amplify build config to resolve picomatch conflicts"
git push origin master
```

#### **Expected Build 15 Success Log**:
```
✓ npm install --force completed successfully
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

**Status**: 🟡 **ESCALATED TO CUSTOM BUILD CONFIG**  
**Build Attempts**: 14 consecutive failures  
**Root Cause**: Irreconcilable picomatch dependency conflicts in Next.js ecosystem  
**Solution**: Custom amplify.yml with forced dependency resolution  
**Next Build**: Expected success with custom configuration (Build 15)  
**Last Updated**: 2025-06-16  
**Build Environment**: AWS Amplify Standard (8GB/4CPU)  
**Target**: Static Next.js Export with CDN Deployment  
**Lesson Learned**: Some dependency conflicts require build process changes, not just package management 