import React from 'react';
import styles from './QuestionItem.module.css';
import { Question } from '../../model';

export const QuestionItem: React.FC<Props> = ({ question }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <h1>{question.title}</h1>
        <p>{question.score}</p>
      </div>
    </div>
  );
};
