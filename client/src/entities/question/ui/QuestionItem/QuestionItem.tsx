import React, { useState } from "react";
import styles from "./QuestionItem.module.css";
import { Question } from "../../model";
import ModalWindow from "@/shared/ui/Modal/Modal";
import Game from "@/features/game/ui/Game/Game";
import { useDispatch } from "react-redux";
import { getAnswers } from "@/entities/answer/model/answerThunk";
import { unwrapResult } from "@reduxjs/toolkit/react";

type Props = {
  question: Question;
};
export const QuestionItem: React.FC<Props> = ({ question }) => {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();

  const handleStartGame = async () => {
    setActive(true);
    const result = await dispatch(getAnswers(question.id));
    unwrapResult(result);
    const answers = unwrapResult(result);

    // do something with answers
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <button onClick={handleStartGame}>{question.title}</button>
        <p>{question.score}</p>
      </div>
      <ModalWindow active={active} setActive={setActive}>
        <Game question={question} setActive={setActive} />
      </ModalWindow>
    </div>
  );
};
