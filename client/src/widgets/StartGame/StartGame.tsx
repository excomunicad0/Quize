import { createGame } from "@/entities/game/model/gameThunk";
import { getAllQuestions } from "@/entities/question/model/questionThunk";
import { useAppDispatch } from "@/shared/hooks/reduxhooks";
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./StartGame.module.css";
import { ThemeButton } from "@/shared/ui/Button/Button";
import  Button  from "@/shared/ui/Button/Button";

export const StartGame: React.FC = () => {
  const navigate = useNavigate();
const dispatch = useAppDispatch();
  const handleStartSession = async () => {
    await dispatch(createGame());
    await dispatch(getAllQuestions());
    navigate("/themes");
  };

  return (
    <div className={styles.container}>
      <h1>QUIZE</h1>
      <Button theme={ThemeButton.PRIMARY} onClick={handleStartSession}>Начать игру</Button>
    </div>
  );
};
