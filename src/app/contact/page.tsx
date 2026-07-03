import { EmailButton } from "@/components/SiteComponents";

export default function Contact() {
  return (
    <main className="flex-grow pt-[104px] pb-24 md:pb-12 px-4 md:px-16 w-full max-w-7xl mx-auto flex flex-col gap-12">
      <div className="glass-card bg-surface-container dark:bg-inverse-surface/60 border border-outline-variant/30 dark:border-white/10 rounded-2xl p-6 md:p-12 w-full max-w-2xl text-left shadow-lg mx-auto" data-aos="fade-up">
        <div className="w-16 h-16 rounded-full bg-primary-container flex items-center justify-center mb-6 text-primary">
          <span className="material-symbols-outlined text-3xl">mail</span>
        </div>
        <h1 className="font-headline-xl text-[36px] leading-[44px] md:text-headline-xl text-on-surface dark:text-inverse-on-surface mb-6">Let&apos;s Connect</h1>
        <p className="font-body-md text-body-md text-on-surface-variant dark:text-secondary-fixed mb-8">
          I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your visions.
        </p>
        <div className="flex flex-col items-start gap-4 w-full">
          <EmailButton email="vansh5201314@gmail.com" />
          <div className="flex flex-col sm:flex-row items-start gap-4 w-full justify-start">
            <a href="https://github.com/Player1205" target="_blank" rel="noopener noreferrer" className="magnetic-btn font-label-md text-label-md px-8 py-4 rounded-lg border-2 border-outline-variant text-secondary dark:text-secondary-fixed hover:border-outline hover:text-on-surface dark:text-inverse-on-surface transition-colors inline-flex items-center justify-center gap-2 text-lg w-full sm:w-auto">
              <span className="material-symbols-outlined">code</span>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/vanshrana8165a6323" target="_blank" rel="noopener noreferrer" className="magnetic-btn font-label-md text-label-md px-8 py-4 rounded-lg border-2 border-outline-variant text-secondary dark:text-secondary-fixed hover:border-outline hover:text-on-surface dark:text-inverse-on-surface transition-colors inline-flex items-center justify-center gap-2 text-lg w-full sm:w-auto">
              <span className="material-symbols-outlined">work</span>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
