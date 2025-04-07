import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ITasksState,
  ITask,
  IresponseGetAllTasks,
  IAddTaskPayload,
} from "../../interfaces";
import { addTask, deleteTask, getAllTasks, updateTask } from "../api";

const initialState: ITasksState = {
  items: [],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(
        addTask.fulfilled,
        (state, action: PayloadAction<IAddTaskPayload>) => {
          const { task, filters } = action.payload;

          const isDescriptionValid = task.description
            .toLowerCase()
            .includes(filters.description?.toLowerCase());

          const isTitleValid = task.title
            .toLowerCase()
            .includes(filters.title?.toLowerCase());

          const isStatusValid =
            filters.status === "all" || task.status === filters.status;

          const isTaskValid =
            isDescriptionValid && isTitleValid && isStatusValid;

          if (filters.isResetFilters || isTaskValid) {
            state.items = [...state.items, task];
          }
        }
      )
      .addCase(
        getAllTasks.fulfilled,
        (state, action: PayloadAction<IresponseGetAllTasks>) => {
          state.items = action.payload.items;
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

export const taskReducer = taskSlice.reducer;
