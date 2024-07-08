import { Strengmeter } from "../Strengmeter";
import cls from "./input.module.css";
import ResetSVG from "#/reset.svg?react";
import { generatePassword, IPassSettings } from "@/handlers/generatePassword";
import { useCallback, FC, useEffect, useState } from "react";

interface IProps {
  passSettings: IPassSettings,
  onChange: (value: string) => void
}

export const Input: FC<IProps> = ({ passSettings, onChange }) => {
  const [password, setPassword] = useState<string>("");
  const [strength, setStrength] = useState<number>(0);

  const setPasswordAndStrength = useCallback(() => {
    const { password, strength } = generatePassword(passSettings);
    setPassword(password);
    setStrength(strength);
    onChange(password);
  }, [onChange, passSettings]);

  useEffect(() => {
    setPasswordAndStrength();
  }, [passSettings, setPasswordAndStrength]);

  return <div className={cls.input}>
    <input value={password} readOnly />
    <div>
      <Strengmeter streng={strength} />
      <ResetSVG onClick={() => setPasswordAndStrength()} />
    </div>
  </div>;
};
