import React from "react";

export enum SupportTabsE {
  SIGN = "Request for sign",
  VOLUNTEER = "Request to volunteer",
  DONATE = "Request to donate",
}

interface SupportProps {
  value: SupportTabsE;
  setValue: (x: SupportTabsE) => void;
}

function Support({ value, setValue }: SupportProps) {

  const tabs = [
    { label: "Get a sign", value: SupportTabsE.SIGN },
    { label: "Volunteer", value: SupportTabsE.VOLUNTEER },
    { label: "Donate", value: SupportTabsE.DONATE },
  ];

  const getActiveTab = (tabValue: SupportTabsE) => {
    if (tabValue === value) {
      return "active";
    }
  };

  return (
    <div className="tabs">
      {tabs.map(({ value, label }) => (
        <div
          onClick={() => setValue(value)}
          className={`flex center tab ${getActiveTab(value)}`}
        >
          {label}
        </div>
      ))}
    </div>
  );
}

export default Support;
