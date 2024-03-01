export interface IUserContext {
  name: string;
  isLogined: boolean;
}

export interface IUserContextProps {
  currentUser: IUserContext;
  setCurrentUser: (user: IUserContext) => void;
}
