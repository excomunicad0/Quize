/// DELETE FILE

import { axiosInstance } from '@/shared/lib/axiosInstance';
import { QuestionList } from '../model';

export class QuestionService {
  static async getQuestions(): Promise<QuestionList> {
    const response = await axiosInstance.get('/questions');
    console.log(response);
    return response.data;
  }
}
