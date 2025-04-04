export interface ICreateTaskData {
  title: string;
  description: string;
  status: string;
}

export interface Task {
  id: number;
  title: string;
  description: string;
  status: "completed" | "not_completed";
}

export interface ITaskState {
  items: Task[];
}
