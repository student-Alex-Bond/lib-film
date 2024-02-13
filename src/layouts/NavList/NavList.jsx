import cn from "classnames";
import styles from "./NavList.module.css";
import user from "../../assets/user.svg";
import signIn from "../../assets/sign-in.svg";

export const NavList = ({ isLogined, userName }) => {
  return (
    <ul className={cn(styles["menu-list"])}>
      <li className={cn(styles["list-item"])}>
        <a href="#" className={cn(styles["list-link"])}>
          Поиск фильмов
        </a>
      </li>
      <li className={cn(styles["list-item"])}>
        <a href="#" className={cn(styles["list-link"], styles["active"])}>
          Мои фильмы
        </a>
        <span className={cn(styles["circle-count"])}>2</span>
      </li>
      {isLogined && (
        <li className={cn(styles["list-item"])}>
          <a href="#" className={cn(styles["list-link"])}>
            {userName}
          </a>
          <img src={user} alt="иконка пользователя" />
        </li>
      )}
      <li className={cn(styles["list-item"])}>
        <a href="#" className={cn(styles["list-link"])}>
          Войти
        </a>
        <img src={signIn} alt="иконка входа" />
      </li>
    </ul>
  );
};
