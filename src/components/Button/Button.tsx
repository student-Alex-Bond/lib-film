import cn from 'classnames';
import styles from './Button.module.css';
import { ComponentProps, FC, ReactNode } from 'react';

export type ButtonTypeProps = ComponentProps<'button'> & {
  children: ReactNode;
};

export const Button: FC<ButtonTypeProps> = ({ children, ...rest }) => {
  return (
    <button {...rest} className={cn(styles.btn)}>
      {children}
    </button>
  );
};
