import { FC } from 'react';
import { NavMenu } from '../NavMenu/NavMenu';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import cn from 'classnames';

export const Layout: FC = () => {
  return (
    <div className={cn(styles['container'])}>
      <NavMenu />
      <Outlet />
    </div>
  );
};
