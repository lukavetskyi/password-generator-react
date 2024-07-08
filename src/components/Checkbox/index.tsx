import { FC } from "react";
import cls from "./checkbox.module.css";

interface IProps {
  text: string,
  value: boolean,
  onChange: (value:boolean)=>void 
}

export const Checkbox: FC<IProps> = ({ text, value, onChange }) => {
  return <div className={cls.checkbox}>
    <input type="checkbox" id={text} checked={value} onChange={e => onChange(e.target.checked)} />
    <label htmlFor={text}>{text}</label>
  </div>;
};
