import re

with open('work.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix the visibility of tags
content = content.replace('bg-surface/80 backdrop-blur-md', 'bg-surface/80 dark:bg-inverse-surface/80 backdrop-blur-md')

# Fix repo links
# Project 1: ML-IPL RosterOptimiser
content = re.sub(
    r'(<h2[^>]*>ML-IPL RosterOptimiser</h2>\s*<a[^>]*href=")(#)(")',
    r'\1https://github.com/Player1205/ML-RosterOptimiser\3 target="_blank" rel="noopener noreferrer"',
    content
)

# Project 2: CampusCoin
content = re.sub(
    r'(<h2[^>]*>CampusCoin</h2>\s*<a[^>]*href=")(#)(")',
    r'\1https://github.com/Player1205/CampusCoin\3 target="_blank" rel="noopener noreferrer"',
    content
)

# Project 3: DataPassport
content = re.sub(
    r'(<h2[^>]*>DataPassport</h2>\s*<a[^>]*href=")(#)(")',
    r'\1https://github.com/Player1205/DataPassport\3 target="_blank" rel="noopener noreferrer"',
    content
)

with open('work.html', 'w', encoding='utf-8') as f:
    f.write(content)

print('Done fixing work.html')
