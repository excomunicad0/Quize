import React, { useEffect, useState } from "react";
import styles from "./Game.module.css";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxhooks";
import { useNavigate } from "react-router-dom";
import { AnswerItem } from "@/entities/answer/ui/AnswerItem/AnswerItem";
import { Question } from "@/entities/question/model";
import { Answer } from "@/entities/answer/model";

type Props = {
  question: Question;
  setActive: (active: boolean) => void;
}

export const Game: React.FC<Props> = ({ question, setActive}) => {
  const dispatch = useAppDispatch();
  const { answers } = useAppSelector((state) => state.answerList);
  const { game } = useAppSelector((state) => state.game);
  const [isRightAnswer, setIsRightAnswer] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAnswers(question.id));
  }, []);

  const handleReturn = () => {
    if (isRightAnswer) {
      await dispatch(createGameUser(game.id, question.id, isRightAnswer));
      await dispatch(updateGame(game.id, question.score));
    }
    setIsAnswered(false);
    setIsRightAnswer(false);    
    setActive(false);
  };

  return (
    <div className={styles.container}>
      <h1>{question.title}</h1>
      {answers &&
        answers.map((answer : Answer) => (
          <AnswerItem
            key={answer.id}
            answer={answer}
            rightAnswer={question.rightAnswer}
            setIsRightAnswer={setIsRightAnswer}
            setIsAnswered={setIsAnswered}
            
          />
        ))}
      {isAnswered && (
        <div>
          {isRightAnswer ? (
            <h1>Верно!</h1>
          ) : (
            <h1>Неверно, правильный ответ: {question.rightAnswer}</h1>
          )}
          <button onClick={handleReturn}>Назад</button>
        </div>
      )}
    </div>
  );
};

export default Game;
