import cn from "classnames";
import styles from "./SignIn.module.css";
import { FC, useContext, useRef, useState } from "react";
import { Heading } from "./../../components/Heading/Heading.jsx";
import { Input } from "./../../components/Input/Input.jsx";
import { Button } from "../../components/Button/Button.jsx";
import { UserContext } from "../../context/users.context.jsx";
import { IUserContextProps } from "../../context/users.context.props";
import { useNavigate } from "react-router-dom";

export const SignIn:FC = () => {
  const [isValid, setIsValid] = useState<boolean>(true);
  const userName = useRef<HTMLInputElement>(null);
  const { setCurrentUser } = useContext(UserContext) as IUserContextProps;
  const navigate = useNavigate();

  const setUserName = () => {
    if(userName.current) {
      const valueInput = userName.current.value.trim();
    if (!valueInput) {
      setIsValid(false);
    } else {
      setIsValid(true);
      const newUser = { name: valueInput, isLogined: true };
      setCurrentUser(newUser);
      userName.current.value = '';
      navigate('/');
    }
  };

    }
    
  return (
    <div className={cn(styles["sign-in"])}>
      <Heading>Вход</Heading>
      <Input
        ref={userName}
        isValid={isValid}
        isIcon={false}
        placeholder={"Ваше имя"}
      />
      <Button onClick={setUserName}>Войти</Button>
    </div>
  );
};
