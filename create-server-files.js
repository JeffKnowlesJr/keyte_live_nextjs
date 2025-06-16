const fs = require('fs');
const path = require('path');

// Create server directory if it doesn't exist
const serverDir = path.join(process.cwd(), 'out', 'server');
if (!fs.existsSync(serverDir)) {
  fs.mkdirSync(serverDir, { recursive: true });
}

// Create required server files
const files = [
  { path: path.join(process.cwd(), 'out', 'required-server-files.json'), content: JSON.stringify({
    version: 1,
    config: {},
    appDir: true,
    files: []
  }, null, 2) },
  { path: path.join(serverDir, 'middleware-manifest.json'), content: JSON.stringify({
    sortedMiddleware: [],
    middleware: {},
    functions: {},
    version: 2
  }, null, 2) },
  { path: path.join(serverDir, 'middleware-build-manifest.js'), content: 'module.exports = {}' },
  { path: path.join(serverDir, 'pages-manifest.json'), content: JSON.stringify({}, null, 2) },
  { path: path.join(serverDir, 'app-paths-manifest.json'), content: JSON.stringify({}, null, 2) },
  { path: path.join(serverDir, 'app-paths-manifest.js'), content: 'module.exports = {}' },
  { path: path.join(serverDir, 'pages-manifest.js'), content: 'module.exports = {}' },
  { path: path.join(serverDir, 'server-reference-manifest.js'), content: 'module.exports = { clientRefs: {}, serverRefs: {} }' },
  { path: path.join(serverDir, 'server-reference-manifest.json'), content: JSON.stringify({ clientRefs: {}, serverRefs: {} }, null, 2) },
  { path: path.join(serverDir, 'app-build-manifest.json'), content: JSON.stringify({}, null, 2) },
  { path: path.join(serverDir, 'flight-server-css-manifest.json'), content: JSON.stringify({}, null, 2) },
  { path: path.join(serverDir, 'flight-server-css-manifest.js'), content: 'module.exports = {}' },
  { path: path.join(serverDir, 'trace'), content: '{}' }
];

// Write all files
files.forEach(file => {
  fs.writeFileSync(file.path, file.content);
  console.log(`Created ${file.path}`);
});

console.log('All server trace files created successfully!');