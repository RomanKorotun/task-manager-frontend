import { FC } from "react";
import { Input, Title, Wrapper } from "./DescriptionFilter.styled";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import {
  setFilters,
  setIsFilterReset,
} from "../../../redux/filter/filterSlice";

export const DescriptionFilter: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const description = useSelector(
    (state: RootState) => state.filters.description
  );
  const isResetFilters = useSelector(
    (state: RootState) => state.filters.isResetFilters
  );
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilters({ description: event.target.value }));
    if (isResetFilters) {
      dispatch(setIsFilterReset());
    }
  };
  return (
    <Wrapper>
      <Title>Description</Title>
      <Input type="text" onChange={handleChange} value={description} />
    </Wrapper>
  );
};
