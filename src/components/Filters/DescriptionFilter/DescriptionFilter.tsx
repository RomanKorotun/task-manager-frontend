import { FC, useRef } from "react";
import { Input, Title, Wrapper } from "./DescriptionFilter.styled";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { setFilters } from "../../../redux/filter/filterSlice";
import { actionFilter } from "../../../redux/task/taskSlice";

export const DescriptionFilter: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const description = useSelector(
    (state: RootState) => state.filters.description
  );
  const timer = useRef<number | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilters({ description: event.target.value }));
    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = window.setTimeout(() => {
      console.log("setTimeout");
      dispatch(actionFilter());
    }, 1000);
  };
  return (
    <Wrapper>
      <Title>Description</Title>
      <Input type="text" onChange={handleChange} value={description} />
    </Wrapper>
  );
};
