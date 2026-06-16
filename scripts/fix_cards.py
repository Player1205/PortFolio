import os
import re

files = ['index.html', 'work.html', 'experience.html', 'skills.html']

for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    content = re.sub(r'bg-surface-container-lowest(?! dark:bg)', r'bg-surface-container-lowest dark:bg-[#1a0f0d]', content)
    content = re.sub(r'bg-surface-container-highest(?! dark:bg)', r'bg-surface-container-highest dark:bg-[#3d2520]', content)
    content = re.sub(r'bg-surface-container-low(?! dark:bg)', r'bg-surface-container-low dark:bg-[#201311]', content)
    content = re.sub(r'bg-surface-container(?!-)(?! dark:bg)', r'bg-surface-container dark:bg-[#261714]', content)
    content = re.sub(r'bg-surface(?!-)(?!/)(?! dark:bg)', r'bg-surface dark:bg-inverse-surface', content)
    content = re.sub(r'bg-surface-variant(?! dark:bg)', r'bg-surface-variant dark:bg-[#331f1b]', content)

    # Fix specific backgrounds in experience.html timeline
    content = content.replace('bg-[#e8dfda]', 'bg-surface-container dark:bg-inverse-surface')

    # Also fix the text "3 Years Experience in what?"
    # The user wanted to mention what the experience is in.
    # In index.html, it currently says "3" and "Years Experience". We can change it to "Software Eng." or "SWE Experience".
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print('Cards fixed.')
