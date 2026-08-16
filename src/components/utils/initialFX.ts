import gsap from "gsap";
import { smoother } from "../Navbar";
import { SplitText } from "./splitTextHelper";

export function initialFX() {
  if (typeof window === "undefined") return;

  document.body.style.overflowY = "auto";
  if (smoother) {
    smoother.paused(false);
  }

  const mainEl = document.querySelector("main") || document.querySelector(".container-main");
  if (mainEl) {
    mainEl.classList.add("main-active");
  }

  gsap.to("body", {
    backgroundColor: "#0a0e17",
    duration: 0.5,
    delay: 0.2,
  });

  try {
    const landingText = new SplitText(
      [".landing-info h3", ".landing-intro h2", ".landing-intro h1"].join(", "),
      {
        type: "chars,lines",
        linesClass: "split-line",
      }
    );

    if (landingText.chars.length > 0) {
      gsap.fromTo(
        landingText.chars,
        { opacity: 0, y: 80, filter: "blur(5px)" },
        {
          opacity: 1,
          duration: 1.2,
          filter: "blur(0px)",
          ease: "power3.inOut",
          y: 0,
          stagger: 0.025,
          delay: 0.3,
        }
      );
    }

    let TextProps = { type: "chars,lines", linesClass: "split-h2" };

    const landingText2 = new SplitText(".landing-h2-info", TextProps);
    if (landingText2.chars.length > 0) {
      gsap.fromTo(
        landingText2.chars,
        { opacity: 0, y: 80, filter: "blur(5px)" },
        {
          opacity: 1,
          duration: 1.2,
          filter: "blur(0px)",
          ease: "power3.inOut",
          y: 0,
          stagger: 0.025,
          delay: 0.3,
        }
      );
    }

    gsap.fromTo(
      ".landing-info-h2",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        duration: 1.2,
        ease: "power1.inOut",
        y: 0,
        delay: 0.8,
      }
    );

    gsap.fromTo(
      [".header", ".icons-section", ".nav-fade"],
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.2,
        ease: "power1.inOut",
        delay: 0.1,
      }
    );

    const landingText3 = new SplitText(".landing-h2-info-1", TextProps);
    const landingText4 = new SplitText(".landing-h2-1", TextProps);
    const landingText5 = new SplitText(".landing-h2-2", TextProps);

    LoopText(landingText2, landingText3);
    LoopText(landingText4, landingText5);
  } catch (err) {
    console.warn("initialFX animation warning:", err);
  }
}

function LoopText(Text1: SplitText, Text2: SplitText) {
  if (!Text1.chars.length || !Text2.chars.length) return;

  const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
  const delay = 4;
  const delay2 = delay * 2 + 1;

  tl.fromTo(
    Text2.chars,
    { opacity: 0, y: 80 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power3.inOut",
      y: 0,
      stagger: 0.1,
      delay: delay,
    },
    0
  )
    .fromTo(
      Text1.chars,
      { opacity: 1, y: 0 },
      {
        opacity: 0,
        duration: 1.2,
        ease: "power3.inOut",
        y: -80,
        stagger: 0.1,
        delay: delay,
      },
      0
    )
    .to(
      Text2.chars,
      {
        opacity: 0,
        duration: 1.2,
        ease: "power3.inOut",
        y: -80,
        stagger: 0.1,
        delay: delay2,
      },
      0
    )
    .to(
      Text1.chars,
      {
        opacity: 1,
        duration: 1.2,
        ease: "power3.inOut",
        y: 0,
        stagger: 0.1,
        delay: delay2,
      },
      0
    );
}

export default initialFX;
