import { FC } from "react";
import { Input, Title, Wrapper } from "./TitleFilter.styled";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import {
  setFilters,
  setIsFilterReset,
} from "../../../redux/filter/filterSlice";

export const TitleFilter: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const title = useSelector((state: RootState) => state.filters.title);
  const isResetFilters = useSelector(
    (state: RootState) => state.filters.isResetFilters
  );
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilters({ title: event.target.value }));
    if (isResetFilters) {
      dispatch(setIsFilterReset());
    }
  };
  return (
    <Wrapper>
      <Title>Title</Title>
      <Input type="text" onChange={handleChange} value={title} />
    </Wrapper>
  );
};
