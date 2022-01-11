import React from "react";
import './index.css';

const CheckBoxInput = ({label}) => {
  return (
    <div>
      <input type="checkbox" />
      <label className="checkboxStyle">{label}</label>
      <br></br>
    </div>
  );
};
export default CheckBoxInput;