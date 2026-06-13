import re

with open('work.html', 'r', encoding='utf-8') as f:
    content = f.read()

# For ML-IPL
content = re.sub(
    r'(<!-- Project 1: ML-IPL RosterOptimiser -->\s*<article class=")([^"]*)(".*?data-aos-delay="100">)',
    r'\1\2 cursor-pointer hover:border-primary/50 transition-all\3 onclick="window.open(\'https://github.com/Player1205/ML-RosterOptimiser\', \'_blank\')"',
    content
)

# For CampusCoin
content = re.sub(
    r'(<!-- Project 2: CampusCoin -->\s*<article class=")([^"]*)(".*?data-aos-delay="200">)',
    r'\1\2 cursor-pointer hover:border-primary/50 transition-all\3 onclick="window.open(\'https://github.com/Player1205/CampusCoin\', \'_blank\')"',
    content
)

# For DataPassport
content = re.sub(
    r'(<!-- Project 3: DataPassport -->\s*<article class=")([^"]*)(".*?data-aos-delay="300">)',
    r'\1\2 cursor-pointer hover:border-primary/50 transition-all\3 onclick="window.open(\'https://github.com/Player1205/DataPassport\', \'_blank\')"',
    content
)

with open('work.html', 'w', encoding='utf-8') as f:
    f.write(content)

print('Done fixing articles in work.html')
