import React, { forwardRef, useImperativeHandle, useRef, useState } from "react";

export enum InputValidationE {
  REQUIRED = 'required',
  EMAIL = 'email'
}

interface InputProps {
  label: string;
  value: string;
  placeholder: string;
  validate: InputValidationE[];
  setValue: (x: string) => void;
  isTextArea?: boolean;
}

const Input = forwardRef(({ label, value, setValue, validate, placeholder, isTextArea = false }: InputProps, ref) => {
  const [error, setError] = useState('');

  const validateEmail = (email: string) => {
    const regexString = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g
    const emailRegex = new RegExp(regexString)
    return emailRegex.test(email);
  }

  useImperativeHandle(ref, () => ({

    validate: () => {
      if (validate.includes(InputValidationE.REQUIRED) && value.length == 0) {
        setError('This field is required')
        return true
      }

      if (validate.includes(InputValidationE.EMAIL) && !validateEmail(value)) {
        setError('Please enter a valid email.')
        return true
      }

      setError('')
      return false;
    }

  }));
  return (
    <div className="input-container flex column left">
      <div className="label">{label}
        <span className="error">*&nbsp;{error.length > 0 && error}</span>

      </div>
      {
        !isTextArea && (
          <input
            className="input"
            value={value}
            placeholder={placeholder}
            onChange={(event) => setValue(event.target.value)}
          />
        )
      }
      {
        isTextArea && (
          <textarea
            className="input"
            value={value}
            placeholder={placeholder}
            onChange={(event) => setValue(event.target.value)}
          />
        )
      }
    </div>
  );
})

export default Input;
