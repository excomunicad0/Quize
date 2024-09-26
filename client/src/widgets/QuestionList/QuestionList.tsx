import React, { useEffect } from 'react'
import styles from './QuestionList.module.css'
import { useAppDispatch, useAppSelector } from '@/shared/hooks/reduxhooks';
import { QuestionItem } from '@/entities/question/ui/QuestionItem/QuestionItem';
import { Question } from '@/entities/question/model';


export const QuestionList: React.FC = () => {
    const { questions } = useAppSelector((state) => state.questionList.);
    const { gamesUser } = useAppSelector((state) => state.gameUserList);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllQuestions());
        dispatch(getAllGamesUser())
    }, [dispatch])

  return (
    <div className={styles.container}>
    <div className={styles.list}>
      {questions &&
        questions.map((question: Question) => (
          <QuestionItem
            key={question.id}
            question={question}
          />
        ))}
    </div>
  </div>
  )
}

export default QuestionList