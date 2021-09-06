import React from "react";

interface InputProps {
  label: string;
  value: string;
  placeholder: string;
  setValue: (x: string) => void;
}

function Input({ label, value, setValue, placeholder }: InputProps) {
  return (
    <div className="input-container flex column left">
      <div className="label">{label}</div>
      <input
        className="input"
        value={value}
        placeholder={placeholder}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  );
}

export default Input;
