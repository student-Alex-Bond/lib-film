import cn from "classnames";
import styles from "./Input.module.css";
import { forwardRef } from "react";

export const Input = forwardRef(function Input(
  {
    placeholder,
    isIcon,
    value,
    onCange,
    isValid = true,
    isValidText = "Заполните поле",
  },
  ref
) {
  const cl = isIcon ? styles.label : "";
  const pl = isIcon ? styles.pl : "";
  return (
    <label className={cn(cl, styles["label-flex"])}>
      {!isValid && isValidText}
      <input
        ref={ref}
        value={value}
        onChange={onCange}
        className={cn(styles.input, pl, { [styles["invalid"]]: !isValid })}
        placeholder={placeholder}
      />
    </label>
  );
});
