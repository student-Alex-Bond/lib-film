import cn from "classnames";
import styles from "./NavList.module.css";
import user from "../../assets/user.svg";
import signIn from "../../assets/sign-in.svg";
import { FC } from "react";
import { INavList } from "./NavList.props";
import { NavLink } from "react-router-dom";
import { routes } from "../../App";

export const NavList: FC<INavList> = ({
  isLogined = false,
  userName = "",
  logOut,
}) => {
  return (
    <ul className={cn(styles["menu-list"])}>
      {isLogined ? (
        <>
          <li className={cn(styles["list-item"])}>
            <NavLink
              to={routes.main}
              className={({ isActive }) =>
                cn(styles["list-link"], {
                  [styles["active"]]: isActive,
                })
              }
            >
              Поиск фильмов
            </NavLink>
          </li>

          <li className={cn(styles["list-item"])}>
            <NavLink
              to={routes.favorites}
              className={({ isActive }) =>
                cn(styles["list-link"], {
                  [styles["active"]]: isActive,
                })
              }
            >
              Мои фильмы
            </NavLink>
            <span className={cn(styles["circle-count"])}>2</span>
          </li>

          <li className={cn(styles["list-item"])}>
            <a href="#" className={cn(styles["list-link"])}>
              {userName}
            </a>
            <img src={user} alt="иконка пользователя" />
          </li>
          <li className={cn(styles["list-item"])}>
            <NavLink
              onClick={logOut}
              className={({ isActive }) =>
                cn(styles["list-link"], {
                  [styles["active"]]: isActive,
                })
              }
              to={routes.signIn}
            >
              Выйти
            </NavLink>
          </li>
        </>
      ) : (
        <li className={cn(styles["list-item"])}>
          <NavLink
            to={routes.signIn}
            className={({ isActive }) =>
              cn(styles["list-link"], {
                [styles["active"]]: isActive,
              })
            }
          >
            Войти
            <img src={signIn} alt="иконка входа" />
          </NavLink>
        </li>
      )}
    </ul>
  );
};
