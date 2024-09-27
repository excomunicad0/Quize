export type Game = {
    id: number
    score: number
    userId: number
    createdAt: Date
    updatedAt: Date
}

export type GameList = Game[]

export type GameUser = {
    id: number;
    questionId: number;
    gameId: number;
    isRightAnswer: boolean;
    createdAt: Date;
    updatedAt: Date;
}