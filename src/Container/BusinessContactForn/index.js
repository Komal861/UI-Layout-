import React from "react";
import Button from "../../Component/Button";
import CheckBoxInput from "../../Component/CheckBoxInput";
import Input from "../../Component/InputField";
import SelectField from "../../Component/SelectField";

const BusinessContactForm = () => {
  return (
    <div >
      <div style={{ display: "flex" }}>
        <h2>Business Contact Information</h2>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 5, flexDirection: "column" }}>
          <SelectField
            label="Country or Region"
            placeholder="Select Country or Region"
          />
          <Input label="Last Name" placeholder="Enter Last Name" type="text" />
          <Input label="Company" placeholder="Enter Company" />
        </div>
        <div style={{ flex: 5, flexDirection: "column", marginLeft: 10 }}>
          <Input
            label="First Name"
            placeholder="Enter First Name"
            type="text"
          />

          <Input label="Title" placeholder="Title" type="text" />

          <SelectField
            label="State or Province"
            placeholder="Select State or Province"
            type="text"
          />
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 12 }}>
          <Input
            label="Work E-mail Address"
            placeholder="Enter Work E-mail Address"
            type="text"
          />
          <CheckBoxInput type="checkbox" label="Please keep me informed on new business tactics that can help me" />
          <CheckBoxInput type="checkbox" label="Keep me posted on your next free webinar."/>
          <Button value='Download Now'/>
          
        </div>
      </div>
    </div>
  );
};
export default BusinessContactForm;
