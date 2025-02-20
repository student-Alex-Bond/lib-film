import cn from 'classnames';
import styles from './SignIn.module.css';
import { FC, useRef, useState } from 'react';
import { Heading } from './../../components/Heading/Heading.jsx';
import { Input } from './../../components/Input/Input.jsx';
import { Button } from '../../components/Button/Button.jsx';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../routes/routes';
import { useDispatch } from 'react-redux';
import { AppDispathType } from '../../store/store';
import { addUser } from '../../features/allUsers.slice';

export const SignIn: FC = () => {
  const [isValid, setIsValid] = useState(true);
  const userName = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispathType>();

  const setUserName = () => {
    if (userName.current) {
      const valueInput = userName.current.value.trim();
      if (!valueInput) {
        setIsValid(false);
      } else {
        setIsValid(true);
        dispatch(addUser({ name: valueInput }));
        userName.current.value = '';
        navigate(routes.main);
      }
    }
  };

  return (
    <div className={cn(styles['sign-in'])}>
      <Heading>Вход</Heading>
      <Input ref={userName} isValid={isValid} isIcon={false} placeholder={'Ваше имя'} />
      <Button type="button" onClick={setUserName}>
        Войти
      </Button>
    </div>
  );
};
