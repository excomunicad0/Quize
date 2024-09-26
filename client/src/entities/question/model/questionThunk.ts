import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { QuestionList } from '.';
import { QuestionService } from '../api';


type RejectValue = {
    message: string
}

export const getAllQuestions = createAsyncThunk<
    QuestionList,
    void,
    { rejectValue: RejectValue }
>('question/getQuestions', async (_, { rejectWithValue }) => {
    try {
        return await QuestionService.getQuestions();
    } catch (error) {
        const err = error as AxiosError<{ message: string }>;
        return rejectWithValue({
            message: err.response?.data.message || err.message,
        });
    }
});

// export const getQuestionById = createAsyncThunk<
//     Question,
//     {id: number},
//     { rejectValue: RejectValue }
// >('question/getQuestionById', async (id, { rejectWithValue }) => {
//     try {
//         return await QuestionService.getQuestionById(id);
//     } catch (error) {
//         const err = error as AxiosError<{ message: string }>;
//         return rejectWithValue({
//             message: err.response?.data.message || err.message,
//         });
//     }
// })