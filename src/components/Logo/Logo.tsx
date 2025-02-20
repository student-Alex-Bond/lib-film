import { FC } from 'react';

export const Logo: FC<{ srcLogo: string }> = ({ srcLogo }) => {
  return <img src={srcLogo} alt="Логотип сайта" />;
};
