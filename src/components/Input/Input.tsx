import cn from 'classnames';
import styles from './Input.module.css';
import { forwardRef } from 'react';
import { InputProps } from './Input.props';

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    placeholder,
    isIcon,
    value,
    onChange,
    isValid = true,
    isValidText = 'Заполните поле',
    ...props
  },
  ref,
) {
  const cl = isIcon ? styles.label : '';
  const pl = isIcon ? styles.pl : '';
  return (
    <label className={cn(cl, styles['label-flex'])}>
      {!isValid && isValidText}
      <input
        ref={ref}
        value={value}
        onChange={onChange}
        className={cn(styles.input, pl, { [styles['invalid']]: !isValid })}
        placeholder={placeholder}
        {...props}
      />
    </label>
  );
});
