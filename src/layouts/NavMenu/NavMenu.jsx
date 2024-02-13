import { NavList } from "../NavList/NavList";
import { Logo } from "./../../components/Logo/Logo";
import styles from "./NavMenu.module.css";
import cn from "classnames";

export const NavMenu = () => {
  return (
    <nav className={cn(styles["nav-menu"])}>
      <Logo />
      <NavList isLogined={false} userName={"Anton"} />
    </nav>
  );
};
