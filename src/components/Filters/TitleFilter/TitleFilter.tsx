import { FC, useRef } from "react";
import { Input, Title, Wrapper } from "./TitleFilter.styled";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { setFilters } from "../../../redux/filter/filterSlice";
import { actionFilter } from "../../../redux/task/taskSlice";

export const TitleFilter: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const title = useSelector((state: RootState) => state.filters.title);
  const timer = useRef<number | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilters({ title: event.target.value }));
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
      <Title>Title</Title>
      <Input type="text" onChange={handleChange} value={title} />
    </Wrapper>
  );
};
