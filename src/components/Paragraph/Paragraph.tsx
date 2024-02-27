import cn from "classnames";
import styles from "./Paragraph.module.css";
import { IParagraph } from "./Paragraph.props";
import { FC } from "react";

export const Paragraph:FC<IParagraph> = ({ children, fs }) => {
  return (
    <p className={cn(styles.paragraph)} style={{ fontSize: `${fs}` }}>
      {children}
    </p>
  );
};
