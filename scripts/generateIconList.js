const fs = require('fs');
const path = require('path');

// Read all SVG files from public/icon folder
const iconFolder = path.join(__dirname, '../public/icon');
const files = fs.readdirSync(iconFolder).filter(file => file.endsWith('.svg'));

// Generate icon list
const iconList = files.map(file => {
  const name = file.replace('.svg', '');
  // Convert PascalCase to Title Case for label
  const label = name.replace(/([A-Z])/g, ' $1').trim();
  // Convert to kebab-case for name
  const nameKebab = name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  
  return {
    name: nameKebab,
    label: label,
    filePath: `icon/${file}`, // Path relative to public folder
    variantCount: 7
  };
});

// Sort alphabetically by label
iconList.sort((a, b) => a.label.localeCompare(b.label));

// Generate the array as a string
const arrayString = `const allIcons = ${JSON.stringify(iconList, null, 2)};`;

console.log(`Generated icon list with ${iconList.length} icons`);
console.log('\nFirst 10 icons:');
iconList.slice(0, 10).forEach(icon => {
  console.log(`  - ${icon.label} (${icon.filePath})`);
});

// Write to a file that can be imported
fs.writeFileSync(
  path.join(__dirname, '../src/data/iconList.js'),
  `// Auto-generated icon list from public/icon folder\n// Generated on: ${new Date().toISOString()}\n// Total icons: ${iconList.length}\n\nexport ${arrayString}\n`
);

console.log(`\nIcon list written to: src/data/iconList.js`);

