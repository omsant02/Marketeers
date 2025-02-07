import React, { useEffect } from "react";
import "./Services.css";
import SVG from "../assets/SVG.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import forecast from "../assets/arrow-up.svg";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  useEffect(() => {
    const serviceBoxes = document.querySelectorAll(".service-box");

    gsap.to(serviceBoxes, {
      xPercent: -100,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".services-container",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="d-flex flex-column justify-content-center mb-md-5  ">
      <div className="custom-container z-3">
        <h1 className="font-10 text-light">Services</h1>
      </div>
      <div className="services-container gallery d-flex gap-1 mb-lg-5">
        <div className="cards d-flex flex-nowrap w-100 ">
          
          <div className="service-box d-flex justify-content-between flex-column">
            <span className="d-flex justify-content-between">
              
              <img src={SVG} className="" alt="" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <g opacity="0.16" clip-path="url(#clip0_1_50)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.1684 1.92355H1.18226V0.0200195H15.4675C15.9935 0.0200195 16.4199 0.446139 16.4199 0.971784V15.2483H14.5152V3.26954L2.043 15.734L0.696171 14.3881L13.1684 1.92355Z"
                    fill="#DCEFD8"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_50">
                    <rect
                      width="16.19"
                      height="16.18"
                      fill="white"
                      transform="translate(0.22995 0.0200195)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <div className="content">
              <p className="p-color font-2 flex-end market-headline fw-medium" style={{color: 'var(--text-color)'}}>
              Pay-Per-Click Advertising (PPC)

              </p>
              </div>
          </div>
          <div className="service-box d-flex justify-content-between flex-column">
            <span className="d-flex justify-content-between">
              
              <img src={forecast} className="" alt="" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <g opacity="0.16" clip-path="url(#clip0_1_50)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.1684 1.92355H1.18226V0.0200195H15.4675C15.9935 0.0200195 16.4199 0.446139 16.4199 0.971784V15.2483H14.5152V3.26954L2.043 15.734L0.696171 14.3881L13.1684 1.92355Z"
                    fill="#DCEFD8"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_50">
                    <rect
                      width="16.19"
                      height="16.18"
                      fill="white"
                      transform="translate(0.22995 0.0200195)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <div className="content">
              <p className="p-color font-2 flex-end market-headline fw-medium" style={{color: 'var(--text-color)'}}>
              Email and SMS Marketing
              </p>
              </div>
          </div>
          <div className="service-box d-flex justify-content-between flex-column">
            <span className="d-flex justify-content-between">
              
              <img src={SVG} className="" alt="" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <g opacity="0.16" clip-path="url(#clip0_1_50)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.1684 1.92355H1.18226V0.0200195H15.4675C15.9935 0.0200195 16.4199 0.446139 16.4199 0.971784V15.2483H14.5152V3.26954L2.043 15.734L0.696171 14.3881L13.1684 1.92355Z"
                    fill="#DCEFD8"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_50">
                    <rect
                      width="16.19"
                      height="16.18"
                      fill="white"
                      transform="translate(0.22995 0.0200195)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <div className="content">
              <p className="p-color font-2 flex-end market-headline fw-medium" style={{color: 'var(--text-color)'}}>
              Influencer Marketing


              </p>
              </div>
          </div>
          <div className="service-box d-flex justify-content-between flex-column">
            <span className="d-flex justify-content-between">
              
              <img src={forecast} className="" alt="" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <g opacity="0.16" clip-path="url(#clip0_1_50)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.1684 1.92355H1.18226V0.0200195H15.4675C15.9935 0.0200195 16.4199 0.446139 16.4199 0.971784V15.2483H14.5152V3.26954L2.043 15.734L0.696171 14.3881L13.1684 1.92355Z"
                    fill="#DCEFD8"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_50">
                    <rect
                      width="16.19"
                      height="16.18"
                      fill="white"
                      transform="translate(0.22995 0.0200195)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <div className="content">
              <p className="p-color font-2 flex-end market-headline fw-medium" style={{color: 'var(--text-color)'}}>
              Conversion Rate Optimization (CRO)

              </p>
              </div>
          </div>
          <div className="service-box d-flex justify-content-between flex-column">
            <span className="d-flex justify-content-between">
              
              <img src={SVG} className="" alt="" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <g opacity="0.16" clip-path="url(#clip0_1_50)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.1684 1.92355H1.18226V0.0200195H15.4675C15.9935 0.0200195 16.4199 0.446139 16.4199 0.971784V15.2483H14.5152V3.26954L2.043 15.734L0.696171 14.3881L13.1684 1.92355Z"
                    fill="#DCEFD8"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_50">
                    <rect
                      width="16.19"
                      height="16.18"
                      fill="white"
                      transform="translate(0.22995 0.0200195)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <div className="content">
              <p className="p-color font-2 flex-end market-headline fw-medium fw-medium" style={{color: 'var(--text-color)'}}>
              Online Reputation Management

              </p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
