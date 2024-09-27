export type Question = {

  id: number;
  themeId: number;
  image: string;
  title: string;
  rightAnswer: string;
  score: number;
  createdAt: Date;
  updatedAt: Date;
};

export type QuestionList = {
  questions: Question[];
};

