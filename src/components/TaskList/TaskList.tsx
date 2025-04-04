import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export const TaskList: FC = () => {
  const items = useSelector((state: RootState) => state.task.items);
  console.log(items);
  return <div>TaskList</div>;
};
