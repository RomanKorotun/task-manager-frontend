export interface ICreateTaskData {
  title: string;
  description: string;
  status: string;
}

export interface IGetAllTasks {
  status: string;
  title: string;
  description: string;
}

export interface IUpdateTaskData {
  id: number;
  values: { title?: string; description?: string; status?: string };
}

export interface ITask {
  id: number;
  title: string;
  description: string;
  status: "completed" | "not_completed";
}

export interface ITasksState {
  items: ITask[];
}

export interface IFiltersState {
  status: string;
  title: string;
  description: string;
}

export interface ISetFilters {
  status?: string;
  title?: string;
  description?: string;
}

export interface IresponseGetAllTasks {
  items: ITask[];
}
