"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function CustomCursor() {
  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor") as HTMLElement;
    const follower = document.querySelector(".custom-cursor-follower") as HTMLElement;
    if (!cursor || !follower) return;

    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = mouseX + "px";
      cursor.style.top = mouseY + "px";
    };

    const animateFollower = () => {
      followerX += (mouseX - followerX) * 0.15;
      followerY += (mouseY - followerY) * 0.15;
      follower.style.left = followerX + "px";
      follower.style.top = followerY + "px";
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
      <div className="custom-cursor fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2 transition-[width,height] duration-200 dark:bg-primary-fixed"></div>
      <div className="custom-cursor-follower fixed top-0 left-0 w-8 h-8 border-2 border-primary rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-150 ease-out transition-[width,height,background-color] dark:border-primary-fixed"></div>
    </>
  );
}

export function SplashScreen() {
  const [show, setShow] = useState(true);
  const [slideUp, setSlideUp] = useState(false);

  useEffect(() => {
    const hasSeenSplash = sessionStorage.getItem("hasSeenSplash");
    if (!hasSeenSplash) {
      document.body.classList.add("no-scroll");
      const timer1 = setTimeout(() => {
        setSlideUp(true);
        sessionStorage.setItem("hasSeenSplash", "true");
        document.body.classList.remove("no-scroll");
        
        setTimeout(() => setShow(false), 800);
      }, 2500);
      return () => {
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
      className={`fixed inset-0 bg-splash-bg z-[9999] flex justify-center items-center transition-transform duration-[800ms] ease-[cubic-bezier(0.77,0,0.175,1)] ${slideUp ? "-translate-y-full" : ""}`}
    >
      <h1 className="font-cursive italic text-headline-xl md:text-7xl text-splash-text splash-text-anim text-center px-4 max-w-[90vw] mx-auto flex flex-col items-center justify-center opacity-0 translate-y-5 animate-[splashFadeIn_1s_ease_forwards_0.5s]">
        Welcome To The Rana Portfolio
      </h1>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes splashFadeIn {
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const isDarkStored = localStorage.getItem("theme") === "dark";
    if (isDarkStored) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Work", href: "/work" },
    { name: "Experience", href: "/experience" },
    { name: "Skills", href: "/skills" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-surface/80 dark:bg-inverse-surface/80 backdrop-blur-xl bg-surface-container-low dark:bg-[#201311]/50 flat no shadows transition-colors duration-500">
        <div className="flex justify-between items-center w-full px-4 md:px-16 py-4 max-w-7xl mx-auto">
          <div className="font-headline-lg-mobile text-[22px] sm:text-headline-lg-mobile font-bold text-on-surface dark:text-inverse-on-surface shrink-0">
            Vansh Rana
          </div>
          <div className="hidden md:flex items-center gap-6 font-label-md text-label-md">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`${
                  pathname === link.href || (pathname === '/' && link.href === '/')
                    ? "text-primary dark:text-primary-fixed-dim"
                    : "text-secondary dark:text-secondary-fixed-dim hover:text-on-surface dark:hover:text-on-secondary-fixed"
                } border-b-2 border-primary dark:border-primary-fixed-dim pb-1 hover:bg-primary-container/20 dark:hover:bg-primary-fixed-dim/10 transition-all duration-300 px-3 py-2 rounded-lg ${pathname === link.href ? "scale-95" : ""}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            <a href="/assets/resume/Vansh_Rana_Resume.pdf" target="_blank" className="hidden sm:inline-block font-label-md text-label-md px-4 py-2 rounded-lg bg-on-surface text-surface dark:bg-primary-fixed-dim dark:text-on-primary-fixed hover:opacity-90 transition-opacity">
              Resume
            </a>
            <button onClick={toggleTheme} className="p-2 rounded-full text-secondary dark:text-secondary-fixed hover:bg-surface-container-highest dark:bg-[#3d2520] transition-colors flex items-center justify-center">
              <span className="material-symbols-outlined">{isDark ? "light_mode" : "dark_mode"}</span>
            </button>
            <button onClick={() => setDrawerOpen(true)} className="md:hidden p-2 rounded-full text-secondary dark:text-secondary-fixed hover:bg-surface-container-highest dark:bg-[#3d2520] transition-colors flex items-center justify-center">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 bg-black/50 z-[55] transition-opacity duration-300 ${drawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`} onClick={() => setDrawerOpen(false)}></div>
      <div className={`fixed top-0 right-0 h-full w-72 z-[60] bg-surface dark:bg-inverse-surface shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex items-center justify-between px-6 py-5 border-b border-outline-variant/20">
          <span className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-on-surface dark:text-inverse-on-surface">Menu</span>
          <button onClick={() => setDrawerOpen(false)} className="p-2 rounded-full text-secondary dark:text-secondary-fixed hover:bg-surface-container-highest dark:bg-[#3d2520] transition-colors">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <nav className="flex flex-col gap-2 px-4 py-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setDrawerOpen(false)}
              className={`${
                pathname === link.href ? "text-primary dark:text-primary-fixed-dim bg-primary-container/20 dark:bg-primary-fixed-dim/10" : "text-on-surface dark:text-inverse-on-surface hover:bg-surface-container-highest dark:hover:bg-[#3d2520]"
              } font-label-md text-label-md px-4 py-3 rounded-lg transition-all duration-200`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="mt-auto px-4 pb-6">
          <a href="/assets/resume/Vansh_Rana_Resume.pdf" target="_blank" className="block text-center font-label-md text-label-md px-4 py-3 rounded-lg bg-on-surface text-surface dark:bg-primary-fixed-dim dark:text-on-primary-fixed hover:opacity-90 transition-opacity">Resume</a>
        </div>
      </div>
    </>
  );
}

export function Footer() {
  const pathname = usePathname();
  
  return (
    <>
      <footer className="w-full py-12 border-t border-secondary/10 dark:border-secondary-fixed-dim/10 bg-surface dark:bg-inverse-surface flat no shadows transition-colors duration-500 mt-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-4 md:px-16 max-w-7xl mx-auto gap-8">
          <div className="font-label-md text-label-md font-bold text-on-surface dark:text-inverse-on-surface">
            © 2026 Vansh Rana. Built with Precision.
          </div>
          <div className="flex items-center gap-6 font-body-sm text-body-sm">
            <a className="text-secondary dark:text-secondary-fixed hover:text-primary transition-colors" href="https://github.com/Player1205" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="text-secondary dark:text-secondary-fixed hover:text-primary transition-colors" href="https://www.linkedin.com/in/vanshrana8165a6323" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="text-on-surface-variant dark:text-secondary-fixed-dim hover:text-primary dark:hover:text-primary-fixed-dim transition-colors transition-opacity duration-200" href="https://x.com/thecapman_life" target="_blank" rel="noopener noreferrer">X</a>
            <Link className="text-on-surface-variant dark:text-secondary-fixed-dim hover:text-primary dark:hover:text-primary-fixed-dim transition-colors transition-opacity duration-200" href="/contact">Email</Link>
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Nav */}
      <nav id="mobile-bottom-nav" className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-surface/95 dark:bg-inverse-surface/95 backdrop-blur-xl border-t border-outline-variant/30 dark:border-white/10" style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
        <div className="flex items-center justify-between py-2 px-3 sm:px-6 max-w-lg mx-auto">
          <Link href="/" className={`flex flex-col items-center gap-0.5 min-w-0 px-1 py-1.5 rounded-xl transition-all duration-200 ${pathname === '/' ? 'text-primary dark:text-primary-fixed-dim bg-primary-container/20 dark:bg-primary-fixed-dim/10' : 'text-on-surface-variant dark:text-secondary-fixed hover:text-primary dark:hover:text-primary-fixed-dim'}`}>
            <span className="material-symbols-outlined text-[22px]">home</span>
            <span className="text-[10px] font-bold tracking-wide whitespace-nowrap">Home</span>
          </Link>
          <Link href="/work" className={`flex flex-col items-center gap-0.5 min-w-0 px-1 py-1.5 rounded-xl transition-all duration-200 ${pathname === '/work' ? 'text-primary dark:text-primary-fixed-dim bg-primary-container/20 dark:bg-primary-fixed-dim/10' : 'text-on-surface-variant dark:text-secondary-fixed hover:text-primary dark:hover:text-primary-fixed-dim'}`}>
            <span className="material-symbols-outlined text-[22px]">work</span>
            <span className="text-[10px] font-medium tracking-wide whitespace-nowrap">Work</span>
          </Link>
          <Link href="/experience" className={`flex flex-col items-center gap-0.5 min-w-0 px-1 py-1.5 rounded-xl transition-all duration-200 ${pathname === '/experience' ? 'text-primary dark:text-primary-fixed-dim bg-primary-container/20 dark:bg-primary-fixed-dim/10' : 'text-on-surface-variant dark:text-secondary-fixed hover:text-primary dark:hover:text-primary-fixed-dim'}`}>
            <span className="material-symbols-outlined text-[22px]">timeline</span>
            <span className="text-[10px] font-medium tracking-wide whitespace-nowrap">Exp</span>
          </Link>
          <Link href="/skills" className={`flex flex-col items-center gap-0.5 min-w-0 px-1 py-1.5 rounded-xl transition-all duration-200 ${pathname === '/skills' ? 'text-primary dark:text-primary-fixed-dim bg-primary-container/20 dark:bg-primary-fixed-dim/10' : 'text-on-surface-variant dark:text-secondary-fixed hover:text-primary dark:hover:text-primary-fixed-dim'}`}>
            <span className="material-symbols-outlined text-[22px]">code</span>
            <span className="text-[10px] font-medium tracking-wide whitespace-nowrap">Skills</span>
          </Link>
          <Link href="/contact" className={`flex flex-col items-center gap-0.5 min-w-0 px-1 py-1.5 rounded-xl transition-all duration-200 ${pathname === '/contact' ? 'text-primary dark:text-primary-fixed-dim bg-primary-container/20 dark:bg-primary-fixed-dim/10' : 'text-on-surface-variant dark:text-secondary-fixed hover:text-primary dark:hover:text-primary-fixed-dim'}`}>
            <span className="material-symbols-outlined text-[22px]">mail</span>
            <span className="text-[10px] font-medium tracking-wide whitespace-nowrap">Contact</span>
          </Link>
        </div>
      </nav>
    </>
  );
}

export function EmailButton({ email }: { email: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const subjectText = "Connecting regarding a new opportunity";
  const bodyText = "Hi Vansh,\n\nI came across your portfolio and would love to discuss a potential collaboration.\n\nBest regards,\n[Your Name]";
  
  const subject = encodeURIComponent(subjectText);
  const body = encodeURIComponent(bodyText);

  // URLs for different clients
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
      return; // Mobile: Let default mailto: action happen
    }
    e.preventDefault(); // Desktop: Show dropdown
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-full sm:w-auto" ref={dropdownRef}>
      <a 
        href={mailtoUrl}
        onClick={handleClick}
        className="magnetic-btn font-label-md text-label-md px-8 py-4 rounded-lg bg-primary text-on-primary hover:opacity-90 transition-opacity font-bold shadow-sm inline-flex items-center justify-center gap-2 text-xl w-full sm:w-auto"
      >
        <span className="material-symbols-outlined">send</span>
        {email}
      </a>
      
      {/* Dropdown for Desktop */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-full min-w-[200px] bg-surface-container-high dark:bg-[#2A1B18] border border-outline-variant/50 rounded-xl shadow-xl overflow-hidden z-50 flex flex-col animate-[splashFadeIn_0.2s_ease_forwards]">
          <a href={gmailUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 hover:bg-surface-variant/50 transition-colors text-on-surface dark:text-inverse-on-surface" onClick={() => setIsOpen(false)}>
            <span className="material-symbols-outlined text-primary">mail</span>
            Gmail
          </a>
          <a href={outlookUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 hover:bg-surface-variant/50 transition-colors text-on-surface dark:text-inverse-on-surface border-t border-outline-variant/20" onClick={() => setIsOpen(false)}>
            <span className="material-symbols-outlined text-[#0078D4]">mail</span>
            Outlook
          </a>
          <a href={yahooUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 hover:bg-surface-variant/50 transition-colors text-on-surface dark:text-inverse-on-surface border-t border-outline-variant/20" onClick={() => setIsOpen(false)}>
            <span className="material-symbols-outlined text-[#6001D2]">mail</span>
            Yahoo Mail
          </a>
          <a href={mailtoUrl} className="flex items-center gap-3 px-4 py-3 hover:bg-surface-variant/50 transition-colors text-on-surface dark:text-inverse-on-surface border-t border-outline-variant/20" onClick={() => setIsOpen(false)}>
            <span className="material-symbols-outlined text-secondary">desktop_windows</span>
            Default App
          </a>
        </div>
      )}
    </div>
  );
}
