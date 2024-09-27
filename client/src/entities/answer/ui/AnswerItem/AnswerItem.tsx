import React, { ReactElement } from 'react';
import styles from './AnswerItem.module.css';
import { Answer } from '../../model';

type Props = {
  answer: Answer;
  rightAnswer: string;
  setIsRightAnswer: (rightAnswer: boolean) => void;
  setIsAnswered: (isAnswered: boolean) => void;
};

export const AnswerItem: React.FC<Props> = ({
  answer,
  rightAnswer,
  setIsRightAnswer,
  setIsAnswered,
}): JSX.Element => {
  const handleCompare = () => {
    if (rightAnswer === answer.title) {
      setIsRightAnswer(true);
    }
    setIsAnswered(true);
  };
  return (
    <div className={styles.container}>
      <button onClick={handleCompare}>{answer.title}</button>
    </div>
  );
};
