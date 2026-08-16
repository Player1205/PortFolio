"use client";

import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Open Source Maintainer</h4>
                <h5>Fastify Ecosystem</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Author and maintainer of <code>fastify-param-schema-validation</code>,
              a high-performance route parameter validation plugin utilized in production
              microservices for robust runtime type safety and OpenAPI compliance.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Apex Zero Hackathon</h4>
                <h5>1st Place Champion</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Built and architected the ML-IPL Roster Optimizer: an algorithmic
              machine learning optimization engine predicting fantasy player metrics and squad
              synergies in real time under strict compute constraints.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full-Stack SWE Intern</h4>
                <h5>ThinkNEXT Technologies</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Engineered scalable backend REST microservices, automated CI/CD deployment
              pipelines, integrated relational databases, and optimized database query execution
              speeds by over 38%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
