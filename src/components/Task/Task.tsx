import { FC } from "react";
import { ITask } from "../../interfaces";
import { Description, Status, TaskCard, Title } from "./Task.styled";

interface ITaskProps {
  task: ITask;
}

export const Task: FC<ITaskProps> = ({ task }) => {
  console.log(task);
  return (
    <TaskCard>
      <div>
        <Title>{task.title}</Title>
        <Description>{task.description}</Description>
      </div>
      <Status>Status: {task.status}</Status>
    </TaskCard>
  );
};
