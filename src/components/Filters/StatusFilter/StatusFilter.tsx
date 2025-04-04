import { FC } from "react";
import { Label, RadioOptions, Title, Wrapper } from "./StatusFilter.styled";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { setFilters } from "../../../redux/filter/filterSlice";
import { actionFilter } from "../../../redux/task/taskSlice";

export const StatusFilter: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const status = useSelector((state: RootState) => state.filters.status);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilters({ status: event.target.value }));
    dispatch(actionFilter());
  };

  return (
    <Wrapper>
      <Title>Status</Title>
      <RadioOptions>
        <Label>
          <input
            type="radio"
            name="status"
            value="all"
            checked={status === "all"}
            onChange={handleChange}
          />
          All
        </Label>
        <Label>
          <input
            type="radio"
            name="status"
            value="completed"
            checked={status === "completed"}
            onChange={handleChange}
          />
          Completed
        </Label>
        <Label>
          <input
            type="radio"
            name="status"
            value="not_completed"
            checked={status === "not_completed"}
            onChange={handleChange}
          />
          Not Completed
        </Label>
      </RadioOptions>
    </Wrapper>
  );
};
