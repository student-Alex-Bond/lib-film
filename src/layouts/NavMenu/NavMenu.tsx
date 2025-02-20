import { NavList } from '../NavList/NavList';
import { Logo } from '../../components/Logo/Logo';
import { useEffect } from 'react';
import styles from './NavMenu.module.css';
import cn from 'classnames';
import logo from './../../assets/logo.svg';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { siginUser } from '../../features/user.slice';
import { RootState } from '../../store/store';
import { routes } from '../../routes/constants';

export const NavMenu = () => {
  const users = useSelector((state: RootState) => state.allUsers);
  const currentUserName = useSelector((state: RootState) => state.currentUser.name);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (users) {
      const findedLoginedUser = users.find((user) => user.isLogined === true);
      if (findedLoginedUser) {
        dispatch(siginUser(findedLoginedUser));
        if (currentUserName !== findedLoginedUser.name) {
          navigate(routes.main);
        }
      } else {
        navigate(routes.signIn);
      }
    }
  }, [users, dispatch, navigate, currentUserName]);

  return (
    <nav className={cn(styles['nav-menu'])}>
      <Logo srcLogo={logo} />
      <NavList />
    </nav>
  );
};
