import { axiosInstance } from "@/shared/lib/axiosInstance";


export class QuestionServices {
    static getQuestions = async () => {
        try {
            const response = await axiosInstance.get("/questions");
            return response.data;
        } catch (error) {
            console.error("Error fetching questions:", error);
            throw new Error("Error fetching questions");
        }
    }
}