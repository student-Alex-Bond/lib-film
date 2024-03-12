import { FC } from "react";
import { NavMenu } from "../NavMenu/NavMenu";
import { Outlet } from "react-router-dom";

export const Layout: FC = () => {
  return (
    <>
      <NavMenu />
      <Outlet />
    </>
  );
};
