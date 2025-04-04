import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ICreateTaskData, IGetAllTasks, IUpdateTaskData } from "../interfaces";

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

export const getAllTasks = createAsyncThunk(
  "task/getAllTasks",
  async ({ status, title, description }: IGetAllTasks, thunkApi) => {
    try {
      const response = await axios.get(
        `/tasks?title=${title}&description=${description}&status=${status}`
      );
      return response.data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return thunkApi.rejectWithValue(error.message);
      }
      return thunkApi.rejectWithValue("Error");
    }
  }
);

export const deleteTask = createAsyncThunk(
  "task/deleteTask",
  async (id: number, thunkApi) => {
    try {
      const response = await axios.delete(`/tasks/${id}`);
      return response.data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return thunkApi.rejectWithValue(error.message);
      }
      return thunkApi.rejectWithValue("Error");
    }
  }
);

export const updateTask = createAsyncThunk(
  "task/updateTask",
  async ({ id, values }: IUpdateTaskData, thunkApi) => {
    try {
      const response = await axios.put(`/tasks/${id}`, values);
      return response.data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return thunkApi.rejectWithValue(error.message);
      }
      return thunkApi.rejectWithValue("Error");
    }
  }
);
