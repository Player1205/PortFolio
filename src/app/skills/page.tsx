export default function Skills() {
  return (
    <main className="flex-grow pt-[104px] pb-24 md:pb-12 px-4 md:px-16 w-full max-w-7xl mx-auto flex flex-col gap-12">
      <div className="mb-12 text-left" data-aos="fade-up">
        <h1 className="font-headline-xl text-[36px] leading-[44px] md:text-headline-xl text-on-surface dark:text-inverse-on-surface mb-2">Technical Proficiency</h1>
        <p className="font-body-md text-body-md text-on-surface-variant dark:text-secondary-fixed max-w-2xl">A structured overview of the languages, frameworks, and tools I utilize to build scalable, high-performance applications.</p>
      </div>
      {/* Bento Grid for Skills */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Category: Languages & Core */}
        <section className="bg-surface dark:bg-inverse-surface rounded-xl p-6 border border-outline/20 shadow-sm flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300 group" data-aos="fade-right" data-aos-delay="100">
          <div className="flex items-center gap-2 text-primary border-b border-outline/10 pb-2">
            <span className="material-symbols-outlined text-[24px]">terminal</span>
            <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface dark:text-inverse-on-surface">Languages &amp; Core</h2>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            <div className="skill-badge px-4 py-2 bg-surface-container dark:bg-[#261714] text-on-surface dark:text-inverse-on-surface font-code text-code rounded border border-outline/10">C++</div>
            <div className="skill-badge px-4 py-2 bg-surface-container dark:bg-[#261714] text-on-surface dark:text-inverse-on-surface font-code text-code rounded border border-outline/10">Python</div>
            <div className="skill-badge px-4 py-2 bg-surface-container dark:bg-[#261714] text-on-surface dark:text-inverse-on-surface font-code text-code rounded border border-outline/10">Java</div>
            <div className="skill-badge px-4 py-2 bg-surface-container dark:bg-[#261714] text-on-surface dark:text-inverse-on-surface font-code text-code rounded border border-outline/10">JavaScript</div>
            <div className="skill-badge px-4 py-2 bg-surface-container dark:bg-[#261714] text-on-surface dark:text-inverse-on-surface font-code text-code rounded border border-outline/10">TypeScript</div>
            <div className="skill-badge px-4 py-2 bg-surface-container dark:bg-[#261714] text-on-surface dark:text-inverse-on-surface font-code text-code rounded border border-outline/10">SQL</div>
            <div className="skill-badge px-4 py-2 bg-surface-container dark:bg-[#261714] text-on-surface dark:text-inverse-on-surface font-code text-code rounded border border-outline/10">HTML/CSS</div>
          </div>
        </section>
        {/* Category: Frameworks */}
        <section className="bg-surface dark:bg-inverse-surface rounded-xl p-6 border border-outline/20 shadow-sm flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300 lg:col-span-1 md:col-span-1" data-aos="fade-up" data-aos-delay="200">
          <div className="flex items-center gap-2 text-primary border-b border-outline/10 pb-2">
            <span className="material-symbols-outlined text-[24px]">view_quilt</span>
            <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface dark:text-inverse-on-surface">Frameworks</h2>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            <div className="skill-badge px-4 py-2 bg-surface-container dark:bg-[#261714] text-on-surface dark:text-inverse-on-surface font-code text-code rounded border border-outline/10">React.js</div>
            <div className="skill-badge px-4 py-2 bg-surface-container dark:bg-[#261714] text-on-surface dark:text-inverse-on-surface font-code text-code rounded border border-outline/10">Node.js</div>
            <div className="skill-badge px-4 py-2 bg-surface-container dark:bg-[#261714] text-on-surface dark:text-inverse-on-surface font-code text-code rounded border border-outline/10">Express.js</div>
            <div className="skill-badge px-4 py-2 bg-surface-container dark:bg-[#261714] text-on-surface dark:text-inverse-on-surface font-code text-code rounded border border-outline/10">Next.js</div>
            <div className="skill-badge px-4 py-2 bg-surface-container dark:bg-[#261714] text-on-surface dark:text-inverse-on-surface font-code text-code rounded border border-outline/10">Tailwind CSS</div>
            <div className="skill-badge px-4 py-2 bg-surface-container dark:bg-[#261714] text-on-surface dark:text-inverse-on-surface font-code text-code rounded border border-outline/10">Redux</div>
          </div>
        </section>
        {/* Category: Databases & Tools */}
        <section className="bg-surface dark:bg-inverse-surface rounded-xl p-6 border border-outline/20 shadow-sm flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300 md:col-span-2 lg:col-span-1" data-aos="fade-left" data-aos-delay="300">
          <div className="flex items-center gap-2 text-primary border-b border-outline/10 pb-2">
            <span className="material-symbols-outlined text-[24px]">database</span>
            <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface dark:text-inverse-on-surface">Databases &amp; Tools</h2>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            <div className="skill-badge px-4 py-2 bg-surface-container dark:bg-[#261714] text-on-surface dark:text-inverse-on-surface font-code text-code rounded border border-outline/10">MongoDB</div>
            <div className="skill-badge px-4 py-2 bg-surface-container dark:bg-[#261714] text-on-surface dark:text-inverse-on-surface font-code text-code rounded border border-outline/10">PostgreSQL</div>
            <div className="skill-badge px-4 py-2 bg-surface-container dark:bg-[#261714] text-on-surface dark:text-inverse-on-surface font-code text-code rounded border border-outline/10">MySQL</div>
            <div className="skill-badge px-4 py-2 bg-surface-container dark:bg-[#261714] text-on-surface dark:text-inverse-on-surface font-code text-code rounded border border-outline/10">Git</div>
            <div className="skill-badge px-4 py-2 bg-surface-container dark:bg-[#261714] text-on-surface dark:text-inverse-on-surface font-code text-code rounded border border-outline/10">Docker</div>
            <div className="skill-badge px-4 py-2 bg-surface-container dark:bg-[#261714] text-on-surface dark:text-inverse-on-surface font-code text-code rounded border border-outline/10">AWS</div>
            <div className="skill-badge px-4 py-2 bg-surface-container dark:bg-[#261714] text-on-surface dark:text-inverse-on-surface font-code text-code rounded border border-outline/10">Figma</div>
          </div>
        </section>
        {/* Developer Tools Focus / Code Block Aesthetic */}
        <section className="bg-inverse-surface rounded-xl p-6 border border-outline/20 shadow-lg flex flex-col gap-4 lg:col-span-3 md:col-span-2 mt-2 relative overflow-hidden" data-aos="fade-up" data-aos-delay="400">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-container"></div>
          <div className="flex items-center gap-2 text-outline-variant border-b border-outline-variant/20 pb-2">
            <span className="material-symbols-outlined text-[20px]">code</span>
            <span className="font-code text-code text-outline-variant">developer_profile.json</span>
          </div>
          <pre className="font-code text-code text-inverse-on-surface overflow-x-auto"><code className="language-json">{`{
  "developer": "Vansh Rana",
  "focus": ["Full-Stack", "System Design", "Software Engg", "DSA"],
  "currently_learning": [
    "Rust",
    "Web3 Architecture",
    "Next.js"
  ]
}`}</code></pre>
        </section>
      </div>
    </main>
  );
}
