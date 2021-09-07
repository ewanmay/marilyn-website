import React from "react";

export enum ButtonTypeE {
  SOLID = 'solid',
  OUTLINE = 'outline'
}

interface ButtonProps {
  onClick: () => void,
  text: string,
  variant: ButtonTypeE
}

function Button({ text, onClick, variant }: ButtonProps) {
  return <button className={variant} onClick={onClick}>{text}</button>;
}

export default Button;
