import cn from 'classnames';
import styles from './NavList.module.css';
import signIn from '../../assets/sign-in.svg';
import { FC } from 'react';
import user from '../../assets/user.svg';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispathType, RootState } from '../../store/store';
import { clearCurrentUser } from '../../features/user.slice';
import { logoutUser } from '../../features/allUsers.slice';
import { routes } from '../../routes/constants';
import {
  selectFavoriteMovies,
  selectUserLogined,
  selectUserName,
} from '../../features/selectors';

export const NavList: FC = () => {
  const name = useSelector((state: RootState) => selectUserName(state));
  const countFavoritesMovies = useSelector((state: RootState) =>
    selectFavoriteMovies(state),
  ).length;
  const isLogined = useSelector((state: RootState) => selectUserLogined(state));
  const dispatch = useDispatch<AppDispathType>();
  const logout = () => {
    dispatch(clearCurrentUser());
    dispatch(logoutUser({ name }));
  };
  return (
    <ul className={cn(styles['menu-list'])}>
      {isLogined ? (
        <>
          <li className={cn(styles['list-item'])}>
            <NavLink
              to={routes.main}
              className={({ isActive }) =>
                cn(styles['list-link'], {
                  [styles['active']]: isActive,
                })
              }
            >
              Поиск фильмов
            </NavLink>
          </li>

          <li className={cn(styles['list-item'])}>
            <NavLink
              to={routes.favorites}
              className={({ isActive }) =>
                cn(styles['list-link'], {
                  [styles['active']]: isActive,
                })
              }
            >
              Мои фильмы
            </NavLink>
            <span className={cn(styles['circle-count'])}>
              {countFavoritesMovies || 0}
            </span>
          </li>

          <li className={cn(styles['list-item'])}>
            <a href="#" className={cn(styles['list-link'])}>
              {name}
            </a>
            <img src={user} alt="иконка пользователя" />
          </li>
          <li className={cn(styles['list-item'])}>
            <NavLink
              onClick={logout}
              className={({ isActive }) =>
                cn(styles['list-link'], {
                  [styles['active']]: isActive,
                })
              }
              to={routes.signIn}
            >
              Выйти
            </NavLink>
          </li>
        </>
      ) : (
        <li className={cn(styles['list-item'])}>
          Войти
          <img src={signIn} alt="иконка входа" />
        </li>
      )}
    </ul>
  );
};
