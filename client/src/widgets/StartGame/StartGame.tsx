import { createGame } from "@/entities/game/model/gameThunk";
import { getAllQuestions } from "@/entities/question/model/questionThunk";
import { useAppDispatch } from "@/shared/hooks/reduxhooks";
import React from "react";
import { useNavigate } from "react-router-dom";

export const StartGame: React.FC = () => {
  const navigate = useNavigate();
const dispatch = useAppDispatch();
  const handleStartGame = async () => {
    await dispatch(createGame());
    await dispatch(getAllQuestions());
    navigate("/themes");
  };

  return (
    <div>
      <h1>QUIZE</h1>
      <button onClick={handleStartGame}>Начать игру</button>
    </div>
  );
};
