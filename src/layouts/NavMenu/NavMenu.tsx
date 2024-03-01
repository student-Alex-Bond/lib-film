import { NavList } from "../NavList/NavList";
import { Logo } from "../../components/Logo/Logo";
import { UserContext } from "../../context/users.context";
import { useContext, useEffect } from "react";
import { useLocalStorage } from "../../hook/useLocalStorage.js";
import styles from "./NavMenu.module.css";
import cn from "classnames";
import {
  IUserContext,
  IUserContextProps,
} from "../../context/users.context.props";
import logo from "./../../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { routes } from "../../App";

export const NavMenu = () => {
  const { currentUser, setCurrentUser } = useContext(
    UserContext
  ) as IUserContextProps;
  const [data, saveData] = useLocalStorage("users");
  const navigate = useNavigate();
  useEffect(() => {
    if (data) {
      const findedLoginedUser = data.find((user) => user.isLogined === true);
      if (findedLoginedUser) {
        setCurrentUser(findedLoginedUser);
        navigate(routes.main);
      }
    }
  }, [data]);

  useEffect(() => {
    if (data && currentUser.name) {
      const users = [currentUser, ...data];
      const formatedUsers = users
        .reduce((acc: Array<IUserContext>, user) => {
          if (!acc.find((v) => v.name == user.name)) {
            acc.push(user);
          }
          return acc;
        }, [])
        .map((user) =>
          user.name === currentUser.name ? { ...user, isLogined: true } : user
        );
      saveData(formatedUsers);
    }
  }, [currentUser.name]);

  const logOutUser = () => {
    if (data) {
      saveData(
        data.map((user) =>
          user.name === currentUser.name ? { ...user, isLogined: false } : user
        )
      );
      setCurrentUser({ name: "", isLogined: false });
      navigate(routes.signIn);
    }
  };
  return (
    <nav className={cn(styles["nav-menu"])}>
      <Logo srcLogo={logo} />
      <NavList
        isLogined={currentUser.isLogined}
        userName={currentUser.name}
        logOut={logOutUser}
      />
    </nav>
  );
};
