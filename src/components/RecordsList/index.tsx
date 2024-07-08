import { FC, useEffect, useState } from "react";
import cls from "./recordsLists.module.css";
import { PasswordRecord } from "../PasswordRecord";

interface IProps {
  password: string
}

interface IPassword {
  password: string,
  date: number
}

export const ReacordLists: FC<IProps> = ({ password }) => {
  const [passwords, setPasswords] = useState<IPassword[]>([]);

  useEffect(() => {
    if (password !== "")
      setPasswords(state => ([{ password, date: Date.now() }, ...state]));
  }, [password]);

  return <div className={cls.list}>
    <h3>password history</h3>
    <div>
      {passwords.map((pass, i) => <PasswordRecord key={i} {...pass} />)}
    </div>
  </div>;
};
