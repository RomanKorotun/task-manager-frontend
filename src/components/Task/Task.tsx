import { FC } from "react";
import { ITask } from "../../interfaces";
import { DeleteBtn, Description, Status, TaskCard, Title } from "./Task.styled";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { deleteTask } from "../../redux/api";

interface ITaskProps {
  task: ITask;
}

export const Task: FC<ITaskProps> = ({ task }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleDelete = (id: number) => {
    dispatch(deleteTask(id));
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
    </TaskCard>
  );
};
