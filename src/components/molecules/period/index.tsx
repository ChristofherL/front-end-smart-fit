import styles from "./styles.module.scss";
import { Radio } from "../../atoms/radio";
import { ChangeEvent } from "react";

interface PeriodProps {
  period: string;
  time: string;
  name: string;
  value: string;
  handleOnChange: (ev: ChangeEvent<HTMLInputElement>) => void;
}

export function Period({ period, time, name, value, handleOnChange }: PeriodProps) {
  return (
    <label className={styles.period}>
      <Radio
        name={name}
        value={value}
        onChange={handleOnChange}
      />
      <div>
        <span>{period}</span>
        <span>{time}</span>
      </div>
    </label>
  );
}
