export default function Experience() {
  return (
    <main className="flex-grow pt-[104px] pb-24 md:pb-12 px-4 md:px-16 w-full max-w-7xl mx-auto flex flex-col gap-12 relative z-10">
      <header className="mb-12 text-left">
        <h1 className="font-headline-xl text-[36px] leading-[44px] md:text-headline-xl text-on-surface dark:text-inverse-on-surface mb-2">Experience and Open Source</h1>
        <p className="font-body-md text-body-md text-on-surface-variant dark:text-secondary-fixed max-w-2xl mx-auto md:mx-0">My professional journey and contributions to the developer community.</p>
      </header>
      <div className="relative w-full py-6">
        <div className="timeline-line"></div>
        {/* Timeline Item 1 */}
        <div className="relative flex flex-col md:flex-row items-center md:justify-between w-full mb-12" data-aos="fade-up">
          <div className="hidden md:block w-[45%] text-right pr-lg">
            <div className="font-label-md text-label-md text-primary uppercase tracking-wider mb-1">May 2026 - Present</div>
          </div>
          <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-container border-2 border-primary rounded-full z-10 shadow-[0_0_15px_rgba(255,218,185,0.8)]"></div>
          <div className="w-full pl-16 md:pl-0 md:w-[45%] md:text-left text-left">
            <div className="md:hidden font-label-md text-label-md text-primary uppercase tracking-wider mb-1">May 2026 - Present</div>
            <div className="bg-surface/80 dark:bg-[#2B1A17]/80 backdrop-blur-md p-6 rounded-xl shadow-sm border border-secondary/10 hover:shadow-md transition-shadow">
              <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface dark:text-inverse-on-surface mb-1">Full Stack Engineer Intern</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-secondary-fixed mb-4 font-bold">ThinkNEXT</p>
              <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-secondary-fixed leading-relaxed">
                Developing robust full-stack applications focusing on performance and user experience. Collaborating with cross-functional teams to deliver scalable solutions.
              </p>
            </div>
          </div>
        </div>
        {/* Timeline Item 2 */}
        <div className="relative flex flex-col md:flex-row-reverse items-center md:justify-between w-full mb-12" data-aos="fade-up" data-aos-delay="100">
          <div className="hidden md:block w-[45%] text-left pl-lg">
            <div className="font-label-md text-label-md text-secondary dark:text-secondary-fixed uppercase tracking-wider mb-1">Status: Completed</div>
          </div>
          <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-surface dark:bg-inverse-surface border-2 border-secondary rounded-full z-10"></div>
          <div className="w-full pl-16 md:pl-0 md:w-[45%] md:text-right text-left">
            <div className="md:hidden font-label-md text-label-md text-secondary dark:text-secondary-fixed uppercase tracking-wider mb-1">Status: Completed</div>
            <div className="bg-surface/80 dark:bg-[#2B1A17]/80 backdrop-blur-md p-6 rounded-xl shadow-sm border border-secondary/10 hover:shadow-md transition-shadow">
              <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface dark:text-inverse-on-surface mb-1">Open Source Contributor</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-secondary-fixed mb-4 font-bold">Fastify Ecosystem</p>
              <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-secondary-fixed leading-relaxed mb-4">
                Contributed to the Fastify ecosystem, improving validation processes and developer tooling.
              </p>
              <div className="inline-block bg-inverse-surface text-on-primary px-3 py-1 rounded-full font-code text-code text-[12px]">
                fastify-param-schema-validation
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
