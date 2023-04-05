import { ReactNode } from "react";

type ButtonProps = {
  animate?: boolean;
  value?: string;
  icon?: ReactNode;
};

const Button = ({ animate, value = "Click me!", icon }: ButtonProps) => {
  return (
    <button className={`btn ${animate ? "btn--animate" : ""}`}>
      {icon}
      {value}
    </button>
  );
};

export default Button;
