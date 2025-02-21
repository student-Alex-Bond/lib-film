import cn from 'classnames';
import styles from './Input.module.css';
import { InputTypeProps } from './types';
import { FC } from 'react';
export const Input: FC<InputTypeProps> = ({ ...props }) => {
  return (
    <label className={cn(styles['label-flex'])}>
      <input className={cn(styles.input)} {...props} />
    </label>
  );
};
