import cn from "classnames";
import styles from "./SignIn.module.css";
import { useContext, useRef, useState } from "react";
import { Heading } from "./../../components/Heading/Heading.jsx";
import { Input } from "./../../components/Input/Input.jsx";
import { Button } from "../../components/Button/Button.jsx";
import { useLocalStorage } from "../../hook/useLocalStorage.js";
import { UserContext } from "../../context/users.context.jsx";

export const SignIn = () => {
  const [isValid, setIsValid] = useState(true);
  const userName = useRef(null);
  const [data, saveData] = useLocalStorage("users");
  const { setCurrentUser } = useContext(UserContext);

  const setUserName = () => {
    const valueInput = userName.current.value.trim();
    if (!valueInput) {
      setIsValid(false);
    } else {
      setIsValid(true);
      const newUser = { name: valueInput, isLogined: true };
      saveData([newUser, ...data]);
      setCurrentUser(newUser);
      userName.current.value = null;
    }
  };
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
