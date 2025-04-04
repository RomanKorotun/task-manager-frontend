import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { getAllTasks } from "../../redux/api";
import { Task } from "../Task/Task";
import { Item, List, Title } from "./TaskList.styled";

export const TaskList: FC = () => {
  const items = useSelector((state: RootState) => state.task.items);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getAllTasks());
  }, [dispatch]);

  return (
    <>
      <Title>My tasks</Title>
      <List>
        {items.map((task) => (
          <Item key={task.id}>
            <Task task={task} />
          </Item>
        ))}
      </List>
    </>
  );
};
