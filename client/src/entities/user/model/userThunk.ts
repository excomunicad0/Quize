import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { AuthResponse } from ".";
import { UserServices } from "../api";

type RejectValue = {
  message: string;
};

export const refreshAccessToken = createAsyncThunk<
  AuthResponse,
  void,
  { rejectValue: RejectValue }
>("user/refreshAccessToken", async (_, { rejectWithValue }) => {
  try {
    return await UserServices.refreshAccessToken();
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});

export const signUp = createAsyncThunk<
  AuthResponse,
  { name: string; email: string; password: string; },
  { rejectValue: RejectValue }
>(
  "user/signUp",
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      return await UserServices.signUp(name, email, password );
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      return rejectWithValue({
        message: err.response?.data.message || err.message,
      });
    }
  }
);

export const signIn = createAsyncThunk<
  AuthResponse,
  { email: string; password: string; },
  { rejectValue: RejectValue }
>(
  "user/signIn",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      return await UserServices.signIn( email, password );
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      return rejectWithValue({
        message: err.response?.data.message || err.message,
      });
    }
  }
);

export const logout = createAsyncThunk<
  void,
  void,
  { rejectValue: RejectValue }
>("user/logout", async (_, { rejectWithValue }) => {
  try {
    await UserServices.logout();
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});