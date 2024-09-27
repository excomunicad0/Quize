import { axiosInstance } from '@/shared/lib/axiosInstance';

export class QuestionService {
  static async getQuestions() {
    try {
      const response = await axiosInstance.get('/questions');
      return response.data.questions;
    } catch (error) {
      console.error('Error fetching questions:', error);
      throw new Error('Error fetching questions');
    }
  }
}
