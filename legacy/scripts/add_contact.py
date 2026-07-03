import os
import re

files = ['index.html', 'work.html', 'experience.html', 'skills.html']

contact_link = '\n<a class="text-secondary dark:text-secondary-fixed-dim border-b-2 border-primary dark:border-primary-fixed-dim pb-1 hover:text-on-surface dark:text-inverse-on-surface dark:hover:text-on-secondary-fixed hover:bg-primary-container/20 dark:hover:bg-primary-fixed-dim/10 transition-all duration-300 px-3 py-2 rounded-lg" href="contact.html">Contact</a>\n</div>'

for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Inject the contact link into the navbar
    content = re.sub(r'href="skills\.html">Skills</a>\s*</div>', f'href="skills.html">Skills</a>{contact_link}', content)

    # In work/experience/skills, if contact is active, we should update class, but we can leave it as secondary for simplicity.
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

# Create contact.html
with open('index.html', 'r', encoding='utf-8') as f:
    index_content = f.read()

# Replace title
contact_content = re.sub(r'<title>.*?</title>', '<title>Contact - Vansh Rana Portfolio</title>', index_content)

# Replace the active class logic for Nav
contact_content = contact_content.replace(
    'href="index.html" class="text-primary dark:text-primary-fixed-dim',
    'href="index.html" class="text-secondary dark:text-secondary-fixed-dim'
)
contact_content = contact_content.replace(
    'href="contact.html" class="text-secondary dark:text-secondary-fixed-dim',
    'href="contact.html" class="text-primary dark:text-primary-fixed-dim'
)

# Replace the main content
main_regex = re.compile(r'<main.*?</main>', re.DOTALL)
new_main = '''<main class="w-full max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop pt-32 pb-xl min-h-[70vh] flex flex-col items-center justify-center">
    <div class="glass-card bg-surface-container dark:bg-inverse-surface/60 border border-outline-variant/30 dark:border-white/10 rounded-2xl p-lg md:p-xl w-full max-w-2xl text-center shadow-lg" data-aos="fade-up">
        <div class="w-16 h-16 mx-auto rounded-full bg-primary-container flex items-center justify-center mb-6 text-primary">
            <span class="material-symbols-outlined text-3xl">mail</span>
        </div>
        <h1 class="font-headline-xl text-headline-xl text-on-surface dark:text-inverse-on-surface mb-6">Let's Connect</h1>
        <p class="font-body-md text-body-md text-on-surface-variant dark:text-secondary-fixed mb-8">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
        </p>
        <a href="mailto:vansh5201314@gmail.com" class="magnetic-btn font-label-md text-label-md px-8 py-4 rounded-lg bg-primary text-on-primary hover:opacity-90 transition-opacity font-bold shadow-sm inline-flex items-center gap-2 text-xl">
            <span class="material-symbols-outlined">send</span>
            vansh5201314@gmail.com
        </a>
    </div>
</main>'''

contact_content = main_regex.sub(new_main, contact_content)

with open('contact.html', 'w', encoding='utf-8') as f:
    f.write(contact_content)

print('Contact page created and links added.')
