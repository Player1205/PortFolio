"use client";

import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "GuardCall AI",
    category: "Agentic Scam Detection & Real-Time Interceptor",
    description: "An ultra-low-latency real-time voice wiretap pipeline that streams live telephone audio over WebSockets. It leverages Groq LPU inference to transcribe, detect social engineering fraud, and inject tactical counter-measures in sub-second intervals.",
    tools: "Groq LPU, Deepgram, Fastify, Next.js, WebRTC",
    image: "assets/guardcall.jpg",
    githubLink: "https://github.com/Player1205/GuardCall",
    deployedLink: "#",
  },
  {
    title: "ML-IPL Roster Optimizer",
    category: "Algorithmic Predictive Machine Learning Engine",
    description: "An end-to-end algorithmic auction intelligence engine using advanced regression models to calculate player valuation matrices, risk indices, and multi-constraint roster optimization for professional sports franchises.",
    tools: "Python, Scikit-Learn, Pandas, Fastify, Streamlit",
    image: "assets/images/ml_ipl_optimizer.jpg",
    githubLink: "https://github.com/Player1205/ML-IPL-RosterOptimiser",
    deployedLink: "#",
  },
  {
    title: "DataPassport",
    category: "Data Verification & Management System",
    description: "A secure, high-performance data node interface designed for rigorous identity verification and blockchain-backed transaction logging, ensuring data integrity and seamless audit trails across distributed networks.",
    tools: "React, Node.js, TypeScript, Next.js",
    image: "assets/images/data_passport.jpg",
    githubLink: "https://github.com/Player1205/DataPassport",
    deployedLink: "#",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">{project.category}</p>
                        <p className="carousel-description">{project.description}</p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools:</span> {project.tools}
                        </div>
                        <div className="carousel-buttons">
                          {project.githubLink && (
                            <a
                              href={project.githubLink}
                              target="_blank"
                              rel="noreferrer"
                              className="carousel-link github-btn"
                              data-cursor="disable"
                            >
                              View on GitHub &rarr;
                            </a>
                          )}
                          {project.deployedLink && (
                            <a
                              href={project.deployedLink}
                              target="_blank"
                              rel="noreferrer"
                              className="carousel-link deploy-btn"
                              data-cursor="disable"
                            >
                              Live Demo &rarr;
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-box">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.githubLink}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "active" : ""}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
