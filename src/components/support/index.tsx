import React, { useState } from "react";
import SupportHeader from "./Header";
import Input from "./Input";
import "./Support.scss";
import Tabs, { SupportTabsE } from "./Tabs";
import Sign from "./Sign";
import Volunteer from "./Volunteer";

const signRange = "A1:D1";
const volunteerRange = "A1:F1";

const appendSpreadsheet = async (
  row: Record<string, string>,
  tab: SupportTabsE
) => {
  const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
  const SHEET_ID = process.env.REACT_APP_SHEET_ID;
  const CLIENT_EMAIL = process.env.REACT_APP_GOOGLE_CLIENT_EMAIL;
  const PRIVATE_KEY = process.env.REACT_APP_GOOGLE_SERVICE_PRIVATE_KEY;
  const range = tab === SupportTabsE.SIGN ? signRange : volunteerRange;
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${range}:append`;
};

function Support() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [tabSelection, setTabSelection] = useState(SupportTabsE.SIGN);

  const getTab = () => {
    return tabSelection === SupportTabsE.SIGN ? <Sign /> : <Volunteer />;
  };

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
            setValue={setName}
          />
          <Input
            value={email}
            label={"Email"}
            placeholder={"example@gmail.com"}
            setValue={setEmail}
          />
          <Input
            value={address}
            label={"Address"}
            placeholder={"50 Example Road NE"}
            setValue={setAddress}
          />
          {getTab()}
        </div>
      </div>
    </div>
  );
}

export default Support;
