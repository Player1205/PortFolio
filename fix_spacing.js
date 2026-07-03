const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    filelist = fs.statSync(path.join(dir, file)).isDirectory()
      ? walkSync(path.join(dir, file), filelist)
      : filelist.concat(path.join(dir, file));
  });
  return filelist;
};

const files = walkSync(path.join(__dirname, 'src', 'app')).concat(walkSync(path.join(__dirname, 'src', 'components')));
const tsxFiles = files.filter(f => f.endsWith('.tsx'));

const replacements = {
  // Spacing (padding, margin, gap)
  '\\bgap-xl\\b': 'gap-12',
  '\\bmb-xl\\b': 'mb-12',
  '\\bmt-xl\\b': 'mt-12',
  '\\bmy-xl\\b': 'my-12',
  '\\bmx-xl\\b': 'mx-12',
  '\\bm-xl\\b': 'm-12',
  '\\bpb-xl\\b': 'pb-12',
  '\\bpt-xl\\b': 'pt-12',
  '\\bpy-xl\\b': 'py-12',
  '\\bpx-xl\\b': 'px-12',
  '\\bp-xl\\b': 'p-12',
  '\\bbottom-xl\\b': 'bottom-12',
  '\\btop-xl\\b': 'top-12',
  
  '\\bgap-lg\\b': 'gap-6',
  '\\bmb-lg\\b': 'mb-6',
  '\\bmt-lg\\b': 'mt-6',
  '\\bmy-lg\\b': 'my-6',
  '\\bmx-lg\\b': 'mx-6',
  '\\bm-lg\\b': 'm-6',
  '\\bpb-lg\\b': 'pb-6',
  '\\bpt-lg\\b': 'pt-6',
  '\\bpy-lg\\b': 'py-6',
  '\\bpx-lg\\b': 'px-6',
  '\\bp-lg\\b': 'p-6',
  '\\bbottom-lg\\b': 'bottom-6',
  '\\btop-lg\\b': 'top-6',
  
  '\\bgap-md\\b': 'gap-4',
  '\\bmb-md\\b': 'mb-4',
  '\\bmt-md\\b': 'mt-4',
  '\\bmy-md\\b': 'my-4',
  '\\bmx-md\\b': 'mx-4',
  '\\bm-md\\b': 'm-4',
  '\\bpb-md\\b': 'pb-4',
  '\\bpt-md\\b': 'pt-4',
  '\\bpy-md\\b': 'py-4',
  '\\bpx-md\\b': 'px-4',
  '\\bp-md\\b': 'p-4',
  '\\bbottom-md\\b': 'bottom-4',
  '\\btop-md\\b': 'top-4',

  '\\bgap-sm\\b': 'gap-2',
  '\\bmb-sm\\b': 'mb-2',
  '\\bmt-sm\\b': 'mt-2',
  '\\bmy-sm\\b': 'my-2',
  '\\bmx-sm\\b': 'mx-2',
  '\\bm-sm\\b': 'm-2',
  '\\bpb-sm\\b': 'pb-2',
  '\\bpt-sm\\b': 'pt-2',
  '\\bpy-sm\\b': 'py-2',
  '\\bpx-sm\\b': 'px-2',
  '\\bp-sm\\b': 'p-2',
  '\\bbottom-sm\\b': 'bottom-2',
  '\\btop-sm\\b': 'top-2',

  '\\bgap-xs\\b': 'gap-1',
  '\\bmb-xs\\b': 'mb-1',
  '\\bpb-xs\\b': 'pb-1',
  '\\bpy-xs\\b': 'py-1',
  '\\bpx-xs\\b': 'px-1',
  '\\bp-xs\\b': 'p-1',

  '\\bpx-margin-desktop\\b': 'px-16',
  '\\bpx-margin-mobile\\b': 'px-4',
};

let totalReplacements = 0;

for (const file of tsxFiles) {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;
  
  for (const [pattern, replacement] of Object.entries(replacements)) {
    const regex = new RegExp(pattern, 'g');
    content = content.replace(regex, replacement);
  }
  
  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    totalReplacements++;
    console.log(`Updated spacing classes in ${path.basename(file)}`);
  }
}

console.log(`Finished updating ${totalReplacements} files for spacing.`);
