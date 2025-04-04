import { FC, useState } from "react";
import { CreateTaskBtn, Wrapper } from "./Sidebar.styled";
import { TaskModal } from "../Modals/TaskModal/TaskModal";

export const Sidebar: FC = () => {
  const [isOpenTaskModal, setIsOpenTaskModal] = useState<boolean>(false);

  const toggleTaskModal = () => {
    setIsOpenTaskModal((prevState) => !prevState);
  };
  return (
    <Wrapper>
      <CreateTaskBtn onClick={toggleTaskModal}>Create Task</CreateTaskBtn>
      <div>Filters</div>
      <TaskModal
        isOpenTaskModal={isOpenTaskModal}
        toggleTaskModal={toggleTaskModal}
      />
    </Wrapper>
  );
};
