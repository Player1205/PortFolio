import glob
import re

files = glob.glob('*.html')

for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Rename Twitter to X and add link
    content = re.sub(
        r'href="#"([^>]*)>Twitter</a>',
        r'href="https://x.com/thecapman_life" target="_blank" rel="noopener noreferrer"\1>X</a>',
        content
    )
    
    # Change Email link to contact.html
    content = re.sub(
        r'href="#"([^>]*)>Email</a>',
        r'href="contact.html"\1>Email</a>',
        content
    )

    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print('Done fixing footers')
