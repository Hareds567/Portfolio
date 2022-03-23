import React, { FC } from "react";
import { Form } from "../ContactMe";
import {
  isPossiblePhoneNumber,
  isValidPhoneNumber,
  validatePhoneNumberLength,
  parsePhoneNumber,
  ParseError,
  AsYouType,
} from "libphonenumber-js";

import "./AboutYourself.css";

interface Props {
  form: Form;
  set_form: React.Dispatch<React.SetStateAction<Form>>;
}

const AboutYourself: FC<Props> = ({ form, set_form }) => {
  const [name, set_name] = React.useState<string>("");
  const [email, set_email] = React.useState<string>("");
  const [phone, set_phone] = React.useState<string>("");
  const [userLocation, set_userLocation] = React.useState();

  const a = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    fetch(
      `https://api.ipregistry.co/?key=${process.env.REACT_APP_REGISTRY_KEY}`
    )
      .then((response) => {
        return response.json();
      })
      .then((payload) => {
        console.log(payload.location.country);
        set_userLocation(payload.location.country.code);
      });
  }, []);

  React.useEffect(() => {
    const temp = form;
    temp.user.name = name;
    set_form(temp);
  }, [name]);

  React.useEffect(() => {
    const temp = form;
    temp.user.email = email;
    set_form(temp);
  }, [email]);

  React.useEffect(() => {
    const temp = form;
    temp.user.phone = phone;
    set_form(temp);
  }, [phone]);

  // React.useEffect(() => {
  //   let typingTime;
  //   typingTime = setTimeout(() => {
  //     if (a.current) a.current.style.border = "1px solid red";
  //   }, 5000);
  // });

  const validateEmail = (email: string) => {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return regex.test(email);
  };

  const onKeyUp_name = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!validateEmail(e.currentTarget.value)) {
      e.currentTarget.style.outline = "2px solid #f05959";
    } else {
      set_email(e.currentTarget.value);
      e.currentTarget.style.outline = "0px solid tan";
    }
  };

  const onChange_phone = (e: React.ChangeEvent<HTMLInputElement>) => {
    let temp;
    try {
      const typing = new AsYouType(userLocation).input(e.target.value);
      set_phone(typing);
      temp = parsePhoneNumber(typing, userLocation);
    } catch (e) {
      if (e instanceof ParseError) {
        console.log(e.message);
      }
    }
  };

  return (
    <div className="talk-about-yourself">
      <h3>Talk About Yourself</h3>
      <input
        ref={a}
        type="text"
        className="persons_name"
        placeholder="Name *"
        value={name}
        onChange={(e) => set_name(e.target.value)}
      />
      <input
        type="text"
        className="persons_email"
        placeholder="Email *"
        value={email}
        onKeyUp={(e) => onKeyUp_name(e)}
        onChange={(e) => {
          set_email(e.target.value);
        }}
      />
      <input
        type="text"
        className="persons_number"
        placeholder="Phone number"
        value={phone}
        onChange={(e) => onChange_phone(e)}
      />
    </div>
  );
};

export default AboutYourself;
