import cls from "./copyButton.module.css";
import ArrowSVG from "#/arrow.svg?react";
import { FC } from "react";

interface IProps {
  className?: string,
  password: string
}

export const CopyButton: FC<IProps> = ({ className, password }) => {
  return <button
    onClick={()=>navigator.clipboard.writeText(password)}
    className={`${cls.btn} ${className}`}>
    <span>copy password_</span>
    <ArrowSVG />
  </button>;
};
