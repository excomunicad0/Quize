import { axiosInstance } from "@/shared/lib/axiosInstance";

export class GameService {
  static async createGame() {
    try {
      const response = await axiosInstance.post("/games");
      return response.data.game;
    } catch (error) {
      console.error("Error creating game:", error);
      throw new Error("Error creating game");
    }
  }

  static async updateGame( gameId : number, score: number) {
    try {
      const response = await axiosInstance.put(`/games/${gameId}`, { score });

      
      return response.data;
    } catch (error) {
      console.error("Error updating game:", error);
      throw new Error("Error updating game");
    }
  }

  static async createGameUser( gameId : number, questionId : number, isRightAnswer: boolean) {
    try {
      console.log(gameId, questionId, isRightAnswer, "AXIOS CREATE USER");
      
      const response = await axiosInstance.post("/gameusers", {
        gameId,
        questionId,
        isRightAnswer
      });



      return response.data;
    } catch (error) {
      console.error("Error creating game user:", error);
      throw new Error("Error creating game user");
    }
  }

}
