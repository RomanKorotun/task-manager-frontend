import { configureStore } from "@reduxjs/toolkit";
import { taskReducer } from "./task/taskSlice";
import { filtersReducer } from "./filter/filterSlice";

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    filters: filtersReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
