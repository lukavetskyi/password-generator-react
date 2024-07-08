import cls from "./passwordRecord.module.css";
import CopySVG from "#/copy.svg?react";
import { FC } from "react";

interface IProps {
  password: string,
  date: number
}

const dateFormat = (d: number) => {
  const date = new Date(d);

  const year = date.getFullYear();
  const month = date.getMonth() + 1; // Месяцы начинаются с 0, поэтому добавляем 1
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const formattedDate = `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
  return formattedDate;
};

export const PasswordRecord: FC<IProps> = ({ password, date }) => {
  return <div className={cls.record}>
    <div>
      <p>{password}</p>
      <p>{dateFormat(date)}</p>
    </div>
    <CopySVG onClick={() => navigator.clipboard.writeText(password)} />
  </div>;
};
