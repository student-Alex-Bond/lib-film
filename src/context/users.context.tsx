import { ReactNode, createContext, useState, FC } from "react";
import { IUserContext, IUserContextProps } from "./users.context.props";

export const UserContext = createContext<IUserContextProps | null>(
  null
);

export const UserContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentUser, setCurrentUser] = useState<IUserContext>({
    name: "",
    isLogined: false,
  });
  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};
