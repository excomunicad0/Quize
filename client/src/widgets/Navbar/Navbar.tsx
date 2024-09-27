import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';
import { ROUTES } from '@/app/router/routes';
import { logout, UserCard } from '@/entities/user';
import Button, { ThemeButton } from '@/shared/ui/Button/Button';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/reduxhooks';
import Loader from '@/shared/ui/Loader/Loader';

export const Navbar: React.FC = () => {
  const { user, loading } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate()

  const handlelogout = () => {
    dispatch(logout());
  };

  const handleSignIn = () => {
    navigate(ROUTES.SIGNIN);
  };

  const handleSignUp = () => {
    navigate(ROUTES.SIGNUP);
  };

  if(loading) {
    return (
      <div className={styles.container}>
      <Loader />
    </div>
    )
  }

  return (
    <div className={styles.container}>
      <Button theme={ThemeButton.PRIMARY}>
        <Link to={ROUTES.HOME}>Главная</Link>
      </Button>
      {user ? (
        <>
          <UserCard user={user} />
          <Button theme={ThemeButton.DANGER} onClick={handlelogout}>
            Выйти
          </Button>
        </>
      ) : (
        <>
          <Button theme={ThemeButton.PRIMARY} onClick={handleSignIn}>
            Войти
          </Button>

          <Button theme={ThemeButton.PRIMARY} onClick={handleSignUp}>
            Регистрация
          </Button>
        </>
      )}
    </div>
  );
};