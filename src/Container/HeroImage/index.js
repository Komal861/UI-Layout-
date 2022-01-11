import React from "react";
import Logo from "../../Component/Logo";
import Content from "../Content";
import "./index.css";

const HeroImg = () => {
  
  return (
    <div>
      <div style={{ display: "flex" }}>
        <Logo />
      </div>

      <div style={{ display: "flex" }}>
        <div style={{ flex: 2 }}>
          <Content />
        </div>
        <div style={{ flex: 3, position: "relative", minHeight:290 }}>
          <div className="wrapper">
            <div className="Box1"> </div>
          </div>
          <div className="wrapper">
            <div className="Box2"> </div>
          </div>
          <div className="circle"></div>
         
        </div>
      </div>
    </div>
  );
};
export default HeroImg;
