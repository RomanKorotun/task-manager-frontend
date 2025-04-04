import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITaskState, Task } from "../../interfaces";
import { addTask } from "../api";

const initialState: ITaskState = {
  items: [],
};

const authSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(addTask.fulfilled, (state, action: PayloadAction<Task>) => {
      state.items = [...state.items, action.payload];
    }),
});

export const taskReducer = authSlice.reducer;
