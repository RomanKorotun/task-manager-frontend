import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITaskState, ITask, IresponseGetAllTasks } from "../../interfaces";
import { addTask, deleteTask, getAllTasks, updateTask } from "../api";

const initialState: ITaskState = {
  items: [],
};

const authSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(addTask.fulfilled, (state, action: PayloadAction<ITask>) => {
        state.items = [...state.items, action.payload];
      })
      .addCase(
        getAllTasks.fulfilled,
        (state, action: PayloadAction<IresponseGetAllTasks>) => {
          state.items = [...state.items, ...action.payload.items];
        }
      )
      .addCase(deleteTask.fulfilled, (state, action: PayloadAction<ITask>) => {
        const deletedTask = action.payload;
        state.items = state.items.filter((task) => task.id !== deletedTask.id);
      })
      .addCase(updateTask.fulfilled, (state, action: PayloadAction<ITask>) => {
        const updatedTask = action.payload;
        state.items = state.items.map((task) => {
          if (task.id === updatedTask.id) {
            return updatedTask;
          } else {
            return task;
          }
        });
      }),
});

export const taskReducer = authSlice.reducer;
