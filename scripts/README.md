# Content Migration Script

This script automates the migration of content from the original Keyte Group HTML site to the Next.js application.

## Setup

1. Install dependencies:
```bash
cd scripts
npm install
```

## Usage

Run the migration script:
```bash
npm run migrate
```

Or directly:
```bash
node migrate-content.js
```

## What it does

The script will:
1. Read HTML files from `../../keyte_live/` directory
2. Parse the HTML using JSDOM
3. Extract main content, sidebar content, and breadcrumbs
4. Convert HTML to JSX format
5. Generate proper Next.js page components
6. Save the components to the `app/` directory

## Features

- **Automatic HTML to JSX conversion**: Converts class to className, style strings to objects, etc.
- **Path fixing**: Updates relative paths to absolute paths
- **Link conversion**: Removes .html extensions from internal links
- **Sidebar extraction**: Properly extracts and formats sidebar navigation
- **Breadcrumb handling**: Preserves breadcrumb navigation
- **Layout detection**: Uses MainLayout for homepage, SubpageLayout for all others

## Customization

To add more pages to migrate, edit the `migrations` array in `migrate-content.js`:

```javascript
const migrations = [
  {
    source: 'path/to/source.html',
    target: 'path/to/target/page.tsx',
    name: 'Page Name'
  },
  // Add more pages here
];
```

## Post-Migration

After running the script:
1. Review generated components for accuracy
2. Test all links and navigation
3. Verify images are loading correctly
4. Check responsive behavior
5. Add any missing interactive features

## Troubleshooting

- **Source not found**: Check that the source HTML file exists in the keyte_live directory
- **Parse errors**: Some complex HTML might need manual adjustment after migration
- **Missing content**: Check the CSS selectors used for extraction match your HTML structure 