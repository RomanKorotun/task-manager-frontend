import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFiltersState, ISetFilters } from "../../interfaces";

const initialState: IFiltersState = {
  status: "all",
  title: "",
  description: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<ISetFilters>) => {
      const { status, title, description } = action.payload;
      if (status !== undefined) {
        state.status = status;
      }
      if (title !== undefined) {
        state.title = title;
      }
      if (description !== undefined) {
        state.description = description;
      }
    },
  },
});

export const { setFilters } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;
