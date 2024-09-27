import { axiosInstance } from '@/shared/lib/axiosInstance';

export class AnswerServices {
  static async getAnswers(questionId: number) {
    try {
      const response = await axiosInstance.get(`/answers/${questionId}`);
      return response.data.answers;
    } catch (error) {
      console.error('Error fetching questions:', error);
      throw new Error('Error fetching questions:');
    }
  }
}
