import { ComponentProps, FC } from 'react';
import cn from 'classnames';
import styles from './InputSearch.module.css';

type InputSearchTypeProps = ComponentProps<'input'>;

export const InputSearch: FC<InputSearchTypeProps> = ({ ...props }) => {
  return (
    <label className={cn(styles.label, styles['label-flex'])}>
      <input {...props} type="text" className={cn(styles.input, styles.pl)} />
    </label>
  );
};
