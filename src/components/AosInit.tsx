"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function AosInit() {
  useEffect(() => {
    AOS.init({
      once: true,
      easing: "ease-out-cubic",
      offset: 50,
      duration: 500,
    });
  }, []);

  return null;
}
