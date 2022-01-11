import React from "react";
import './index.css'

const SelectField =({label,placeholder}) => {
  return (
    <div >
      <label for="cars" className= 'labelStyle'><b>{label}</b></label><br />
      <select name="cars" id="cars" className="selectFieldStyle" placeholder={placeholder}>
        <option value="">Select</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
      </select>
    </div>
  );
}
export default SelectField;