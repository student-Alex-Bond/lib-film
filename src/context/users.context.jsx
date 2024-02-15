import { createContext, useState } from "react";

export const UserContext = createContext({ name: "", isLogined: false });

export const UserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(UserContext);
  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};
