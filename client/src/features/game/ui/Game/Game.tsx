import React from "react";
import styles from "./Game.module.css";

type GameProps = {};

export const Game: React.FC = ({ question }) => {
  const dispatch = useAppDispatch();
  const { answers } = useAppSelector((state) => state.answerList);
  const { game } = useAppSelector((state) => state.game);
  const [isRightAnswer, setIsRightAnswer] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAnswers(question.id));
  }, []);

  const handleAnswered = () => {
    if (isRightAnswer) {
      dispatch(createGameUser(game.id, question.id, isRightAnswer));
    }
  };

  const handleReturn = () => {
    setIsAnswered(false);
    setIsRightAnswer(false);    
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <h1>{question.title}</h1>
      {answers &&
        answers.map((answer) => (
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
          <button>На главную</button>
        </div>
      )}
    </div>
  );
};

export default Game;
