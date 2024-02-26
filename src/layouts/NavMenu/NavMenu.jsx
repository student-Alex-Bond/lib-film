import { NavList } from "../NavList/NavList";
import { Logo } from "./../../components/Logo/Logo";
import { UserContext } from "../../context/users.context";
import { useContext, useEffect } from "react";
import { useLocalStorage } from "./../../hook/useLocalStorage.js";
import styles from "./NavMenu.module.css";
import cn from "classnames";

export const NavMenu = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [data, saveData] = useLocalStorage("users");
  useEffect(() => {
    if (data) {
      const findedIsLoginedUser = data.find((user) => user.isLogined === true);
      if (findedIsLoginedUser) {
        setCurrentUser(findedIsLoginedUser);
      }
    }
  }, [data]);

  useEffect(() => {
    if (data && currentUser.name) {
      const users = [currentUser, ...data];
      const formatedUsers = users
        .reduce((acc, user) => {
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

  const logOutUser = (event) => {
    event.preventDefault();
    saveData(
      data.map((user) =>
        user.name === currentUser.name ? { ...user, isLogined: false } : user
      )
    );
    setCurrentUser({ name: "", isLogined: false });
  };
  return (
    <nav className={cn(styles["nav-menu"])}>
      <Logo />
      <NavList
        isLogined={currentUser.isLogined}
        userName={currentUser.name}
        logOut={logOutUser}
      />
    </nav>
  );
};
