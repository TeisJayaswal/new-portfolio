import React from "react";
import ComputerTJ from "../images/tj-computer.png";
import Wavy from "../images/wavy.png";
const Banner = () => {
  return (
    <>
      <div id="home" className="banner">
        <img
          src={ComputerTJ}
          alt="computer"
          className="slideDownLater tj_logo"
        />
        <img src={Wavy} alt="wavy" className="wavy" />
        <span className="slideDown">
          <div className="title first">TEIS</div>
        </span>
        <span className="slideDown">
          <div className="title second">JAYASWAL</div>
        </span>
        <span className="slideDownLater">
          <div className="title third">WEB</div>
        </span>
        <span className="slideDownLater">
          <div className="title fourth">DEVELOPER</div>
        </span>
        <div className="line-1"></div>
        {/* <img alt="computer" src={ComputerTJ} /> */}
      </div>
    </>
  );
};

export default Banner;
