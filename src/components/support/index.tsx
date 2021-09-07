import React, { useRef, useState } from "react";
import SupportHeader from "./Header";
import Input, { InputValidationE } from "./Input";
import "./Support.scss";
import Tabs, { SupportTabsE } from "./Tabs";
import Sign from "./Sign";
import Volunteer from "./Volunteer";
import Button, { ButtonTypeE } from "../common/Button";

function Support() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [tabSelection, setTabSelection] = useState(SupportTabsE.SIGN);
  const nameRef = useRef()
  const emailRef = useRef()
  const addressRef = useRef()
  const messageRef = useRef()

  const isActive = (tab: SupportTabsE) => {
    return tabSelection === tab;
  };

  const formatForm = () => {
    return `
      Name: ${name},
      Email: ${email},
      ${isActive(SupportTabsE.SIGN) ? 'Address: ' + address : null}
      Message: ${message}
    `
  }

  const formatHtmlForm = () => {
    return `
      <p>Name: ${name},</p> </br>
      <p>Email: ${email},</p> </br>
      ${isActive(SupportTabsE.SIGN) ? `<p>Address: ${address}</p> <br/>` : null}
      <p>Message: ${message}</p>
    `
  }

  const submit = async (tab: SupportTabsE) => {
    const refs = [nameRef, emailRef, addressRef, messageRef]
    const validate = refs.map((ref: React.MutableRefObject<any>) => {
      return ref.current.validate();
    })
    if (validate.some(value => value)) {
      return false;
    }
  }

  return (
    <div className="support flex column center">
      <SupportHeader />
      <div className="col-10 col-lg-6 flex top">
        <div className="col-auto">
          <Tabs value={tabSelection} setValue={setTabSelection} />
        </div>

        <div className="flex fill inputs">
          <Input
            value={name}
            label={"Name"}
            placeholder={"First & Last"}
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
          <Button variant={ButtonTypeE.SOLID} text={'Submit'} onClick={() => submit(tabSelection)} />
        </div>
      </div>
    </div>
  );
}

export default Support;
