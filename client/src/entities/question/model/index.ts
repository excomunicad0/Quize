export type Question = {
    id: number;
    title: string;
    image: string  
    score: number
    rightAnswer: string
    themeId: number
}

export type QuestionList = Question[]