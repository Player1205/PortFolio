"use client";

import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/vansh-rana-dev/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — vansh-rana-dev
              </a>
            </p>
            <p>
              <a
                href="mailto:vansh5201314@gmail.com"
                data-cursor="disable"
              >
                Email — vansh5201314@gmail.com
              </a>
            </p>
            <h4>Focus</h4>
            <p>
              Distributed Backend Systems, High-Concurrency APIs, Real-Time AI, 3D WebGL
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/Player1205"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/vansh-rana-dev/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              X / Twitter <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Vansh Rana</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
