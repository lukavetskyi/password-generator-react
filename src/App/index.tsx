import { Checkbox } from "@/components/Checkbox";
import { CopyButton } from "@/components/CopyButton";
import { Input } from "@/components/Input";
import { Logo } from "@/components/Logo";
import { Slider } from "@/components/Slider";
import { useState } from "react";
import cls from "./app.module.css";
import { IPassSettings } from "@/handlers/generatePassword";
import { ReacordLists } from "@/components/RecordsList";

export const App = () => {
  const [password, setPassword] = useState<string>("");
  const [passSettings, setPassSettings] = useState<IPassSettings>({
    length: 8,
    useSymbols: false,
    useDigits: false,
    useUpper: false,
    useLower: true
  });

  const setUseUpper = (v: boolean) => {
    setPassSettings(state => ({ ...state, useUpper: v }));
  };
  const setUseLower = (v: boolean) => {
    setPassSettings(state => ({ ...state, useLower: v }));
  };
  const setUseDigits = (v: boolean) => {
    setPassSettings(state => ({ ...state, useDigits: v }));
  };
  const setUseSymbols = (v: boolean) => {
    setPassSettings(state => ({ ...state, useSymbols: v }));
  };
  const setLenght = (v: number) => {
    setPassSettings(state => ({ ...state, length: v }));
  };

  return <div className={cls.app}>
    <Logo />
    <div>
      <div>
        <Input passSettings={passSettings} onChange={setPassword} />
        <CopyButton className={cls.btn} password={password} />
        <Slider value={passSettings.length} onChange={setLenght} className={cls.slider} />
        <div className={cls.checkboxes}>
          <Checkbox text="Uppercase letters" value={passSettings.useUpper} onChange={setUseUpper} />
          <Checkbox text="Lowercase letters" value={passSettings.useLower} onChange={setUseLower} />
          <Checkbox text="Numbers" value={passSettings.useDigits} onChange={setUseDigits} />
          <Checkbox text="Symbols" value={passSettings.useSymbols} onChange={setUseSymbols} />
        </div>
      </div>
      <ReacordLists password={password} />
    </div>
  </div>;
};
