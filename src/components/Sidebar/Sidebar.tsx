import { FC, useState } from "react";
import { CreateTaskBtn, Filters, Wrapper } from "./Sidebar.styled";
import { TaskModal } from "../TaskModal/TaskModal";
import { StatusFilter } from "../Filters/StatusFilter/StatusFilter";
import { TitleFilter } from "../Filters/TitleFilter/TitleFilter";
import { DescriptionFilter } from "../Filters/DescriptionFilter/DescriptionFilter";

export const Sidebar: FC = () => {
  const [isOpenTaskModal, setIsOpenTaskModal] = useState<boolean>(false);

  const toggleTaskModal = () => {
    setIsOpenTaskModal((prevState) => !prevState);
  };
  return (
    <Wrapper>
      <CreateTaskBtn onClick={toggleTaskModal}>Create Task</CreateTaskBtn>
      <div>
        <Filters>Filters</Filters>
        <StatusFilter />
        <TitleFilter />
        <DescriptionFilter />
      </div>
      <TaskModal
        isOpenTaskModal={isOpenTaskModal}
        toggleTaskModal={toggleTaskModal}
      />
    </Wrapper>
  );
};
