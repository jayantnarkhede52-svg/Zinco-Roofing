const fs = require('fs');
let content = fs.readFileSync('src/App.jsx', 'utf8');

// The regex matches: import ComponentName from './pages/Path'
// and replaces it with: const ComponentName = lazy(() => import('./pages/Path'))
content = content.replace(/^import\s+([A-Z][a-zA-Z0-9_]*)\s+from\s+['"](\.\/pages\/[^'"]+)['"]\s*;/gm, 'const $1 = lazy(() => import(\'$2\'));');

fs.writeFileSync('src/App.jsx', content);
console.log('App.jsx has been updated with React.lazy imports.');
