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
  const isResetFilters = useSelector(
    (state: RootState) => state.filters.isResetFilters
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
  }, [dispatch, status, title, description]);

  useEffect(() => {
    if (isResetFilters) {
      dispatch(getAllTasks({ status, title, description }));
    }

    if (status !== prevStatus.current && !isResetFilters) {
      dispatch(getAllTasks({ status, title, description }));
      prevStatus.current = status;
    }

    if (
      (title !== prevTitle.current ||
        description !== prevDescription.current) &&
      !isResetFilters
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
  }, [status, title, description, isResetFilters, dispatch]);

  return (
    <>
      <Title>My tasks</Title>
      {items.length === 0 && <div>No tasks found ...</div>}
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
