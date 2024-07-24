import styles from "./styles.module.scss";

interface PeriodProps {
  period: string;
  time: string;
}

export function Period({ period, time }: PeriodProps) {
  return (
    <label className={styles.period}>
      <input type="checkbox" />
      <div>
        <span>{period}</span>
        <span>{time}</span>
      </div>
    </label>
  );
}
