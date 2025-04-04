import { FC, useState } from "react";
import { CreateTaskBtn, Wrapper } from "./Sidebar.styled";
import { CreateTaskModal } from "../Modals/CreateTaskModal/CreateTaskModal";

export const Sidebar: FC = () => {
  const [isOpenCreateTaskModal, setIsOpenCreateTaskModal] =
    useState<boolean>(false);

  const toggleCreateTaskModal = () => {
    setIsOpenCreateTaskModal((prevState) => !prevState);
  };
  return (
    <Wrapper>
      <CreateTaskBtn onClick={toggleCreateTaskModal}>Create Task</CreateTaskBtn>
      <div>Filters</div>
      <CreateTaskModal
        isOpenCreateTaskModal={isOpenCreateTaskModal}
        toggleCreateTaskModal={toggleCreateTaskModal}
      />
    </Wrapper>
  );
};
