# Content Migration Roadmap

## Overview
This document outlines the systematic migration of content from the original Keyte Group static HTML site to the Next.js application.

## Migration Status Legend
- ✅ Complete
- 🔄 In Progress  
- 📋 Pending
- ❌ Blocked/Issues

## Page Structure Template
Each page should follow this structure:
1. Import correct layout (MainLayout for homepage, SubpageLayout for all others)
2. Include proper Foundation grid structure
3. Add sidebar navigation for subpages (3 columns + 9 columns layout)
4. Include breadcrumbs for subpages
5. Migrate all content including images, links, and formatting

## Content Migration Checklist

### 🏠 Homepage
- **Status**: ✅ Complete
- **Source**: `../keyte_live/index.html`
- **Target**: `app/page.tsx`
- **Content**: 
  - ✅ Slider (already implemented)
  - ✅ Three-column featured content (already implemented)
  - ✅ Verify all content matches original

### 📁 Who We Are Section

#### Who We Are (Main)
- **Status**: ✅ Complete
- **Source**: `../keyte_live/who-we-are/index.html`
- **Target**: `app/who-we-are/page.tsx`
- **Content**:
  - ✅ Sidebar navigation with links
  - ✅ "We Are Hands-On Problem Solvers" content
  - ✅ Testimonial block
  - ✅ Sidebar image and quote

#### Beau Keyte
- **Status**: ✅ Complete
- **Source**: `../keyte_live/who-we-are/beau-keyte.html`
- **Target**: `app/who-we-are/beau-keyte/page.tsx`
- **Content**:
  - ✅ Biography
  - ✅ Professional background
  - ✅ Images
  - ✅ Contact information

### 📁 What We Did Section

#### What We Did (Main)
- **Status**: ✅ Complete
- **Source**: `../keyte_live/what-we-did/index.html`
- **Target**: `app/what-we-did/page.tsx`
- **Content**:
  - ✅ Overview of services
  - ✅ Links to sub-services

#### Value Stream Mapping
- **Status**: ✅ Complete
- **Source**: `../keyte_live/what-we-did/value-stream-mapping.html`
- **Target**: `app/what-we-did/value-stream-mapping/page.tsx`

#### Collaborative Learning
- **Status**: ✅ Complete
- **Source**: `../keyte_live/what-we-did/collaborative-learning.html`
- **Target**: `app/what-we-did/collaborative-learning/page.tsx`

#### A3 Thinking
- **Status**: ✅ Complete
- **Source**: `../keyte_live/what-we-did/a3-thinking.html`
- **Target**: `app/what-we-did/a3-thinking/page.tsx`

#### Leadership Coaching
- **Status**: ✅ Complete
- **Source**: `../keyte_live/what-we-did/leadership-coaching.html`
- **Target**: `app/what-we-did/leadership-coaching/page.tsx`

### 📁 Who We Served Section

#### Who We Served (Main)
- **Status**: ✅ Complete
- **Source**: `../keyte_live/who-we-served/index.html`
- **Target**: `app/who-we-served/page.tsx`

#### Clients by Industry
- **Status**: ✅ Complete
- **Source**: `../keyte_live/who-we-served/clients-industry.html`
- **Target**: `app/who-we-served/clients-industry/page.tsx`

### 📁 How We Think Section

#### How We Think (Main)
- **Status**: ✅ Complete
- **Source**: `../keyte_live/how-we-think/index.html`
- **Target**: `app/how-we-think/page.tsx`

#### Perfecting Patient Journeys Book
- **Status**: ✅ Complete
- **Source**: `../keyte_live/how-we-think/perfecting-patient-journeys-book.html`
- **Target**: `app/how-we-think/perfecting-patient-journeys-book/page.tsx`

#### Complete Lean Enterprise Book
- **Status**: ✅ Complete
- **Source**: `../keyte_live/how-we-think/complete-lean-enterprise-book.html`
- **Target**: `app/how-we-think/complete-lean-enterprise-book/page.tsx`

#### Articles and Thoughts
- **Status**: ✅ Complete
- **Source**: `../keyte_live/how-we-think/articles-and-thoughts.html`
- **Target**: `app/how-we-think/articles-and-thoughts/page.tsx`

#### Short Stops
- **Status**: ✅ Complete
- **Source**: `../keyte_live/how-we-think/short-stops.html`
- **Target**: `app/how-we-think/short-stops/page.tsx`

#### Remarketing Continuous Improvement
- **Status**: ✅ Complete
- **Source**: `../keyte_live/how-we-think/remarketing-continuous-improvement.html`
- **Target**: `app/how-we-think/remarketing-continuous-improvement/page.tsx`

### 📁 Contact Section

#### Contact
- **Status**: ✅ Complete
- **Source**: `../keyte_live/contact/index.html`
- **Target**: `app/contact/page.tsx`

## Migration Summary

### ✅ Completed Pages (15)
All pages have been successfully migrated:
- Homepage structure
- Who We Are (main)
- Beau Keyte
- What We Did (main)
- Value Stream Mapping
- Collaborative Learning
- A3 Thinking
- Leadership Coaching
- Who We Served (main)
- Clients by Industry
- How We Think (main)
- Perfecting Patient Journeys Book
- Complete Lean Enterprise Book
- Articles and Thoughts
- Short Stops
- Remarketing Continuous Improvement
- Contact

## Next Steps

1. **Verify Content**: Review all migrated pages for accuracy
2. **Test Navigation**: Ensure all links work correctly
3. **Image Verification**: Check that all images load properly
4. **Responsive Testing**: Verify mobile and tablet layouts
5. **SEO Optimization**: Add proper meta tags and descriptions
6. **Performance**: Optimize images and implement lazy loading where appropriate
7. **Forms**: Implement contact form functionality
8. **Analytics**: Add tracking codes if needed

## Technical Notes

The migration script successfully:
- ✅ Extracted content from HTML files
- ✅ Converted HTML to JSX format
- ✅ Preserved sidebar navigation
- ✅ Maintained breadcrumb structure
- ✅ Updated image and link paths
- ✅ Applied correct layouts
- ✅ Handled various HTML structures

## Post-Migration Tasks
1. ✅ Content migration complete for all pages
2. 📋 Test all internal links
3. 📋 Optimize images for web
4. 📋 Add proper meta tags for SEO
5. 📋 Implement contact form functionality
6. 📋 Cross-browser testing
7. 📋 Performance optimization
8. 📋 Deploy to production

## Migration Script
The migration was performed using an automated Node.js script located at `scripts/migrate-content.js`. This script:
- Uses JSDOM to parse HTML files
- Extracts content, sidebars, and breadcrumbs
- Converts HTML to JSX format
- Generates proper Next.js page components
- Maintains original structure and styling

To run the migration again or add new pages, see `scripts/README.md` for instructions. 