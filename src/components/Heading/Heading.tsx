import styles from "./Heading.module.css";
import cn from "classnames";
import { FC, ReactNode } from "react";

export const Heading: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <h1 className={cn(styles.heading)}>
      {children}
    </h1>
  );
};
