import React from "react";

import ShadowImg from '../../img/shadowImg.jpg'
import BusinessContactForm from "../BusinessContactForn";
import './index.css'

const BusinessInfo =() => {
  return (
    <div className="BusinessInfoPage">
      <div style={{ display: "flex" }}>
        <div style={{ flex: 2}} >
            <img className="position" src={ShadowImg} alt="Business Contact Info"/>
        </div>
        <div  className="infoStyle" style={{ flex: 4 }}>
            <BusinessContactForm/>
        </div>
      </div>
    </div>
  );
}
export default BusinessInfo;