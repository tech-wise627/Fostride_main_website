const fs = require('fs');
const files = [
    'app/page.tsx',
    'app/our-team/page.tsx',
    'app/contact/page.tsx',
    'app/r3bin/page.tsx',
    'app/login/page.tsx',
    'app/signup/page.tsx',
    'app/dashboard/page.tsx'
];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace the exact Background Pattern block using regex
    // We match the comment and the div up to the closing div
    const regex = /\{\/\*\s*Geometric Background Pattern.*?\*\/\}\s*<div\s+className=\"fixed inset-0 z-0 overflow-hidden pointer-events-none\">\s*<svg[\s\S]*?<\/svg>\s*<\/div>/im;
    if (regex.test(content)) {
        content = content.replace(regex, '{/* Geometric Background Pattern Component */}\n            <BackgroundPattern />');
        
        // Add import statement at the top
        if (!content.includes('import { BackgroundPattern }')) {
            content = 'import { BackgroundPattern } from "@/components/landing/background-pattern";\n' + content;
        }
        
        fs.writeFileSync(file, content);
        console.log('Updated ' + file);
    } else {
        console.log('Could not find pattern block in ' + file);
    }
});
