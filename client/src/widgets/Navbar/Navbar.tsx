import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import { ROUTES } from "@/app/router/routes";
import { logout, UserCard } from "@/entities/user";
import Button, { ThemeButton } from "@/shared/ui/Button/Button";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxhooks";
import Loader from "@/shared/ui/Loader/Loader";
import { resetGame } from "@/entities/game/model/gameThunk";

export const Navbar: React.FC = () => {
  const { user, loading } = useAppSelector((state) => state.user);
  const { game } = useAppSelector((state) => state.game);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handlelogout = () => {
    dispatch(logout());
    dispatch(resetGame());
  };

  const handleSignIn = () => {
    navigate(ROUTES.SIGNIN);
  };

  const handleSignUp = () => {
    navigate(ROUTES.SIGNUP);
  };

  const handleExitGame = () => {
    navigate(ROUTES.STAT);
  };

  const handleMain = () => {
    dispatch(resetGame());
  };

  if (loading) {
    return (
      <div className={styles.container}>
        <Loader />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        {user && (
          <Button theme={ThemeButton.PRIMARY} onClick={handleMain}>
            <Link to={ROUTES.HOME} className={styles.link}>
              Главная
            </Link>
          </Button>
        )}
      </div>
      <div className={styles.logreg}>
        {user ? (
          <>
            <UserCard user={user} />
            {game && (
              <Button theme={ThemeButton.PRIMARY} onClick={handleExitGame}>
                Закончить игру
              </Button>
            )}
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
    </div>
  );
};
