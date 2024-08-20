import styles from "./styles.module.scss";
import { Radio } from "../../atoms/radio";
import { ChangeEvent } from "react";

interface PeriodProps {
  period: string;
  time: string;
  name: string;
  checked: boolean;
  handleOnChange: (ev: ChangeEvent<HTMLInputElement>) => void;
}

export function Period({ period, time, name, handleOnChange, checked }: PeriodProps) {
  return (
    <label className={styles.period}>
      <Radio
        name={name}
        checked={checked}
        onChange={handleOnChange}
      />
      <div>
        <span>{period}</span>
        <span>{time}</span>
      </div>
    </label>
  );
}
