import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ICreateTaskData } from "../interfaces";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

export const addTask = createAsyncThunk(
  "task/addTask",
  async (task: ICreateTaskData, thunkApi) => {
    try {
      const response = await axios.post("/tasks", task);
      return response.data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return thunkApi.rejectWithValue(error.message);
      }
      return thunkApi.rejectWithValue("Error");
    }
  }
);
