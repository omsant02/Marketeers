import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Navbar from "../Components/Navbar";
import "../style.css";
import image from "../assets/Section.jpg.png";
import icon from "../assets/asterisk.svg";
import Services from "../Components/Services";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Scrollbar from "smooth-scrollbar";
import WhyMarketeer from "../Components/WhyMarketeer";
import Ratings from "../Components/Ratings";

gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {

  // useEffect(() => {
  //   gsap.to('.switch', {
  //     x: -100, // Change this value to move it horizontally
  //   y: 100, // Add this property to move it vertically
  //   scrollTrigger: {
  //     trigger: '.switch',
  //     start: 'center center',
  //     end: 'bottom center',
  //     scrub: true
  //   }
  //   });
    
  //   gsap.to('.class', {
  //     x: 0, // Change this value to move it horizontally
  //   y: -100, // Add this property to move it vertically
  //     scrollTrigger: {
  //       trigger: '.class',
  //       start: 'center center',
  //       end: 'bottom center',
  //       scrub: true
  //     }
  //   });
  // }, []);


// useEffect(() => {
//     const scrollBar = Scrollbar.init(document.querySelector(".scroll-target"), {
//       damping: 0.01,
//       delegateTo: document,
//       alwaysShowTracks: true,
//       speed: 0.2,
//     });

//     ScrollTrigger.defaults({
//       scroller: ".scroll-target",
//     });
//     ScrollTrigger.scrollerProxy(".scroll-target", {
//       scrollTop(value) {
//         if (arguments.length) {
//           scrollBar.scrollTop = value;
//         }
//         return scrollBar.scrollTop;
//       },
//     });

//     scrollBar.addListener(ScrollTrigger.update);

//     const matches = document.querySelectorAll("p");

//     matches.forEach((target) => {
//       gsap.to(target, {
//         backgroundPositionX: "0%",
//         stagger: 1,
//         scrollTrigger: {
//           markers: true,
//           trigger: target,
//           scrub: true,
//           start: "top 20%",
//           end: "bottom 10%",
//         },
//       });
//     });

//     return () => {};
//   }, []);

  

  return (
    <div className="main">
  <Navbar />
  <div className=" w-100 img-container position-relative p-5">
    <div className="img-overlay position-absolute right-0">
      <img src={image} alt="" className="" />
    </div>
    <div className="img-overlay-2 position-absolute">
      <img src={image} alt="" className="" />
    </div>
    <div className="content-wrapper ">
      <div className="header-container vh-100 d-flex justify-content-center align-items-center">
        <div className="header text-center d-flex justify-content-center align-items-center flex-column">
          <h4 className="mb-0" style={{ color: 'var(--text-color)', fontSize: '1.2rem' }}>Competitive Edge through Creativity & Technology</h4>
          <h1 className="p-3 text-light font-7">
            Market Insights
            <img
              src="https://assets-global.website-files.com/63793925c7db23ce040b0824/64f5c2e6bc77c145a44f4842_Star.svg"
              alt="star"
              className="svg-icon custom-button"
            />
            <span className="d-flex m-0 align-items-center justify-content-end text-color ">
              <img
                src="https://assets-global.website-files.com/63793925c7db23ce040b0824/64f5c38109cfeef5f12e09ae_Image.jpg"
                alt="button"
                className="button custom-button-2"
              />
              <span className="switch">
                that Make a
              </span>
            </span>
            <span className="text-color switch">Difference</span>
          </h1>
        </div>
      </div>
    </div>
    <div className="spacer vh-50" style={{marginBottom: '40rem'}}></div>
    <div className="green-border w-75 d-flex justify-content-center pt-4 position-absolute " style={{ left: '50%', transform: 'translateX(-50%)' }}></div>
    <WhyMarketeer />
    <Services />
    <Ratings/>
  </div>
</div>

  );
};

export default LandingPage;