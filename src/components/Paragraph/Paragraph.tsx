import cn from "classnames";
import styles from "./Paragraph.module.css";
import { ParagraphProps } from "./Paragraph.props";
import { FC } from "react";

export const Paragraph: FC<ParagraphProps> = ({ children, fontSize }) => {
  return (
    <p className={cn(styles.paragraph)} style={{ fontSize: `${fontSize}` }}>
      {children}
    </p>
  );
};
