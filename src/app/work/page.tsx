export default function Work() {
  return (
    <main className="flex-grow pt-[104px] pb-24 md:pb-12 px-4 md:px-16 w-full max-w-7xl mx-auto flex flex-col gap-12">
      {/* Header */}
      <header className="flex flex-col gap-base" data-aos="fade-up">
        <h1 className="font-headline-xl text-headline-xl text-on-surface dark:text-inverse-on-surface">Selected Work</h1>
        <p className="font-body-md text-body-md text-on-surface-variant dark:text-secondary-fixed max-w-2xl">
          A showcase of projects blending technical precision with high-end aesthetic design.
        </p>
      </header>
      
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {/* Project 1: ML-IPL RosterOptimiser */}
        <article className="tilt-card bg-surface-container-low dark:bg-[#201311]est dark:bg-[#1a0f0d] rounded-xl overflow-hidden border border-outline-variant/50 shadow-md flex flex-col h-full hover:border-primary/50 transition-all" data-aos="fade-up" data-aos-delay="100">
          <div className="h-48 bg-surface-container-highest dark:bg-[#3d2520] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
            <img alt="Data visualization" className="w-full h-full object-cover opacity-80 mix-blend-multiply transition-transform duration-500 group-hover:scale-105" data-alt="A highly detailed and minimalist data visualization dashboard displayed on a modern curved monitor. The screen shows complex futuristic line graphs and scatter plots glowing in subtle, warm peach and cream tones. The setting is a clean, modern high-end developer workspace illuminated by bright, soft white light. The overall aesthetic is clean, technical, yet approachable, perfectly embodying a sophisticated light-mode UI style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-uP8_8GUsLAN9HDy6rxgEtFZOSqwZOi1_d5Jj18LDM1qN8mA5BxR_7e11lC2ZRDMEGcNj0G5Eneh_EIS8y2DDfVc5Qsia1eUQDnC8i5Wk7L4YmJYURPjw8cYIc_1NdgNLFDEcZ-BgqtB37fdbegO4l0ZS42aJGfWlKsSLyPqvx6xhK-NKRRoagJtQvJbEJR9RP-5mG7msOuH5Oy4AcjNiNIEpX66kasLSLR6b2D6MUCoi4F8X3A87cAE3Bx8wMnHBs2mK9Cwn5Gk" />
            <div className="absolute top-4 right-md bg-surface/80 dark:bg-inverse-surface/80 backdrop-blur-md px-2 py-1 rounded font-code text-code text-secondary dark:text-secondary-fixed flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">code</span> Python
            </div>
          </div>
          <div className="p-6 flex flex-col flex-grow gap-4 bg-surface dark:bg-inverse-surface">
            <div className="flex items-start justify-between gap-2">
              <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface dark:text-inverse-on-surface">ML-IPL RosterOptimiser</h2>
              <div className="flex items-center gap-1 shrink-0">
                <a aria-label="GitHub" className="text-secondary dark:text-secondary-fixed hover:text-primary transition-colors p-1.5 rounded-lg hover:bg-primary-container/20" href="https://github.com/Player1205/ML-RosterOptimiser" target="_blank" rel="noopener noreferrer" title="GitHub">
                  <span className="material-symbols-outlined text-[20px]">code</span>
                </a>
                <button aria-label="Deployed Site" className="not-deployed-btn text-secondary dark:text-secondary-fixed hover:text-primary transition-colors p-1.5 rounded-lg hover:bg-primary-container/20" title="Live Demo">
                  <span className="material-symbols-outlined text-[20px]">rocket_launch</span>
                </button>
              </div>
            </div>
            <p className="font-label-md text-label-md text-on-surface-variant dark:text-secondary-fixed uppercase tracking-wider mb-1">Team: Apex Zero</p>
            <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-secondary-fixed flex-grow">
              An AI-driven IPL Roster Optimizer utilizing XGBoost and Random Forest algorithms to predict player performance and optimize auction strategies.
            </p>
            <div className="flex flex-wrap gap-1 mt-auto pt-4 border-t border-secondary/10">
              <span className="bg-primary-container/20 text-secondary dark:text-secondary-fixed px-2 py-1 rounded-full font-label-md text-label-md">XGBoost</span>
              <span className="bg-primary-container/20 text-secondary dark:text-secondary-fixed px-2 py-1 rounded-full font-label-md text-label-md">Random Forest</span>
              <span className="bg-primary-container/20 text-secondary dark:text-secondary-fixed px-2 py-1 rounded-full font-label-md text-label-md">Scikit-Learn</span>
            </div>
          </div>
        </article>

        {/* Project 2: CampusCoin */}
        <article className="tilt-card bg-surface-container-low dark:bg-[#201311]est dark:bg-[#1a0f0d] rounded-xl overflow-hidden border border-outline-variant/50 shadow-md flex flex-col h-full hover:border-primary/50 transition-all" data-aos="fade-up" data-aos-delay="200">
          <div className="h-48 bg-surface-container-highest dark:bg-[#3d2520] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-secondary/10 to-transparent"></div>
            <img alt="Decentralized network" className="w-full h-full object-cover opacity-80 mix-blend-multiply transition-transform duration-500 group-hover:scale-105" data-alt="An abstract representation of a decentralized digital network featuring floating, glowing glassmorphic orbs connected by delicate, warm-toned energetic threads. The background is a very light, airy off-white (#FFF5F0) suggesting an expansive, modern, clean environment. The lighting is bright and even, casting soft, diffused shadows that emphasize depth and a premium, minimalist high-tech aesthetic suitable for a modern web application portfolio." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnYLaCKXxu049I6mNJktHArWmSAnKBzHeSyoy1M0OLAftPkRiHAY8h9-iv0zYEspBenO3SvZUNW6Kd98TjcnTo7jQKeeFqw4Wq_PFn4-5KMiGkUvl-cgHPJwfJeNxQocUZNleqTxefI5Rn_JNc8G6e_65XQ19q5a_0kNy1cdKj3uNbVOIeV-S8qrE8_LmuIOTQYAraOCQ2bEBYAIgzHETTW7AM35MXWC1XT1hTlM1xR2TE1nfcrT3oSkaTGLC2WmYUYjpn9M91d4M" />
            <div className="absolute top-4 right-md bg-surface/80 dark:bg-inverse-surface/80 backdrop-blur-md px-2 py-1 rounded font-code text-code text-secondary dark:text-secondary-fixed flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">devices</span> PWA
            </div>
          </div>
          <div className="p-6 flex flex-col flex-grow gap-4 bg-surface dark:bg-inverse-surface">
            <div className="flex items-start justify-between gap-2">
              <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface dark:text-inverse-on-surface">CampusCoin</h2>
              <div className="flex items-center gap-1 shrink-0">
                <a aria-label="GitHub" className="text-secondary dark:text-secondary-fixed hover:text-primary transition-colors p-1.5 rounded-lg hover:bg-primary-container/20" href="https://github.com/Player1205/CampusCoin" target="_blank" rel="noopener noreferrer" title="GitHub">
                  <span className="material-symbols-outlined text-[20px]">code</span>
                </a>
                <button aria-label="Deployed Site" className="not-deployed-btn text-secondary dark:text-secondary-fixed hover:text-primary transition-colors p-1.5 rounded-lg hover:bg-primary-container/20" title="Live Demo">
                  <span className="material-symbols-outlined text-[20px]">rocket_launch</span>
                </button>
              </div>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-secondary-fixed flex-grow">
              A decentralized Progressive Web App (PWA) marketplace designed specifically for campus ecosystems, enabling secure peer-to-peer transactions.
            </p>
            <div className="flex flex-wrap gap-1 mt-auto pt-4 border-t border-secondary/10">
              <span className="bg-primary-container/20 text-secondary dark:text-secondary-fixed px-2 py-1 rounded-full font-label-md text-label-md">Web3</span>
              <span className="bg-primary-container/20 text-secondary dark:text-secondary-fixed px-2 py-1 rounded-full font-label-md text-label-md">React</span>
              <span className="bg-primary-container/20 text-secondary dark:text-secondary-fixed px-2 py-1 rounded-full font-label-md text-label-md">Solidity</span>
            </div>
          </div>
        </article>

        {/* Project 3: DataPassport */}
        <article className="tilt-card bg-surface-container-low dark:bg-[#201311]est dark:bg-[#1a0f0d] rounded-xl overflow-hidden border border-outline-variant/50 shadow-md flex flex-col h-full hover:border-primary/50 transition-all" data-aos="fade-up" data-aos-delay="300">
          <div className="h-48 bg-surface-container-highest dark:bg-[#3d2520] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-outline/10 to-transparent"></div>
            <img alt="Data security" className="w-full h-full object-cover opacity-80 mix-blend-multiply transition-transform duration-500 group-hover:scale-105" data-alt="A conceptual 3D render of a secure, transparent digital ledger taking the form of layered, frosted glass plates embedded with subtle glowing warm peach data nodes. The plates hover slightly above a pristine, smooth off-white surface, casting soft ambient shadows indicative of a light-mode glassmorphism style. The composition is highly structured, technical, and minimalist, conveying themes of Web3 integrity, security, and high-end modern developer aesthetics." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCHzO1IcqJYuX7RFnuCfk9VWTiaxpg0QvqFODaX1YB0Ji-jBppYYhFOeMlS1Vd3mGiC6mIt02XqEDr5gjNK_DO-E0bb2mZRGj0G6fCfoDWp9Rkny60CFaKnQpQzOBWlYJe3TeWh1rRCdG7Ayus8mMyrkOnhqLkP0gVvjaLoZnmJnz0B6Veu-6x7RNH1M9ezK9onmTvX1YPdJ54YyVown6Ib8Z39ZJvBFRTnOiI8ax2g0gXGSgmmQETd6bejBuL0VuoEMw3kHlt9I0" />
            <div className="absolute top-4 right-md bg-surface/80 dark:bg-inverse-surface/80 backdrop-blur-md px-2 py-1 rounded font-code text-code text-secondary dark:text-secondary-fixed flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">lock</span> Web3
            </div>
          </div>
          <div className="p-6 flex flex-col flex-grow gap-4 bg-surface dark:bg-inverse-surface">
            <div className="flex items-start justify-between gap-2">
              <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface dark:text-inverse-on-surface">DataPassport</h2>
              <div className="flex items-center gap-1 shrink-0">
                <a aria-label="GitHub" className="text-secondary dark:text-secondary-fixed hover:text-primary transition-colors p-1.5 rounded-lg hover:bg-primary-container/20" href="https://github.com/Player1205/DataPassport" target="_blank" rel="noopener noreferrer" title="GitHub">
                  <span className="material-symbols-outlined text-[20px]">code</span>
                </a>
                <a aria-label="Deployed Site" className="text-secondary dark:text-secondary-fixed hover:text-primary transition-colors p-1.5 rounded-lg hover:bg-primary-container/20" href="https://datapassport-frontend.netlify.app/" target="_blank" rel="noopener noreferrer" title="Live Demo">
                  <span className="material-symbols-outlined text-[20px]">rocket_launch</span>
                </a>
              </div>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-secondary-fixed flex-grow">
              A Web3 Data Integrity &amp; Provenance Ledger ensuring transparent, immutable records for sensitive data transactions across distributed networks.
            </p>
            <div className="flex flex-wrap gap-1 mt-auto pt-4 border-t border-secondary/10">
              <span className="bg-primary-container/20 text-secondary dark:text-secondary-fixed px-2 py-1 rounded-full font-label-md text-label-md">Blockchain</span>
              <span className="bg-primary-container/20 text-secondary dark:text-secondary-fixed px-2 py-1 rounded-full font-label-md text-label-md">IPFS</span>
              <span className="bg-primary-container/20 text-secondary dark:text-secondary-fixed px-2 py-1 rounded-full font-label-md text-label-md">Cryptography</span>
            </div>
          </div>
        </article>
      </div>

      {/* Animated Divider */}
      <div className="w-full flex justify-center py-12" data-aos="fade-up">
        <div className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse translate-x-1/2"></div>
        </div>
      </div>

      {/* GuardCall Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {/* Project 4: GuardCall */}
        <article className="tilt-card bg-surface-container-low dark:bg-[#201311]est dark:bg-[#1a0f0d] rounded-xl overflow-hidden border border-outline-variant/50 shadow-md flex flex-col h-full hover:border-primary/50 transition-all" data-aos="fade-up" data-aos-delay="100">
          <div className="h-48 bg-surface-container-highest dark:bg-[#3d2520] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-error/10 to-transparent"></div>
            <img alt="Real-time communication" className="w-full h-full object-cover opacity-80 mix-blend-multiply transition-transform duration-500 group-hover:scale-105" data-alt="A conceptual 3D render of a sleek, modern digital interface visualizing real-time audio waveforms morphing into text." src="/PortFolio/assets/guardcall.jpg" />
            <div className="absolute top-4 right-md bg-surface/80 dark:bg-inverse-surface/80 backdrop-blur-md px-2 py-1 rounded font-code text-code text-secondary dark:text-secondary-fixed flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">record_voice_over</span> AI Agent
            </div>
          </div>
          <div className="p-6 flex flex-col flex-grow gap-4 bg-surface dark:bg-inverse-surface">
            <div className="flex items-start justify-between gap-2">
              <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface dark:text-inverse-on-surface">GuardCall</h2>
              <div className="flex items-center gap-1 shrink-0">
                <a aria-label="GitHub" className="text-secondary dark:text-secondary-fixed hover:text-primary transition-colors p-1.5 rounded-lg hover:bg-primary-container/20" href="https://github.com/Player1205/GuardCall" target="_blank" rel="noopener noreferrer" title="GitHub">
                  <span className="material-symbols-outlined text-[20px]">code</span>
                </a>
                <a aria-label="Deployed Site" className="text-secondary dark:text-secondary-fixed hover:text-primary transition-colors p-1.5 rounded-lg hover:bg-primary-container/20" href="https://guardcall-three.vercel.app/" target="_blank" rel="noopener noreferrer" title="Live Demo">
                  <span className="material-symbols-outlined text-[20px]">rocket_launch</span>
                </a>
              </div>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-secondary-fixed flex-grow">
              An Agentic AI wiretap that intercepts scams in real-time. Powered by Groq & Deepgram, it detects extortion and provides live coaching to protect users.
            </p>
            <div className="flex flex-wrap gap-1 mt-auto pt-4 border-t border-secondary/10">
              <span className="bg-primary-container/20 text-secondary dark:text-secondary-fixed px-2 py-1 rounded-full font-label-md text-label-md">WebSockets</span>
              <span className="bg-primary-container/20 text-secondary dark:text-secondary-fixed px-2 py-1 rounded-full font-label-md text-label-md">Groq AI</span>
              <span className="bg-primary-container/20 text-secondary dark:text-secondary-fixed px-2 py-1 rounded-full font-label-md text-label-md">Deepgram</span>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
