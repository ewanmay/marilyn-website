import React from "react";

export enum ButtonTypeE {
  SOLID = 'solid',
  OUTLINE = 'outline'
}

interface ButtonProps {
  onClick: () => void,
  text: string,
  variant: ButtonTypeE,
  isLoading?: Boolean
}

function Button({ text, onClick, variant, isLoading }: ButtonProps) {
  return <button className={variant} onClick={onClick}>{text}{isLoading && (<img className="spinner" src="/images/spinner.svg" alt="loading"/>)}</button>;
}

export default Button;
