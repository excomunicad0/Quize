import { axiosInstance } from '@/shared/lib/axiosInstance';

export class ThemeServices {
  static getThemes = async () => {
    try {
      const response = await axiosInstance.get('/themes');
      return response.data.themes;
    } catch (error) {
      console.error('Error fetching questions:', error);
      throw new Error('Error fetching questions');
    }
  };
}
