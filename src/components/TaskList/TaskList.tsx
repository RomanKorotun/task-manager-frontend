import { FC, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { getAllTasks } from "../../redux/api";
import { Task } from "../Task/Task";
import { Item, List, Title } from "./TaskList.styled";

export const TaskList: FC = () => {
  const items = useSelector((state: RootState) => state.tasks.items);
  const status = useSelector((state: RootState) => state.filters.status);
  const title = useSelector((state: RootState) => state.filters.title);
  const description = useSelector(
    (state: RootState) => state.filters.description
  );

  const dispatch = useDispatch<AppDispatch>();

  const isFirstMounting = useRef(true);
  const timer = useRef<number | null>(null);
  const prevStatus = useRef(status);
  const prevTitle = useRef(title);
  const prevDescription = useRef(description);

  useEffect(() => {
    if (isFirstMounting.current) {
      dispatch(getAllTasks({ status, title, description }));
      isFirstMounting.current = false;
    }

    if (status !== prevStatus.current) {
      dispatch(getAllTasks({ status, title, description }));
      prevStatus.current = status;
    }

    if (
      title !== prevTitle.current ||
      description !== prevDescription.current
    ) {
      if (timer.current) {
        clearTimeout(timer.current);
      }

      timer.current = window.setTimeout(() => {
        dispatch(getAllTasks({ status, title, description }));
      }, 1000);

      prevTitle.current = title;
      prevDescription.current = description;
    }

    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, [status, title, description, dispatch]);

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
