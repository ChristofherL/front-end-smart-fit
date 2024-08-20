import { ComponentProps } from "react";
import styles from "./styles.module.scss";

export function Radio({ ...rest }: ComponentProps<"input">) {
  return (
    <input
      className={styles.radio}
      type="radio"
      data-testid="radio"
      {...rest}
    />
  );
}
