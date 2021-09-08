import React, { useEffect, useRef, useState } from "react";
import SupportHeader from "./Header";
import Input, { InputValidationE } from "./Input";
import "./Support.scss";
import Tabs, { SupportTabsE } from "./Tabs";
import Button, { ButtonTypeE } from "../common/Button";
import emailjs from "emailjs-com";

function Support() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [tabSelection, setTabSelection] = useState(SupportTabsE.SIGN);
  const nameRef = useRef();
  const emailRef = useRef();
  const addressRef = useRef();
  const messageRef = useRef();

  const isActive = (tab: SupportTabsE) => {
    return tabSelection === tab;
  };

  const getSupportText = () => {
    if (tabSelection === SupportTabsE.DONATE) {
      return "Volunteer support is essential to running an effective campaign.  Every hour counts!  Fill out this form to let us know you’re interested.";
    } else if (tabSelection === SupportTabsE.SIGN) {
      return "If you would like a lawn sign, please fill out this form and we’ll make sure you get one!";
    } else {
      return "Trustee campaigns are funded by the candidate and those individuals who offer support. Only Alberta residents can donate to election campaigns.  Donations cannot be accepted from corporations or unincorporated organizations or groups and are unfortunately not eligible for tax rebates.";
    }
  };

  useEffect(() => {
    window.scroll(0, 0)
  }, []);

  useEffect(() => {
    setSuccess("");
  }, [tabSelection]);

  const reset = () => {
    setAddress("");
    setMessage("");
    setSuccess("");
    setEmail("");
    setName("");
    setError("");
  };

  const submit = async (tab: SupportTabsE) => {
    setError("");
    const refs = [nameRef, emailRef, messageRef];

    if (isActive(SupportTabsE.SIGN)) {
      refs.push(addressRef);
    }
    const validate = refs.map((ref: React.MutableRefObject<any>) => {
      return ref.current.validate();
    });
    if (validate.some((value) => value)) {
      return false;
    }
    setLoading(true);
    const res = await emailjs.send(
      process.env.REACT_APP_EMAIL_SERVICE_ID || "",
      process.env.REACT_APP_EMAIL_TEMPLATE_ID || "",
      {
        request_type: tab,
        name,
        email,
        address,
        message,
      },
      process.env.REACT_APP_USER_ID || ""
    );

    if (res.status === 200) {
      setSuccess(`Form ${tab} successful`);
    } else {
      setError("An error occurred, please try again in a moment");
    }
    setLoading(false);
  };

  return (
    <div className="support flex center">
      <SupportHeader />
      <div className="col-10 col-lg-6 flex top">
        <div className="col-12 col-lg-auto">
          <Tabs value={tabSelection} setValue={setTabSelection} />
        </div>

        <div className="flex fill inputs">
          <p>{getSupportText()}</p>
          <Input
            value={name}
            label={"Name"}
            placeholder={"Jane Doe"}
            ref={nameRef}
            validate={[InputValidationE.REQUIRED]}
            setValue={setName}
          />
          <Input
            value={email}
            label={"Email"}
            validate={[InputValidationE.REQUIRED, InputValidationE.EMAIL]}
            placeholder={"example@gmail.com"}
            ref={emailRef}
            setValue={setEmail}
          />
          {isActive(SupportTabsE.SIGN) && (
            <Input
              value={address}
              label={"Address"}
              validate={[InputValidationE.REQUIRED]}
              placeholder={"50 Example Road NE"}
              ref={addressRef}
              setValue={setAddress}
            />
          )}
          <Input
            value={message}
            isTextArea={true}
            validate={[InputValidationE.REQUIRED]}
            label={"Comment / Message"}
            placeholder={"Enter your message here."}
            ref={messageRef}
            setValue={setMessage}
          />
          {success.length > 0 && <p className="success">{success}</p>}
          {error.length > 0 && <p className="error">{error}</p>}
          <div className="col-12 p-0">
            <Button
              variant={ButtonTypeE.SOLID}
              text={"Submit"}
              isLoading={loading}
              onClick={() => submit(tabSelection)}
            />
            &nbsp;
            <Button
              variant={ButtonTypeE.OUTLINE}
              text={"Reset"}
              onClick={() => reset()}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;
