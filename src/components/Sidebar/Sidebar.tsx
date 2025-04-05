import { FC, useState } from "react";
import { CreateTaskBtn, Filters, Wrapper } from "./Sidebar.styled";
import { TaskModal } from "../TaskModal/TaskModal";
import { StatusFilter } from "../Filters/StatusFilter/StatusFilter";
import { TitleFilter } from "../Filters/TitleFilter/TitleFilter";
import { DescriptionFilter } from "../Filters/DescriptionFilter/DescriptionFilter";
import { filtersReset, setIsFilterReset } from "../../redux/filter/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";

export const Sidebar: FC = () => {
  const [isOpenTaskModal, setIsOpenTaskModal] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();

  const isResetFilters = useSelector(
    (state: RootState) => state.filters.isResetFilters
  );

  const toggleTaskModal = () => {
    setIsOpenTaskModal((prevState) => !prevState);
  };

  const handleReset = () => {
    if (!isResetFilters) {
      dispatch(setIsFilterReset());
      dispatch(filtersReset());
    }
  };

  return (
    <Wrapper>
      <CreateTaskBtn onClick={toggleTaskModal}>Create Task</CreateTaskBtn>
      <div>
        <Filters>Filters</Filters>
        <StatusFilter />
        <TitleFilter />
        <DescriptionFilter />
        <button onClick={handleReset}>Reset filters</button>
      </div>
      <TaskModal
        isOpenTaskModal={isOpenTaskModal}
        toggleTaskModal={toggleTaskModal}
      />
    </Wrapper>
  );
};
