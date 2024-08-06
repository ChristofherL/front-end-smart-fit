import { ComponentProps } from "react";
import styles from "./styles.module.scss";

interface PeriodProps extends ComponentProps<"input"> {
  period: string;
  time: string;
  value: string;
}

export function Period({ period, time, value, ...rest }: PeriodProps) {
  return (
    <label className={styles.period}>
      <input
        type="radio"
        name="schedule"
        value={value}
        {...rest}
      />
      <div>
        <span>{period}</span>
        <span>{time}</span>
      </div>
    </label>
  );
}
