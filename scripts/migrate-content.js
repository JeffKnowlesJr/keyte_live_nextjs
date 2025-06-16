const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

// Configuration
const SOURCE_DIR = path.join(__dirname, '../../keyte_live');
const TARGET_DIR = path.join(__dirname, '../app');

// Helper function to convert HTML to JSX
function htmlToJsx(html) {
  if (!html) return '';
  
  return html
    .replace(/class=/g, 'className=')
    .replace(/for=/g, 'htmlFor=')
    .replace(/tabindex=/g, 'tabIndex=')
    .replace(/colspan=/g, 'colSpan=')
    .replace(/rowspan=/g, 'rowSpan=')
    .replace(/frameborder=/g, 'frameBorder=')
    .replace(/allowfullscreen=/g, 'allowFullScreen=')
    .replace(/autocomplete=/g, 'autoComplete=')
    .replace(/autofocus=/g, 'autoFocus=')
    .replace(/enctype=/g, 'encType=')
    .replace(/hspace=/g, 'hSpace=')
    .replace(/vspace=/g, 'vSpace=')
    .replace(/style="([^"]*)"/g, (match, styles) => {
      const styleObj = styles.split(';').reduce((acc, style) => {
        if (style.trim()) {
          const [key, value] = style.split(':').map(s => s.trim());
          const camelKey = key.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
          acc[camelKey] = value;
        }
        return acc;
      }, {});
      return `style={${JSON.stringify(styleObj)}}`;
    })
    .replace(/<!--[\s\S]*?-->/g, '') // Remove HTML comments
    .replace(/<br\s*\/?>/g, '<br />') // Self-closing br tags
    .replace(/<img([^>]*)>/g, '<img$1 />') // Self-closing img tags
    .replace(/<input([^>]*)>/g, '<input$1 />') // Self-closing input tags
    .replace(/<hr\s*\/?>/g, '<hr />') // Self-closing hr tags
    .replace(/&nbsp;/g, ' ') // Replace nbsp with space
    .replace(/href="\.\.\/([^"]*)"/g, 'href="/$1"') // Fix relative paths
    .replace(/src="\.\.\/([^"]*)"/g, 'src="/$1"') // Fix relative image paths
    .replace(/href="([^"]*).html"/g, (match, path) => {
      // Convert .html links to Next.js routes
      if (path.startsWith('http') || path.startsWith('mailto:')) {
        return match;
      }
      return `href="${path}"`;
    });
}

// Helper function to extract breadcrumbs
function extractBreadcrumbs(dom) {
  const breadcrumbs = dom.querySelector('ul.breadcrumbs');
  if (!breadcrumbs) return null;
  
  const items = Array.from(breadcrumbs.querySelectorAll('li')).map(li => {
    const link = li.querySelector('a');
    if (link) {
      const href = link.getAttribute('href');
      return {
        text: link.textContent.trim(),
        href: href ? href.replace('.html', '').replace('../', '/') : '#'
      };
    }
    return {
      text: li.textContent.trim(),
      current: li.classList.contains('current')
    };
  });
  
  return items;
}

// Helper function to extract sidebar content
function extractSidebar(dom) {
  const sidebar = dom.querySelector('.three.columns.hide-for-small');
  if (!sidebar) return null;
  
  const sideNav = sidebar.querySelector('ul.side-nav');
  const sideNavHtml = sideNav ? sideNav.outerHTML : '';
  
  // Remove the side nav from sidebar to get remaining content
  if (sideNav) sideNav.remove();
  
  const remainingContent = sidebar.innerHTML.trim();
  
  return {
    navigation: htmlToJsx(sideNavHtml),
    content: htmlToJsx(remainingContent)
  };
}

// Helper function to extract main content
function extractMainContent(dom) {
  // Try multiple selectors
  let mainContent = dom.querySelector('.nine.columns');
  
  // If no nine columns, try to find main content area
  if (!mainContent) {
    mainContent = dom.querySelector('#maincontent');
    
    // If found maincontent, look for actual content inside
    if (mainContent) {
      const innerContent = mainContent.querySelector('.foundation-row');
      if (innerContent) {
        mainContent = innerContent;
      }
    }
  }
  
  if (!mainContent) {
    console.warn('Could not find main content area');
    return '';
  }
  
  // Remove breadcrumbs if they exist inside main content
  const breadcrumbs = mainContent.querySelector('ul.breadcrumbs');
  if (breadcrumbs) breadcrumbs.remove();
  
  return htmlToJsx(mainContent.innerHTML.trim());
}

// Generate page component
function generatePageComponent(pageName, content, breadcrumbs, sidebar, isHomepage = false) {
  const layout = isHomepage ? 'MainLayout' : 'SubpageLayout';
  
  let breadcrumbsJsx = '';
  if (breadcrumbs && !isHomepage) {
    breadcrumbsJsx = `
            <ul className="breadcrumbs">
              ${breadcrumbs.map(item => {
                if (item.current) {
                  return `<li className="current"><a>${item.text}</a></li>`;
                }
                return `<li><a href="${item.href}">${item.text}</a></li>`;
              }).join('\n              ')}
            </ul>`;
  }
  
  let pageContent = '';
  if (isHomepage) {
    // Homepage has special structure
    pageContent = content;
  } else if (sidebar) {
    // Subpage with sidebar
    pageContent = `
          <div className="three columns hide-for-small">
            ${sidebar.navigation}
            ${sidebar.content}
          </div>

          <div className="nine columns">
            ${breadcrumbsJsx}
            ${content}
          </div>`;
  } else {
    // Subpage without sidebar
    pageContent = `
          <div className="twelve columns">
            ${breadcrumbsJsx}
            ${content}
          </div>`;
  }
  
  return `import ${layout} from '@/components/layout/${layout}'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '${pageName} - Keyte Group',
  description: 'Keyte Group - ${pageName}',
}

export default function Page() {
  return (
    <${layout}>
      ${isHomepage ? pageContent : `<div className="foundation-row" id="maincontentwrapper">
        <div className="eleven columns centered">
          <div className="foundation-row" id="">
            <div
              id="menu-backing"
              className="eleven columns content"
              style={{ height: '9em', position: 'relative', left: '46px' }}
            ></div>
          </div>
        </div>
      </div>
      
      <div className="foundation-row">
        <div className="eleven columns centered">
          <div className="foundation-row">
            <div id="headerdots">
              <img src="/images/headerdots.png" alt="" role="presentation" />
            </div>
            <div id="maincontent" className="eleven columns content">
              <div className="foundation-row">
                ${pageContent}
              </div>
            </div>
          </div>
        </div>
      </div>`}
    </${layout}>
  )
}
`;
}

// Process a single HTML file
async function processHtmlFile(sourcePath, targetPath, pageName, isHomepage = false) {
  try {
    console.log(`Processing: ${sourcePath}`);
    
    // Read the HTML file
    const html = fs.readFileSync(sourcePath, 'utf8');
    
    // Parse with JSDOM
    const dom = new JSDOM(html);
    const document = dom.window.document;
    
    // Extract content
    const breadcrumbs = extractBreadcrumbs(document);
    const sidebar = extractSidebar(document);
    const mainContent = extractMainContent(document);
    
    // Generate component
    const component = generatePageComponent(pageName, mainContent, breadcrumbs, sidebar, isHomepage);
    
    // Ensure target directory exists
    const targetDir = path.dirname(targetPath);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
    
    // Write the component
    fs.writeFileSync(targetPath, component);
    console.log(`✅ Generated: ${targetPath}`);
    
  } catch (error) {
    console.error(`❌ Error processing ${sourcePath}:`, error.message);
    console.error(error.stack);
  }
}

// Migration configuration
const migrations = [
  // Who We Are section
  {
    source: 'who-we-are/index.html',
    target: 'who-we-are/page.tsx',
    name: 'Who We Are'
  },
  {
    source: 'who-we-are/beau-keyte.html',
    target: 'who-we-are/beau-keyte/page.tsx',
    name: 'Beau Keyte'
  },
  
  // What We Did section
  {
    source: 'what-we-did/index.html',
    target: 'what-we-did/page.tsx',
    name: 'What We Did'
  },
  {
    source: 'what-we-did/value-stream-mapping.html',
    target: 'what-we-did/value-stream-mapping/page.tsx',
    name: 'Value Stream Mapping'
  },
  {
    source: 'what-we-did/collaborative-learning.html',
    target: 'what-we-did/collaborative-learning/page.tsx',
    name: 'Collaborative Learning'
  },
  {
    source: 'what-we-did/a3-thinking.html',
    target: 'what-we-did/a3-thinking/page.tsx',
    name: 'A3 Thinking'
  },
  {
    source: 'what-we-did/leadership-coaching.html',
    target: 'what-we-did/leadership-coaching/page.tsx',
    name: 'Leadership Coaching'
  },
  
  // Who We Served section
  {
    source: 'who-we-served/index.html',
    target: 'who-we-served/page.tsx',
    name: 'Who We Served'
  },
  {
    source: 'who-we-served/clients-industry.html',
    target: 'who-we-served/clients-industry/page.tsx',
    name: 'Clients by Industry'
  },
  
  // How We Think section
  {
    source: 'how-we-think/index.html',
    target: 'how-we-think/page.tsx',
    name: 'How We Think'
  },
  {
    source: 'how-we-think/perfecting-patient-journeys-book.html',
    target: 'how-we-think/perfecting-patient-journeys-book/page.tsx',
    name: 'Perfecting Patient Journeys Book'
  },
  {
    source: 'how-we-think/complete-lean-enterprise-book.html',
    target: 'how-we-think/complete-lean-enterprise-book/page.tsx',
    name: 'Complete Lean Enterprise Book'
  },
  {
    source: 'how-we-think/articles-and-thoughts.html',
    target: 'how-we-think/articles-and-thoughts/page.tsx',
    name: 'Articles and Thoughts'
  },
  {
    source: 'how-we-think/short-stops.html',
    target: 'how-we-think/short-stops/page.tsx',
    name: 'Short Stops'
  },
  {
    source: 'how-we-think/remarketing-continuous-improvement.html',
    target: 'how-we-think/remarketing-continuous-improvement/page.tsx',
    name: 'Remarketing Continuous Improvement'
  },
  
  // Contact section
  {
    source: 'contact/index.html',
    target: 'contact/page.tsx',
    name: 'Contact'
  }
];

// Main migration function
async function migrateContent() {
  console.log('🚀 Starting content migration...\n');
  
  for (const migration of migrations) {
    const sourcePath = path.join(SOURCE_DIR, migration.source);
    const targetPath = path.join(TARGET_DIR, migration.target);
    
    if (fs.existsSync(sourcePath)) {
      await processHtmlFile(sourcePath, targetPath, migration.name);
    } else {
      console.log(`⚠️  Source not found: ${sourcePath}`);
    }
  }
  
  console.log('\n✨ Migration complete!');
}

// Run the migration
migrateContent().catch(console.error); 