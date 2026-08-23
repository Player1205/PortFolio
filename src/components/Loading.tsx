"use client";

import { useEffect, useState, useCallback } from "react";
import "./styles/Loading.css";
import { useLoading } from "../context/LoadingProvider";
import Marquee from "react-fast-marquee";
import initialFX from "./utils/initialFX";

const Loading = ({ percent }: { percent: number }) => {
  const { setIsLoading } = useLoading();
  const [loaded, setLoaded] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleEnter = useCallback(() => {
    if (clicked) return;
    setClicked(true);
    setTimeout(() => {
      try {
        initialFX();
      } catch (err) {
        console.warn("initialFX error:", err);
      }
      setIsLoading(false);
    }, 700);
  }, [clicked, setIsLoading]);

  useEffect(() => {
    if (percent >= 100) {
      setLoaded(true);
    }
    if (percent >= 100 && !clicked) {
      const enterTimer = setTimeout(() => {
        handleEnter();
      }, 800);
      return () => clearTimeout(enterTimer);
    }
  }, [percent, clicked, handleEnter]);

  // Failsafe timeout: If 8 seconds pass, forcefully resolve the loader
  // This prevents mobile users from getting stuck at 0% or 65% due to WebGL/Network failures
  useEffect(() => {
    const failsafe = setTimeout(() => {
      setLoaded(true);
      handleEnter();
    }, 8000);
    return () => clearTimeout(failsafe);
  }, [handleEnter]);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  }

  return (
    <>
      <div className="loading-header">
        <a href="/#" className="loader-title" data-cursor="disable">
          VR
        </a>
        <div className={`loaderGame ${clicked ? "loader-out" : ""}`}>
          <div className="loaderGame-container">
            <div className="loaderGame-in">
              {[...Array(27)].map((_, index) => (
                <div className="loaderGame-line" key={index}></div>
              ))}
            </div>
            <div className="loaderGame-ball"></div>
          </div>
        </div>
      </div>
      <div className="loading-screen" style={{ pointerEvents: clicked ? "none" : "auto" }}>
        <div className="loading-marquee">
          <Marquee>
            <span> System Architect</span> <span>Software Engineer</span>
            <span> Distributed Systems</span> <span>3D Web Engineer</span>
          </Marquee>
        </div>
        <div
          className={`loading-wrap ${clicked ? "loading-clicked" : ""}`}
          onMouseMove={(e) => handleMouseMove(e)}
          onClick={() => {
            if (loaded) handleEnter();
          }}
          style={{ cursor: loaded ? "pointer" : "default" }}
        >
          <div className="loading-hover"></div>
          <div className={`loading-button ${loaded ? "loading-complete" : ""}`}>
            <div className="loading-container">
              <div className="loading-content">
                <div className="loading-content-in">
                  Loading <span>{Math.min(Math.round(percent), 100)}%</span>
                </div>
              </div>
              <div className="loading-box"></div>
            </div>
            <div className="loading-content2">
              <span>Welcome</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;

export const setProgress = (setLoading: (value: number) => void) => {
  let percent: number = 0;

  let interval = setInterval(() => {
    if (percent <= 65) {
      let rand = Math.round(Math.random() * 8) + 2;
      percent = Math.min(percent + rand, 65);
      setLoading(percent);
    } else {
      clearInterval(interval);
    }
  }, 80);

  const loaded = () => {
    return new Promise((resolve) => {
      clearInterval(interval);
      let interval2 = setInterval(() => {
        let rand = Math.round(Math.random() * 12) + 5;
        percent = Math.min(percent + rand, 100);
        setLoading(percent);
        if (percent >= 100) {
          clearInterval(interval2);
          resolve(true);
        }
      }, 30);
    });
  };

  return { loaded };
};
