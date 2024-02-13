import cn from "classnames";
import styles from "./Button.module.css";

export const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={cn(styles.btn)}>
      {children}
    </button>
  );
};
