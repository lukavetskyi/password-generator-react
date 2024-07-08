import { FC } from "react";
import cls from "./strengmeter.module.css";

interface IProps {
  streng: number
}

export const Strengmeter: FC<IProps> = ({ streng }) => {
  return <div className={cls.strengmeter}>
    {[4, 3, 2, 1].map(n => <div key={n} className={n <= streng ? cls.active : ""}></div>)}
  </div>;
};
