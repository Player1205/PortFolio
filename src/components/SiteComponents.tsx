"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function CustomCursor() {
  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor") as HTMLElement;
    const follower = document.querySelector(".custom-cursor-follower") as HTMLElement;
    if (!cursor || !follower) return;

    let mouseX = -100,
      mouseY = -100;
    let followerX = -100,
      followerY = -100;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;
    };

    const animateFollower = () => {
      followerX += (mouseX - followerX) * 0.15;
      followerY += (mouseY - followerY) * 0.15;
      follower.style.left = `${followerX}px`;
      follower.style.top = `${followerY}px`;
      requestAnimationFrame(animateFollower);
    };

    document.addEventListener("mousemove", onMouseMove);
    const animId = requestAnimationFrame(animateFollower);

    // Hover effect
    const interactiveElements = document.querySelectorAll("a, button, .magnetic-btn");
    const onMouseEnter = () => {
      cursor.classList.add("hovering");
      follower.classList.add("hovering");
    };
    const onMouseLeave = (e: Event) => {
      cursor.classList.remove("hovering");
      follower.classList.remove("hovering");
      (e.target as HTMLElement).style.transform = "";
    };
    const onInteractiveMove = (e: Event) => {
      const el = e.target as HTMLElement;
      if (el.classList.contains("magnetic-btn")) {
        const mouseEvent = e as unknown as MouseEvent;
        const rect = el.getBoundingClientRect();
        const x = mouseEvent.clientX - rect.left - rect.width / 2;
        const y = mouseEvent.clientY - rect.top - rect.height / 2;
        el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
      }
    };

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnter);
      el.addEventListener("mouseleave", onMouseLeave);
      el.addEventListener("mousemove", onInteractiveMove);
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animId);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnter);
        el.removeEventListener("mouseleave", onMouseLeave);
        el.removeEventListener("mousemove", onInteractiveMove);
      });
    };
  }, []);

  return (
    <>
      <div className="custom-cursor fixed top-0 left-0 w-2 h-2 bg-amber-400 rounded-full pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2 transition-[width,height] duration-200 shadow-[0_0_10px_#FF9E3B]"></div>
      <div className="custom-cursor-follower fixed top-0 left-0 w-8 h-8 border border-amber-400/50 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-150 ease-out"></div>
    </>
  );
}

export function SplashScreen() {
  const [show, setShow] = useState(true);
  const [slideUp, setSlideUp] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Vansh Rana — System Architect";

  useEffect(() => {
    const hasSeenSplash = sessionStorage.getItem("hasSeenSplash");
    if (!hasSeenSplash) {
      document.body.classList.add("no-scroll");

      let index = 0;
      const typingInterval = setInterval(() => {
        if (index < fullText.length) {
          setDisplayedText(fullText.slice(0, index + 1));
          index++;
        } else {
          clearInterval(typingInterval);
        }
      }, 45);

      const timer1 = setTimeout(() => {
        setSlideUp(true);
        sessionStorage.setItem("hasSeenSplash", "true");
        document.body.classList.remove("no-scroll");

        setTimeout(() => setShow(false), 800);
      }, 2600);

      return () => {
        clearInterval(typingInterval);
        clearTimeout(timer1);
        document.body.classList.remove("no-scroll");
      };
    } else {
      setShow(false);
    }
  }, []);

  if (!show) return null;

  return (
    <div
      id="splash-screen"
      className={`fixed inset-0 bg-[#07090E] z-[9999] flex flex-col justify-center items-center transition-transform duration-[800ms] ease-[cubic-bezier(0.77,0,0.175,1)] ${
        slideUp ? "-translate-y-full" : ""
      }`}
    >
      <div className="relative px-6 py-4 text-center flex flex-col items-center max-w-[92vw] mx-auto">
        {/* Glow backdrop */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-sky-500/20 blur-3xl rounded-full opacity-60 pointer-events-none animate-pulse" />

        <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-6 shadow-[0_0_30px_rgba(255,158,59,0.3)] animate-pulse">
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="4 17 10 11 4 5"></polyline>
            <line x1="12" y1="19" x2="20" y2="19"></line>
          </svg>
        </div>

        <h1 className="relative font-mono text-2xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-amber-100 tracking-tight leading-tight py-2">
          {displayedText}
          <span className="inline-block w-[3px] md:w-[4px] h-[0.85em] bg-amber-400 ml-2 align-baseline animate-[blink_0.8s_infinite] shadow-[0_0_12px_#FF9E3B]" />
        </h1>

        <p className="mt-4 text-xs md:text-sm font-mono tracking-[0.25em] text-slate-400 uppercase opacity-90">
          Precision Systems · High-Throughput Architectures
        </p>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `,
        }}
      />
    </div>
  );
}

export function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "What I Do", href: "#what-i-do" },
    { name: "Highlights", href: "#achievements" },
    { name: "3D Skills", href: "#skills" },
    { name: "Projects", href: "#work" },
    { name: "Journey", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  // Active section scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "what-i-do", "achievements", "skills", "work", "experience", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-[#07090E]/85 backdrop-blur-xl border-b border-slate-800/80 transition-colors duration-500">
        <div className="flex justify-between items-center w-full px-4 md:px-12 py-3.5 max-w-7xl mx-auto">
          {/* Brand Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 font-mono text-lg font-bold text-slate-100 hover:text-amber-400 transition-colors group"
          >
            <span className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 text-sm font-black group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(255,158,59,0.2)]">
              VR
            </span>
            <span className="tracking-tight">
              Vansh<span className="text-amber-400">.dev</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 font-mono text-xs font-semibold">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "text-amber-400 bg-amber-500/10 border border-amber-500/20 shadow-sm"
                      : "text-slate-400 hover:text-slate-100 hover:bg-slate-900/60"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Right Action */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="/assets/resume/Vansh_Rana_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 font-mono text-xs font-bold px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 hover:brightness-110 transition-all shadow-[0_0_15px_rgba(255,158,59,0.2)]"
            >
              <span>Resume</span>
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setDrawerOpen(true)}
              className="lg:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-amber-400 transition-colors flex items-center justify-center"
              aria-label="Open menu"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-[55] transition-opacity duration-300 ${
          drawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setDrawerOpen(false)}
      />
      <div
        className={`fixed top-0 right-0 h-full w-72 z-[60] bg-[#0A0E18] border-l border-slate-800 shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800">
          <div className="flex items-center gap-2 font-mono text-sm font-bold text-slate-100">
            <span className="w-6 h-6 rounded bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs">
              VR
            </span>
            <span>Navigation</span>
          </div>
          <button
            onClick={() => setDrawerOpen(false)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <nav className="flex flex-col gap-1 px-4 py-6 font-mono text-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setDrawerOpen(false)}
              className="px-4 py-3 rounded-xl transition-all duration-200 flex items-center justify-between text-slate-300 hover:text-amber-400 hover:bg-slate-900"
            >
              <span>{link.name}</span>
              <svg className="w-4 h-4 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </a>
          ))}
        </nav>
        <div className="mt-auto px-4 pb-8">
          <a
            href="/assets/resume/Vansh_Rana_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center font-mono text-xs font-bold px-4 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 shadow-md"
          >
            Download Resume
          </a>
        </div>
      </div>
    </>
  );
}

export function Footer() {
  return (
    <>
      <footer className="w-full py-10 border-t border-slate-800/80 bg-[#07090E]/90 backdrop-blur-md mt-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-4 md:px-12 max-w-7xl mx-auto gap-6">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <div className="font-mono text-xs text-slate-400">
              © 2026 <span className="text-slate-200 font-bold">Vansh Rana</span>. Architected with Precision.
            </div>
          </div>
          <div className="flex items-center gap-6 font-mono text-xs text-slate-400">
            <a
              className="hover:text-amber-400 transition-colors"
              href="https://github.com/Player1205"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              className="hover:text-amber-400 transition-colors"
              href="https://www.linkedin.com/in/vanshrana8165a6323"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="hover:text-amber-400 transition-colors"
              href="https://x.com/thecapman_life"
              target="_blank"
              rel="noopener noreferrer"
            >
              X (Twitter)
            </a>
            <a className="hover:text-amber-400 transition-colors" href="#contact">
              Direct Contact
            </a>
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Floating Dock Navigation */}
      <nav
        id="mobile-bottom-nav"
        className="md:hidden fixed bottom-3 left-4 right-4 z-50 bg-[#0A0E18]/90 backdrop-blur-xl border border-slate-800/90 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div className="flex items-center justify-around py-2 px-2 max-w-md mx-auto font-mono text-[10px]">
          <a
            href="#home"
            className="flex flex-col items-center gap-1 px-3 py-1.5 text-slate-400 hover:text-amber-400 transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            <span>Home</span>
          </a>
          <a
            href="#skills"
            className="flex flex-col items-center gap-1 px-3 py-1.5 text-slate-400 hover:text-amber-400 transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polygon points="10 8 16 12 10 16 10 8"></polygon>
            </svg>
            <span>3D Skills</span>
          </a>
          <a
            href="#work"
            className="flex flex-col items-center gap-1 px-3 py-1.5 text-slate-400 hover:text-amber-400 transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
            <span>Work</span>
          </a>
          <a
            href="#experience"
            className="flex flex-col items-center gap-1 px-3 py-1.5 text-slate-400 hover:text-amber-400 transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="4"></circle>
              <line x1="1.05" y1="12" x2="7" y2="12"></line>
              <line x1="17.01" y1="12" x2="22.96" y2="12"></line>
            </svg>
            <span>Journey</span>
          </a>
          <a
            href="#contact"
            className="flex flex-col items-center gap-1 px-3 py-1.5 text-slate-400 hover:text-amber-400 transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <span>Contact</span>
          </a>
        </div>
      </nav>
    </>
  );
}

export function EmailButton({ email }: { email: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const subjectText = "Connecting regarding a new opportunity";
  const bodyText =
    "Hi Vansh,\n\nI came across your portfolio and would love to discuss a potential collaboration.\n\nBest regards,\n[Your Name]";

  const subject = encodeURIComponent(subjectText);
  const body = encodeURIComponent(bodyText);

  const mailtoUrl = `mailto:${email}?subject=${subject}&body=${body}`;
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
  const outlookUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=${email}&subject=${subject}&body=${body}`;
  const yahooUrl = `https://compose.mail.yahoo.com/?to=${email}&Subj=${subject}&Body=${body}`;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    if (window.innerWidth < 768) {
      return;
    }
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-full sm:w-auto" ref={dropdownRef}>
      <a
        href={mailtoUrl}
        onClick={handleClick}
        className="magnetic-btn font-mono text-xs sm:text-sm px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 hover:brightness-110 font-bold shadow-[0_0_20px_rgba(255,158,59,0.3)] inline-flex items-center justify-center gap-2 w-full sm:w-auto transition-all"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="22" y1="2" x2="11" y2="13"></line>
          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
        </svg>
        <span>{email}</span>
      </a>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-full min-w-[200px] bg-[#0E131F] border border-slate-800 rounded-xl shadow-2xl overflow-hidden z-50 flex flex-col font-mono text-xs">
          <a
            href={gmailUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-3 hover:bg-slate-800/80 transition-colors text-slate-200"
            onClick={() => setIsOpen(false)}
          >
            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            <span>Gmail Web</span>
          </a>
          <a
            href={outlookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-3 hover:bg-slate-800/80 transition-colors text-slate-200 border-t border-slate-800"
            onClick={() => setIsOpen(false)}
          >
            <span className="w-2 h-2 rounded-full bg-sky-400"></span>
            <span>Outlook Web</span>
          </a>
          <a
            href={yahooUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-3 hover:bg-slate-800/80 transition-colors text-slate-200 border-t border-slate-800"
            onClick={() => setIsOpen(false)}
          >
            <span className="w-2 h-2 rounded-full bg-purple-400"></span>
            <span>Yahoo Mail</span>
          </a>
          <a
            href={mailtoUrl}
            className="flex items-center gap-3 px-4 py-3 hover:bg-slate-800/80 transition-colors text-slate-200 border-t border-slate-800"
            onClick={() => setIsOpen(false)}
          >
            <span className="w-2 h-2 rounded-full bg-slate-400"></span>
            <span>Default App</span>
          </a>
        </div>
      )}
    </div>
  );
}
