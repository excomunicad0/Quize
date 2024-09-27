import React, { ReactElement } from 'react';
import styles from './AnswerItem.module.css';
import { Answer } from '../../model';
import Button, { ThemeButton } from '@/shared/ui/Button/Button';

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
      <Button theme={ThemeButton.PRIMARY} >
      <h1 className={styles.title} onClick={handleCompare}>{answer.title}</h1>
        </Button>
    </div>
  );
};
