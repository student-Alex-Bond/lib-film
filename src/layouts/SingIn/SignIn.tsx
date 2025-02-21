import cn from 'classnames';
import styles from './SignIn.module.css';
import { FC } from 'react';
import { Heading } from './../../components/Heading';
import { Input } from './../../components/Input/Input';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../routes/constants';
import { useDispatch } from 'react-redux';
import { AppDispathType } from '../../store/store';
import { addUser } from '../../features/allUsers.slice';
import { Controller, useForm } from 'react-hook-form';
import { formDefaultValues, UserType } from './types';

export const SignIn: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispathType>();
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<UserType>({
    defaultValues: formDefaultValues,
  });
  const setUserName = (data: UserType) => {
    dispatch(addUser({ name: data.user }));
    reset(formDefaultValues);
    navigate(routes.main);
  };

  return (
    <div className={cn(styles['sign-in'])}>
      <Heading>Вход</Heading>
      <form>
        <Controller
          name="user"
          control={control}
          rules={{ required: 'Field is required' }}
          render={({ field }) => (
            <Input
              value={field.value}
              onChange={field.onChange}
              placeholder={'Ваше имя'}
            />
          )}
        />
        {errors && <p className={styles.error}>{errors.user?.message}</p>}
        <Button type="submit" onClick={handleSubmit(setUserName)}>
          Войти
        </Button>
      </form>
    </div>
  );
};
