import { ComponentProps } from "react";
import styles from "./styles.module.scss";

interface ButtonProps extends ComponentProps<"button"> {
  variant?: keyof typeof variants;
}

const variants = {
  primary: styles.primary__button,
  scondary: styles.secondary__button,
};

export function Button({ children, variant = "primary", ...rest }: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${variants[variant]}`}
      {...rest}
    >
      {children}
    </button>
  );
}
