import { ComponentPropsWithRef } from 'react';

export type InputProps = ComponentPropsWithRef<'input'> & {
  isValid?: boolean;
  isIcon?: boolean;
  isValidText?: string;
  value?: string;
  placeholder: string;
};
