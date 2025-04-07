import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFiltersState, ISetFilters } from "../../interfaces";

const initialState: IFiltersState = {
  status: "all",
  title: "",
  description: "",
  isResetFilters: false,
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
    filtersReset: (state) => {
      state.status = "all";
      state.title = "";
      state.description = "";
    },
    setIsFilterReset: (state) => {
      state.isResetFilters = !state.isResetFilters;
    },
  },
});

export const { setFilters, filtersReset, setIsFilterReset } =
  filterSlice.actions;
export const filtersReducer = filterSlice.reducer;
