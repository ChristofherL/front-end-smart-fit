import { ComponentProps } from "react";
import styles from "./styles.module.scss";

export function Checkbox({ ...rest }: ComponentProps<"input">) {
  return (
    <input
      className={styles.checkbox}
      type="checkbox"
      data-testid="checkbox"
      {...rest}
    />
  );
}
