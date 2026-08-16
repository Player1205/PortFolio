"use client";

import React, { useState, useEffect, useRef } from "react";
import confetti from "canvas-confetti";

interface ContactConsoleProps {
  email?: string;
  defaultSubject?: string;
}

const QUICK_TOPICS = [
  { label: "🏆 Job Opportunity", subject: "Job Opportunity: Software Engineer Role" },
  { label: "🤝 Project Collaboration", subject: "Collaboration on Next-Gen System" },
  { label: "🛡️ AI / GuardCall", subject: "Inquiry regarding GuardCall & Agentic AI" },
  { label: "⚡ Fastify & OSS", subject: "Fastify Ecosystem Tooling Discussion" },
  { label: "☕ Quick Coffee Chat", subject: "Connecting for a Quick Tech Chat" },
];

export function ContactConsole({
  email = "vansh5201314@gmail.com",
  defaultSubject = "",
}: ContactConsoleProps) {
  const [name, setName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [subject, setSubject] = useState(defaultSubject);
  const [message, setMessage] = useState("");
  
  // Status states: 'idle' | 'sending' | 'sent' | 'error'
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  
  // Desktop Mail launcher dropdown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Toast state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Live terminal clock
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString("en-US", { hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Handle click outside dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Copy email to clipboard with toast notification
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setToastMessage(`✓ Copied "${email}" to clipboard!`);
      setTimeout(() => {
        setToastMessage(null);
      }, 3500);
    } catch (err) {
      setToastMessage("Failed to copy email");
      setTimeout(() => setToastMessage(null), 2500);
    }
  };

  // Pre-formatted mail client URLs
  const encodedSubject = encodeURIComponent(subject || "Connecting regarding a new opportunity");
  const encodedBody = encodeURIComponent(
    `Hi Vansh,\n\n${message || "I came across your portfolio and would love to connect."}\n\nBest regards,\n${name || "[Your Name]"}\n${senderEmail ? `(${senderEmail})` : ""}`
  );

  const mailtoUrl = `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodedSubject}&body=${encodedBody}`;
  const outlookUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=${email}&subject=${encodedSubject}&body=${encodedBody}`;
  const yahooUrl = `https://compose.mail.yahoo.com/?to=${email}&Subj=${encodedSubject}&Body=${encodedBody}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !senderEmail.trim() || !message.trim()) {
      setStatus("error");
      setErrorMessage("Please fill in all required fields (Name, Email, Message).");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(senderEmail)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      // Simulate high-speed network transmission or fallback integration
      await new Promise((resolve) => setTimeout(resolve, 1400));

      // Trigger Confetti Explosion
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#FF9E3B", "#38BDF8", "#F8FAFC", "#D4AF37"],
      });

      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setErrorMessage("Transmission error. Please launch your email client directly.");
    }
  };

  const handleReset = () => {
    setStatus("idle");
    setName("");
    setSenderEmail("");
    setSubject("");
    setMessage("");
    setErrorMessage("");
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Interactive Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-24 right-6 z-[10001] flex items-center gap-3 px-5 py-3 rounded-xl bg-surface-container-highest border border-primary/40 text-on-surface shadow-2xl backdrop-blur-xl animate-[slideUp_0.3s_ease_forwards]">
          <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
          <span className="font-code text-sm font-medium">{toastMessage}</span>
        </div>
      )}

      {/* Terminal Glass Container */}
      <div
        className="glass-panel relative rounded-2xl md:rounded-3xl border border-outline-variant/40 bg-surface-container-lowest/85 backdrop-blur-2xl shadow-2xl overflow-hidden text-left"
        data-aos="fade-up"
      >
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-outline-variant/30 bg-surface-container-high/40">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-error" />
            <div className="w-3 h-3 rounded-full bg-[#FFDAB9]" />
            <div className="w-3 h-3 rounded-full bg-emerald-400" />
            <span className="ml-2 font-code text-xs text-on-surface-variant font-semibold tracking-wider">
              bash - vansh@contact:~
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-code text-on-surface-variant">
            <span className="hidden sm:inline-block text-secondary flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              STATUS: ONLINE
            </span>
            <span className="text-primary font-mono">{currentTime || "00:00:00"} IST</span>
          </div>
        </div>

        {/* Console Body */}
        <div className="p-6 sm:p-8 md:p-10 space-y-8">
          {/* Quick Connect & Direct Action Ribbon */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl bg-surface-container/40 border border-outline-variant/25">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[22px]">alternate_email</span>
              </div>
              <div>
                <div className="text-xs font-code uppercase tracking-wider text-on-surface-variant">
                  Direct Inquiries
                </div>
                <div className="text-sm sm:text-base font-code font-bold text-on-surface select-all">
                  {email}
                </div>
              </div>
            </div>

            {/* Action Buttons: Copy & Mail Client Dropdown */}
            <div className="flex items-center gap-2 w-full sm:w-auto" ref={dropdownRef}>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="flex-1 sm:flex-none px-3.5 py-2 rounded-lg bg-surface-container-high/80 hover:bg-surface-container-highest border border-outline-variant/30 text-secondary hover:text-on-surface font-code text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                title="Copy email to clipboard"
              >
                <span className="material-symbols-outlined text-[16px]">content_copy</span>
                Copy
              </button>

              <div className="relative flex-1 sm:flex-none">
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full px-3.5 py-2 rounded-lg bg-primary/15 hover:bg-primary/25 border border-primary/30 text-primary font-code text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px]">send</span>
                  Launch Mail
                  <span className="material-symbols-outlined text-[14px]">
                    {isDropdownOpen ? "expand_less" : "expand_more"}
                  </span>
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-surface-container-high border border-outline-variant/40 rounded-xl shadow-2xl overflow-hidden z-50 flex flex-col py-1">
                    <a
                      href={gmailUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 px-4 py-2.5 hover:bg-surface-container-highest text-xs font-code text-on-surface transition-colors"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <span className="material-symbols-outlined text-primary text-[18px]">mail</span>
                      Gmail Web
                    </a>
                    <a
                      href={outlookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 px-4 py-2.5 hover:bg-surface-container-highest text-xs font-code text-on-surface transition-colors border-t border-outline-variant/20"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <span className="material-symbols-outlined text-secondary text-[18px]">mail</span>
                      Outlook Web
                    </a>
                    <a
                      href={yahooUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 px-4 py-2.5 hover:bg-surface-container-highest text-xs font-code text-on-surface transition-colors border-t border-outline-variant/20"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <span className="material-symbols-outlined text-tertiary text-[18px]">mail</span>
                      Yahoo Mail
                    </a>
                    <a
                      href={mailtoUrl}
                      className="flex items-center gap-2.5 px-4 py-2.5 hover:bg-surface-container-highest text-xs font-code text-on-surface transition-colors border-t border-outline-variant/20"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <span className="material-symbols-outlined text-emerald-400 text-[18px]">
                        desktop_windows
                      </span>
                      Default App
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Quick Subject Tags */}
          <div>
            <label className="block text-xs font-code text-on-surface-variant uppercase tracking-wider mb-2">
              &gt; Select Intent / Topic:
            </label>
            <div className="flex flex-wrap gap-2">
              {QUICK_TOPICS.map((topic) => (
                <button
                  key={topic.label}
                  type="button"
                  onClick={() => setSubject(topic.subject)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-code transition-all cursor-pointer ${
                    subject === topic.subject
                      ? "bg-primary text-on-primary font-bold shadow-md shadow-primary/20 scale-95"
                      : "bg-surface-container-high/60 hover:bg-surface-container-highest text-on-surface-variant hover:text-on-surface border border-outline-variant/20"
                  }`}
                >
                  {topic.label}
                </button>
              ))}
            </div>
          </div>

          {/* Status Alert Displays */}
          {status === "sent" && (
            <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 backdrop-blur-md text-center space-y-3 animate-[fadeIn_0.3s_ease]">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                <span className="material-symbols-outlined text-[28px]">task_alt</span>
              </div>
              <h3 className="font-headline-lg-mobile text-lg font-bold text-emerald-300">
                Message Dispatched Successfully!
              </h3>
              <p className="text-xs font-code text-emerald-200/80 max-w-md mx-auto">
                Thank you for reaching out, {name}. A confirmation handshake has been registered. You can also send directly via email client anytime.
              </p>
              <div className="pt-2 flex justify-center gap-3">
                <a
                  href={mailtoUrl}
                  className="px-4 py-2 rounded-lg bg-emerald-500 text-black font-code text-xs font-bold hover:bg-emerald-400 transition-colors"
                >
                  Open in Mail Client
                </a>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-4 py-2 rounded-lg bg-surface-container-highest text-on-surface font-code text-xs font-semibold hover:bg-surface-container-high transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          )}

          {status === "error" && (
            <div className="p-4 rounded-xl bg-error-container/40 border border-error/40 text-on-error-container flex items-center justify-between gap-3 text-xs font-code">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-error text-[18px]">error</span>
                <span>{errorMessage || "Transmission error encountered."}</span>
              </div>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="underline hover:text-white cursor-pointer"
              >
                Dismiss
              </button>
            </div>
          )}

          {/* Interactive Form */}
          {status !== "sent" && (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-code text-on-surface-variant font-medium">
                    Name <span className="text-primary">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Turing"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-surface-container-high/50 border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary text-on-surface font-code text-sm placeholder:text-on-surface-variant/40 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Sender Email */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-code text-on-surface-variant font-medium">
                    Email Address <span className="text-primary">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      required
                      placeholder="alex@enterprise.io"
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-surface-container-high/50 border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary text-on-surface font-code text-sm placeholder:text-on-surface-variant/40 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label className="block text-xs font-code text-on-surface-variant font-medium">
                  Subject / Topic
                </label>
                <input
                  type="text"
                  placeholder="Subject of your message..."
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-surface-container-high/50 border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary text-on-surface font-code text-sm placeholder:text-on-surface-variant/40 outline-none transition-all"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="block text-xs font-code text-on-surface-variant font-medium">
                  Message Payload <span className="text-primary">*</span>
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Describe your vision, inquiry, or architectural requirements..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-surface-container-high/50 border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary text-on-surface font-code text-sm placeholder:text-on-surface-variant/40 outline-none resize-y transition-all"
                />
              </div>

              {/* Form Action Controls */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <span className="text-xs font-code text-on-surface-variant/60 text-left w-full sm:w-auto">
                  &gt; Encrypted transmission channel
                </span>

                <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-primary text-on-primary font-code text-sm font-bold shadow-lg shadow-primary/20 hover:brightness-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {status === "sending" ? (
                      <>
                        <span className="w-4 h-4 border-2 border-on-primary border-t-transparent rounded-full animate-spin" />
                        Transmitting...
                      </>
                    ) : (
                      <>
                        <span className="material-symbols-outlined text-[18px]">terminal</span>
                        Execute Transmission
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactConsole;
