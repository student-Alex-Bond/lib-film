import { NavList } from '../NavList';
import { useEffect } from 'react';
import styles from './NavMenu.module.css';
import cn from 'classnames';
import logo from './../../assets/logo.svg';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { siginUser } from '../../features/user.slice';
import { RootState } from '../../store/store';
import { routes } from '../../routes/constants';
import { selectAllUsers, selectUserName } from '../../features/selectors';
import { Logo } from '../../components/Logo';

export const NavMenu = () => {
  const users = useSelector((state: RootState) => selectAllUsers(state));
  const currentUserName = useSelector((state: RootState) => selectUserName(state));

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
