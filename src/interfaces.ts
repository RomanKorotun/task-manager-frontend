export interface ICreateTaskData {
  title: string;
  description: string;
  status: string;
}

export interface ITask {
  id: number;
  title: string;
  description: string;
  status: "completed" | "not_completed";
}

export interface ITaskState {
  items: ITask[];
}

export interface IresponseGetAllTasks {
  items: ITask[];
}
