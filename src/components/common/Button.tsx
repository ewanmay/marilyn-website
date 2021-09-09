import React from "react";

export enum ButtonTypeE {
  SOLID = 'solid',
  OUTLINE = 'outline'
}

interface ButtonProps {
  onClick: () => void,
  text?: string,
  variant: ButtonTypeE,
  isLoading?: Boolean,
  children?: React.ReactNode
}

function Button({ text, onClick, variant, isLoading, children }: ButtonProps) {
  return <button className={variant} onClick={onClick}>{text}{isLoading && (<img className="spinner" src="/images/spinner.svg" alt="loading"/>)}{children}</button>;
}

export default Button;
