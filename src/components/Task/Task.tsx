import { FC, useState } from "react";
import { ITask } from "../../interfaces";
import {
  DeleteBtn,
  Description,
  EditBtn,
  Status,
  TaskCard,
  Title,
} from "./Task.styled";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { deleteTask } from "../../redux/api";
import { TaskModal } from "../Modals/TaskModal/TaskModal";

interface ITaskProps {
  task: ITask;
}

export const Task: FC<ITaskProps> = ({ task }) => {
  const [isOpenTaskModal, setIsOpenTaskModal] = useState<boolean>(false);

  const dispatch = useDispatch<AppDispatch>();

  const handleDelete = (id: number) => {
    dispatch(deleteTask(id));
  };

  const toggleTaskModal = () => {
    setIsOpenTaskModal((prevState) => !prevState);
  };

  return (
    <TaskCard>
      <div>
        <Title>{task.title}</Title>
        <Description>{task.description}</Description>
      </div>
      <Status>Status: {task.status}</Status>
      <DeleteBtn onClick={() => handleDelete(task.id)}>
        <MdDelete size={20} />
      </DeleteBtn>
      <EditBtn onClick={toggleTaskModal}>
        <CiEdit size={20} />
      </EditBtn>
      <TaskModal
        task={task}
        isOpenTaskModal={isOpenTaskModal}
        toggleTaskModal={toggleTaskModal}
      />
    </TaskCard>
  );
};
