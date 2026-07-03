import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex-grow pt-[104px] pb-24 md:pb-12 px-4 md:px-16 w-full max-w-7xl mx-auto flex flex-col gap-12">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-12 mb-16 md:mb-32 mt-8 md:mt-0">
        <div className="flex-1 max-w-2xl flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container/20 text-primary font-label-md text-label-md mb-6" data-aos="fade-up">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            Available for new opportunities
          </div>
          <h1 className="font-headline-xl text-[36px] leading-[44px] md:text-headline-xl text-on-surface dark:text-inverse-on-surface mb-4 md:mb-6" data-aos="fade-up" data-aos-delay="100">
            Hi, I'm Vansh Rana.<br/>
            <span className="text-primary">Software Engineer.</span>
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant dark:text-secondary-fixed mb-8 max-w-lg mx-auto md:mx-0" data-aos="fade-up" data-aos-delay="200">
            I build precise, scalable system architectures and highly crafted user interfaces. Bridging the gap between robust backend logic and elegant frontend experiences.
          </p>
          <div className="flex items-center justify-start gap-4 w-full" data-aos="fade-up" data-aos-delay="300">
            <Link href="/work" className="magnetic-btn font-label-md text-label-md px-6 py-3 rounded-lg bg-primary-container text-on-primary-container hover:bg-primary/20 transition-colors font-bold shadow-sm inline-block">
              View Work
            </Link>
            <Link href="/contact" className="magnetic-btn font-label-md text-label-md px-6 py-3 rounded-lg border-2 border-outline-variant text-secondary dark:text-secondary-fixed hover:border-outline hover:text-on-surface dark:text-inverse-on-surface transition-colors flex items-center gap-2">
              Contact Me
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
        </div>
        <div className="flex-1 w-full max-w-lg relative" data-aos="zoom-in" data-aos-delay="400">
          {/* Decorative background blob */}
          <div className="absolute inset-0 bg-primary-container dark:bg-primary-fixed-dim rounded-full blur-3xl opacity-30 transform translate-x-4 translate-y-4 transition-colors duration-500"></div>
          <div className="grid grid-cols-2 grid-rows-2 gap-3 md:grid-cols-3 md:gap-4 relative h-[280px] md:h-[450px]">
            {/* Big image (Trophy) - takes 1 col on mobile, 2 cols on desktop */}
            <div className="col-span-1 row-span-2 md:col-span-2 md:row-span-2 relative rounded-2xl overflow-hidden border border-outline-variant/30 dark:border-white/10 shadow-lg bg-surface-container dark:bg-inverse-surface transition-colors duration-500 group">
              <img alt="Vansh Rana with Trophy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/PortFolio/assets/images/20260228_172935.jpg"/>
            </div>
            {/* Small image top right */}
            <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden border border-outline-variant/30 dark:border-white/10 shadow-lg bg-surface-container dark:bg-inverse-surface transition-colors duration-500 group">
              <img alt="Vansh Rana Portrait" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/PortFolio/assets/images/IMG_0426.jpg"/>
            </div>
            {/* Small image bottom right */}
            <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden border border-outline-variant/30 dark:border-white/10 shadow-lg bg-surface-container dark:bg-inverse-surface transition-colors duration-500 group">
              <img alt="Vansh Rana" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/PortFolio/assets/images/20260228_143639.jpg"/>
            </div>
          </div>
        </div>
      </section>

      {/* About / Architecture Section (Bento Grid Style) */}
      <section className="mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Main About Card */}
          <div className="md:col-span-2 glass-card dark:bg-inverse-surface/60 dark:border-white/10 rounded-2xl p-6 flex flex-col justify-between transition-colors duration-500" data-aos="fade-up">
            <div>
              <div className="w-12 h-12 rounded-full bg-surface-container dark:bg-[#261714] flex items-center justify-center mb-6 text-primary">
                <span className="material-symbols-outlined">architecture</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface dark:text-inverse-on-surface mb-4">
                System Architecture &amp;<br/>Design Philosophy
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant dark:text-secondary-fixed mb-6">
                My approach to software engineering roots in minimalism and efficiency. I design architectures that are as scalable as they are maintainable, prioritizing clear data flow and modular components. Whether it's a microservice backend or a reactive frontend, precision is the anchor.
              </p>
            </div>
            <div className="bg-[#121212] rounded-xl p-4 font-code text-code text-surface-container-highest mt-6 shadow-inner border border-outline/20 hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-center gap-2 mb-2 pb-2 border-b border-surface-tint/20">
                <div className="w-3 h-3 rounded-full bg-error"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFDAB9]"></div>
                <div className="w-3 h-3 rounded-full bg-[#516169]"></div>
              </div>
              <pre className="overflow-x-auto whitespace-pre"><code><span className="text-primary-fixed">const</span> engineer = {'{\n'}
{'  '}name: <span className="text-tertiary-fixed">'Vansh Rana'</span>,{'\n'}
{'  '}focus: [<span className="text-tertiary-fixed">'Architecture'</span>, <span className="text-tertiary-fixed">'UI/UX'</span>, <span className="text-tertiary-fixed">'Performance'</span>],{'\n'}
{'  '}build: () =&gt; <span className="text-primary-fixed">return</span> executePrecision(){'\n'}
{'}'};</code></pre>
            </div>
          </div>
          {/* Secondary Cards */}
          <div className="flex flex-col gap-4">
            <div className="glass-card dark:bg-inverse-surface/60 dark:border-white/10 rounded-2xl p-6 flex-1 flex flex-col justify-center transition-colors duration-500" data-aos="fade-up" data-aos-delay="100">
              <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface dark:text-inverse-on-surface mb-2">3</h3>
              <p className="font-label-md text-label-md text-secondary dark:text-secondary-fixed uppercase tracking-widest">Software Eng. Experience</p>
            </div>
            <div className="glass-card dark:bg-inverse-surface/60 dark:border-white/10 rounded-2xl p-6 flex-1 bg-primary-container/10 border-primary/20 flex flex-col justify-center transition-colors duration-500" data-aos="fade-up" data-aos-delay="200">
              <span className="material-symbols-outlined text-primary mb-4 text-[32px]">terminal</span>
              <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface dark:text-inverse-on-surface mb-2">Hacker</h3>
              <p className="font-label-md text-label-md text-secondary dark:text-secondary-fixed uppercase tracking-widest">Hackathons & OSS</p>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Skills Marquee */}
      <section className="py-12 border-y border-surface-container-highest bg-surface-container-low dark:bg-[#201311]/30 relative" data-aos="fade-in">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background dark:from-inverse-surface to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background dark:from-inverse-surface to-transparent z-10 pointer-events-none"></div>
        <div className="marquee-container">
          <div className="marquee-content font-headline-lg-mobile text-headline-lg-mobile font-bold text-secondary dark:text-outline-variant flex items-center gap-12 px-12">
            {/* Duplicate items to create seamless loop */}
            <span className="">React</span> • <span className="">Node.js</span> • <span className="">TypeScript</span> • <span className="">System Design</span> • <span className="">GraphQL</span> • <span className="">PostgreSQL</span> • <span className="">Docker</span> • <span className="">AWS</span> • <span className="">Tailwind CSS</span> •
            <span className="">React</span> • <span className="">Node.js</span> • <span className="">TypeScript</span> • <span className="">System Design</span> • <span className="">GraphQL</span> • <span className="">PostgreSQL</span> • <span className="">Docker</span> • <span className="">AWS</span> • <span className="">Tailwind CSS</span> •
            <span className="">React</span> • <span className="">Node.js</span> • <span className="">TypeScript</span> • <span className="">System Design</span> • <span className="">GraphQL</span> • <span className="">PostgreSQL</span> • <span className="">Docker</span> • <span className="">AWS</span> • <span className="">Tailwind CSS</span>
          </div>
        </div>
      </section>
    </main>
  );
}
