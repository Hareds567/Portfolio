import React, { FC } from "react";

import { Form } from "../ContactMe";
//Styles
import "./AboutBusiness.css";

interface Props {
  form: Form;
  set_form: React.Dispatch<React.SetStateAction<Form>>;
}

const AboutBusiness: FC<Props> = ({ form, set_form }) => {
  const [busName, set_busName] = React.useState(form.business.organization);
  const [busLocation, set_busLocation] = React.useState(form.business.location);
  const [busProductInfo, set_busProductInfo] = React.useState(
    form.business.product
  );
  React.useEffect(() => {
    let temp = form;
    temp.business.organization = busName;
    set_form(temp);
  }, [busName]);

  React.useEffect(() => {
    let temp = form;
    temp.business.location = busLocation;
    set_form(temp);
  }, [busLocation]);

  React.useEffect(() => {
    let temp = form;
    temp.business.product = busProductInfo;
    set_form(temp);
  }, [busProductInfo]);

  return (
    <div className="about-your-business">
      <h3> About Your Business</h3>
      <input
        type="text"
        className="business_name"
        placeholder="Company/Organization *"
        maxLength={30}
        value={busName}
        onChange={(e) => {
          set_busName(e.target.value);
        }}
      />
      <input
        type="text"
        className="business_location"
        placeholder="Where is your business located?"
        maxLength={30}
        value={busLocation}
        onChange={(e) => {
          set_busLocation(e.target.value);
        }}
      />
      <input
        type="text"
        className="business_product_info"
        placeholder="What does your business sell or do?"
        value={busProductInfo}
        onChange={(e) => {
          set_busProductInfo(e.target.value);
        }}
      />
    </div>
  );
};

export default AboutBusiness;
