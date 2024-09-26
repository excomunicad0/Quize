import React from "react";
import styles from "./AnswerItem.module.css";

export const AnswerItem: React.FC<Props> = ({ answer, rightAnswer, setIsRightAnswer, setIsAnswered }) => {

    const handleCompare = () => {
        if (rightAnswer === answer.title) {
            setIsRightAnswer(true);
        }
        setIsAnswered(true)
    }

  return (
    <div className={styles.container}>
      <button onClick={handleCompare}>{answer.title}</button>
    </div>
  );
};
