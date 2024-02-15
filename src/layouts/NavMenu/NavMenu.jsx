import { NavList } from "../NavList/NavList";
import { Logo } from "./../../components/Logo/Logo";
import { UserContext } from "../../context/users.context";
import { useContext } from "react";
import { useLocalStorage } from "./../../hook/useLocalStorage.js";
import styles from "./NavMenu.module.css";
import cn from "classnames";

export const NavMenu = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [data, saveData] = useLocalStorage("users");

  const logOutUser = (event) => {
    event.preventDefault();
    const dataFromLocalStorage = JSON.parse(localStorage.getItem("users"));
    saveData(
      dataFromLocalStorage.map((user) =>
        user.name === currentUser.name ? { ...user, isLogined: false } : user
      )
    );
    setCurrentUser({});
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
