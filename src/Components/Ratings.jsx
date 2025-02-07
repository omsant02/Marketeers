import React from "react";
import "./Ratings.css";
import Clippath from "../assets/Clippath.svg";
import Clip from "../assets/Clip.svg";
// import record from "../assets/div.record-div.png";
import record from "../assets/trackrecord.svg";
import section from "../assets/Section10k.png";
import arrowDown from "../assets/ArrowDown.svg"

const Ratings = () => {
  return (
    <div className="position-relative">
   <img src={record} alt="" className=""  style={{ 
          position: "absolute",
          zIndex: 999,
          left: '11%',
          top: '-2px',
      
 }}/>
      <div
        className="d-flex z-3 position-relative rating-container gap-4"
        style={{ backgroundColor: "var(--secondary-bg)" }}
              >
        
        <div className="col-6 col-lg-4 col-md-4 h-100 padding d-flex flex-column gap-4 ">
          <div className="card d-flex justify-content-between" style={{height: "25rem"}}>
            <img src={Clippath} alt="img" className="align-self-end" />
            <div className="text-effect">
              <h2
                className="m-0 rating-sm"
                style={{ color: "var(--bg-color)", fontSize: "5rem" }}
              >
                10k
              </h2>
              <h4 className="fw-medium " style={{ color: "var(--primary-text)", fontSize: '1.3rem'}}>Business Analyzed</h4>
            </div>
          </div>
          <div className="card d-flex justify-content-between" style={{backgroundColor: "var(--main-text-color)", height: "25rem"}}>
            <img src={Clippath} alt="img" className="align-self-end" />
            <div className="text-effect">
              <h2
                className="m-0 rating-sm"
                style={{ color: "var(--bg-color)", fontSize: "5rem" }}
              >
                10k
              </h2>
              <h4 className="fw-medium " style={{ color: "var(--primary-text)", fontSize: '1.3rem' }}>Business Analyzed</h4>
            </div>
          </div>
        </div>
        <div className="col-6 col-lg-4 col-md-4 h-100  d-flex flex-column gap-4" style={{paddingBottom: '2%', paddingTop: '12%'}}>
        <div className="card  d-flex justify-content-between" style={{backgroundColor: "var(--bg-color)", height: "25rem"}}>
            <img src={Clippath} alt="img" className="align-self-end" />
            <div className="text-effect">
              <h2
                className="m-0 text-light rating-sm"
                style={{ fontSize: "5rem" }}
              >
                <span style={{color: "var(--background-color))"}}>$</span>50M+
              </h2>
              <h4 className="fw-medium " style={{ color: "var(--primary-text)", fontSize: '1.3rem' }}>Business Analyzed</h4>
            </div>
          </div>
          <div className="card d-flex justify-content-between" style={{height: "25rem"}}>
            <img src={Clippath} alt="img" className="align-self-end" />
            <div className="text-effect">
              <h2
                className="m-0 rating-sm"
                style={{ color: "var(--bg-color)", fontSize: "5rem" }}
              >
                700
              </h2>
              <h4 className="fw-medium " style={{ color: "var(--primary-text)", fontSize: '1.3rem' }}>Completed Projects</h4>
            </div>
          </div>
        </div>
        <div className="col-6 col-lg-4 col-md-4 h-100 padding d-flex flex-column gap-4" >
        <div className="card d-flex justify-content-between" style={{backgroundColor: "var(--main-text-color)", height: "25rem"}}>
            <img src={Clippath} alt="img" className="align-self-end" />
            <div className="text-effect">
              <h2
                className="m-0 rating-sm"
                style={{ color: "var(--bg-color)", fontSize: "5rem" }}
              >
                10k
              </h2>
              <h4 className="fw-medium " style={{ color: "var(--primary-text)", fontSize: '1.3rem' }}>Business Analyzed</h4>
            </div>
          </div>
          <div className="card d-flex justify-content-between" style={{backgroundColor: "var(--bg-color)", height: "25rem"}}>
            <img src={Clippath} alt="img" className="align-self-end" />
            <div className="text-effect">
              <h2
                className="m-0 rating-sm"
                style={{ color: "var(--main-text-color)", fontSize: "5rem" }}
              >
                4.9/5
              </h2>
              <h4 className="fw-medium " style={{ color: "var(--primary-text)", fontSize: '1.3rem' }}>Business Analyzed</h4>
            </div>
          </div>
        </div>
        
      </div>
      <img
    src={arrowDown}
    alt="arrowDown"
    className=" position-absolute bottom-50 z-3"
    style={{right: "-1px"}}
  />
    </div>
  );
};

export default Ratings;
