import os
import re

files = ['index.html', 'work.html', 'experience.html', 'skills.html']

for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Default to light mode (remove OS preference check)
    content = content.replace(
        "if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches))",
        "if (localStorage.getItem('theme') === 'dark')"
    )

    # Add dark mode text classes
    content = re.sub(r'text-on-surface(?!-variant)(?! dark:text-inverse-on-surface)', r'text-on-surface dark:text-inverse-on-surface', content)
    content = re.sub(r'text-on-surface-variant(?! dark:text-secondary-fixed)', r'text-on-surface-variant dark:text-secondary-fixed', content)
    content = re.sub(r'text-secondary(?! dark:text-secondary-fixed)(?!-fixed)', r'text-secondary dark:text-secondary-fixed', content)

    # Fix the cards
    if file == 'index.html':
        content = content.replace('5+', '3')
        content = content.replace('Global', 'Hacker')
        content = content.replace('Client Base', 'Hackathons & OSS')
        content = content.replace('>public<', '>terminal<')

    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print('Done fixing files.')
