import { ChangeEvent, ComponentPropsWithRef } from "react";

export type InputProps = ComponentPropsWithRef<'input'> & {
  isValid?: boolean;
  isIcon?: boolean;
  isValidText?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}
