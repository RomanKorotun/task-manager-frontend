import { FC, useState } from "react";
import { CreateTaskBtn, Filters, Wrapper } from "./Sidebar.styled";
import { TaskModal } from "../TaskModal/TaskModal";
import { StatusFilter } from "../Filters/StatusFilter/StatusFilter";
import { TitleFilter } from "../Filters/TitleFilter/TitleFilter";
import { DescriptionFilter } from "../Filters/DescriptionFilter/DescriptionFilter";
import { filtersReset } from "../../redux/filter/filterSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { actionFilter } from "../../redux/task/taskSlice";

export const Sidebar: FC = () => {
  const [isOpenTaskModal, setIsOpenTaskModal] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();

  const toggleTaskModal = () => {
    setIsOpenTaskModal((prevState) => !prevState);
  };

  const handleReset = () => {
    dispatch(filtersReset());
    dispatch(actionFilter());
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
