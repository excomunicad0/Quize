export type Answer = {
  id: number;
  questionId: number;
  title: string;
  createdAt: Date;
  updatedAt: Date;
};

export type AnswerList = {
  answers: Answer[];
};
