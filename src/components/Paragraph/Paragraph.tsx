import cn from 'classnames';
import styles from './Paragraph.module.css';
import { ComponentProps, FC, ReactNode } from 'react';

export type ParagraphProps = ComponentProps<'p'> & {
  children: ReactNode;
  fontSize: string;
};

export const Paragraph: FC<ParagraphProps> = ({ children, fontSize }) => {
  return (
    <p className={cn(styles.paragraph)} style={{ fontSize: `${fontSize}` }}>
      {children}
    </p>
  );
};
