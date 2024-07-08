import { FC } from "react";
import cls from "./slider.module.css";

interface IProps {
  value: number,
  onChange: (value: number) => void,
  className?: string
}

export const Slider: FC<IProps> = ({ value, onChange, className }) => {
  return <div className={`${cls.slider} ${className}`}>
    <input
      min={1}
      max={100}
      type="range"
      value={value}
      onChange={e => onChange(Number(e.target.value))} />
    <p>{value}</p>
  </div>;
};
