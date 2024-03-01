import cn from "classnames";
import styles from "./Button.module.css";
import { ButtonProps } from "./Button.props";
import { FC } from "react";

export const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={cn(styles.btn)}>
      {children}
    </button>
  );
};
