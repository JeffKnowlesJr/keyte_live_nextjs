# Keyte Group Website - Troubleshooting Guide v2.1

**Last Updated:** June 13, 2025 - 6:00 AM EST  
**Project Duration:** ~8 hours over 2 days (June 12-13, 2025)

## Project Timeline & Development History

### Major Milestones:
- **Initial Setup:** Footer credit implementation and styling
- **Slider Issues:** Fixed image anchoring and transition problems  
- **File Structure:** Consolidated from multiple directories to production build
- **Deployment:** AWS S3 + CloudFront configuration and troubleshooting
- **Final Resolution:** Cleaned up conflicting files and redirect issues

### Commits Analysis:
- **Total Commits:** 10+ commits across multiple branches
- **Key Branches:** master, module, prob-v2.1, como-v2, comodernized
- **Development Time:** Approximately 8 hours of active development

---

## Critical Issues Resolved

### 1. CloudFront Distribution Confusion ⚠️
**Problem:** Multiple S3 buckets with CloudFront pointing to wrong bucket
- CloudFront distribution `EM0S8BT5LQI3W` pointed to `keytegroup` bucket
- GitHub Actions was deploying to `keytegroup.com` bucket
- Website showed old content despite successful deployments

**Solution:**
```bash
# Updated GitHub Actions workflow to deploy to correct bucket
aws s3 sync . s3://keytegroup --delete --exclude ".git/*" --exclude ".github/*"
aws cloudfront create-invalidation --distribution-id EM0S8BT5LQI3W --paths "/*"
```

**Prevention:** Always verify CloudFront origin matches deployment target

### 2. Conflicting Index Files 🔧
**Problem:** Multiple index files causing redirect loops
- `index.htm` (old file from March 2025) 
- `index.html` (new v2.1 content)
- CloudFront default root object set to `index.htm`

**Solution:**
```bash
# Remove old conflicting file
aws s3 rm s3://keytegroup/index.htm

# Create redirect from index.htm to index.html
echo '<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=index.html"></head></html>' | aws s3 cp - s3://keytegroup/index.htm --content-type "text/html"
```

### 3. Slider Image Anchoring Issues 🖼️
**Problem:** Images moving/jumping during transitions
- Original effect: `sliceDown` caused positioning issues
- Images not properly anchored during transitions

**Solution:**
```css
/* Updated nivo-slider.css */
.nivoSlider img {
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    transform: translateZ(0);
    backface-visibility: hidden;
    object-fit: cover;
    object-position: center center;
}
```

**JavaScript Update:**
```javascript
// Changed from 'sliceDown' to 'fade' in index.html
effect: 'fade',
animSpeed: 500,
pauseTime: 4000
```

### 4. Footer Credit Implementation 💡
**Problem:** Adding subtle developer credit without disrupting design

**Solution:**
```css
/* Added to app.css */
.footer-credit {
    color: #3A3530;
    font-size: 11px;
    text-align: right;
    padding-right: 20px;
    margin-top: 10px;
}

.footer-credit:hover {
    color: #353128;
}
```

**HTML Implementation:**
```html
<!-- Added to footer.html and footer-subpage.html -->
<div class="footer-credit">
    <p>configured + hosted by jeffknowlesjr.com</p>
</div>
```

---

## AWS Deployment Configuration

### S3 Bucket Setup:
- **Primary Bucket:** `keytegroup` (CloudFront origin)
- **Secondary Bucket:** `keytegroup.com` (backup/testing)
- **Region:** us-east-1
- **Public Access:** Configured for CloudFront OAC

### CloudFront Distribution:
- **Distribution ID:** EM0S8BT5LQI3W
- **Domain:** d1657kj4sv01us.cloudfront.net
- **Custom Domain:** keytegroup.com
- **Default Root Object:** index.htm (redirects to index.html)

### GitHub Actions Workflow:
```yaml
name: Deploy to S3
on:
  push:
    branches: [main, master]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Configure AWS Credentials
      uses: aws-actions/configure-aws-credentials@v1
      with:
        aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
        aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
        aws-region: us-east-1
    - name: Deploy to S3
      run: |
        aws s3 sync . s3://keytegroup --delete --exclude ".git/*" --exclude ".github/*" --exclude ".gitignore" --exclude "*.md" --exclude "deploy-s3.sh"
    - name: Invalidate CloudFront
      run: |
        aws cloudfront create-invalidation --distribution-id EM0S8BT5LQI3W --paths "/*"
```

---

## Common Troubleshooting Commands

### Cache Invalidation:
```bash
# Create CloudFront invalidation
aws cloudfront create-invalidation --distribution-id EM0S8BT5LQI3W --paths "/*"

# Check invalidation status
aws cloudfront get-invalidation --distribution-id EM0S8BT5LQI3W --id [INVALIDATION_ID]
```

### S3 Bucket Management:
```bash
# List bucket contents
aws s3 ls s3://keytegroup/ --human-readable

# Check specific file
aws s3 cp s3://keytegroup/templates/footer.html - | grep "jeffknowlesjr.com"

# Remove conflicting files
aws s3 rm s3://keytegroup/index.htm
```

### Testing Deployment:
```bash
# Test website response
curl -s -o /dev/null -w "%{http_code}" https://keytegroup.com/

# Check for footer credit
curl -s https://keytegroup.com/ | grep -i "jeffknowlesjr.com"

# Test direct CloudFront URL
curl -s https://d1657kj4sv01us.cloudfront.net/ | head -10
```

---

## File Structure (Production v2.1)

```
keyte_live/
├── index.html                 # Main entry point
├── css/                      # Stylesheets
│   ├── app.css              # Custom styles + footer credit
│   ├── nivo-slider.css      # Fixed slider positioning
│   └── foundation.css       # Framework styles
├── js/                      # JavaScript files
├── images/                  # Image assets
├── templates/               # HTML templates
│   ├── footer.html         # Footer with credit
│   ├── footer-subpage.html # Subpage footer with credit
│   └── header.html         # Site header
├── [page-directories]/     # Individual page content
├── .github/workflows/      # GitHub Actions
│   └── deploy.yml         # Automated deployment
└── deploy-s3.sh           # Manual deployment script
```

---

## Performance Optimizations Applied

### CSS Optimizations:
- Hardware acceleration for slider (`transform: translateZ(0)`)
- Optimized image positioning (`object-fit: cover`)
- Reduced transition effects (fade vs. complex animations)

### Caching Strategy:
- CloudFront edge caching
- Proper content-type headers
- Cache invalidation on deployment

### SEO Enhancements:
- Semantic HTML structure
- Meta descriptions and keywords
- Proper heading hierarchy
- Alt text for images

---

## Known Issues & Limitations

### Current Status: ✅ RESOLVED
- ✅ Slider anchoring fixed
- ✅ Footer credit implemented
- ✅ CloudFront deployment working
- ✅ GitHub Actions automated
- ✅ File conflicts resolved

### Future Considerations:
- Consider updating to newer Foundation CSS version
- Implement responsive image loading
- Add performance monitoring
- Consider CDN optimization for global users

---

## Emergency Procedures

### If Website Goes Down:
1. Check CloudFront distribution status
2. Verify S3 bucket accessibility
3. Run manual deployment: `./deploy-s3.sh`
4. Create cache invalidation
5. Monitor GitHub Actions for failures

### Rollback Procedure:
```bash
# Revert to previous commit
git revert HEAD
git push origin master

# Manual file restoration if needed
aws s3 cp s3://keytegroup-backup/index.html s3://keytegroup/index.html
aws cloudfront create-invalidation --distribution-id EM0S8BT5LQI3W --paths "/*"
```

---

## Contact & Support

**Developer:** jeffknowlesjr.com  
**Project Repository:** https://github.com/JeffKnowlesJr/keyte_live  
**Live Website:** https://keytegroup.com  

**AWS Account:** 159370117840  
**CloudFront Distribution:** EM0S8BT5LQI3W  
**Primary S3 Bucket:** keytegroup  

---

*This troubleshooting guide documents the complete development and deployment process for Keyte Group Website v2.1, including all major issues encountered and their resolutions.* 