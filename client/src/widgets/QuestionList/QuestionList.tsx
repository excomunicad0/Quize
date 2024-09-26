import React, { useEffect } from 'react'
import styles from './QuestionList.module.css'
import { useAppDispatch } from '@/shared/hooks/reduxhooks';
import { QuestionItem } from '@/entities/question/ui/QuestionItem/QuestionItem';


export const QuestionList: React.FC = () => {
    const { questions } = useAppSelector((state) => state.questionList);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllQuestions());
    }, [dispatch])

  return (
    <div className={styles.container}>
    <div className={styles.list}>
      {questions &&
        questions.map((question) => (
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