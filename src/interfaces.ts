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

interface IFilters {
  description: string;
  isResetFilters: boolean;
  status: string;
  title: string;
}

export interface IAddTaskPayload {
  task: ITask;
  filters: IFilters;
}

export interface ITasksState {
  items: ITask[];
}

export interface IFiltersState {
  status: string;
  title: string;
  description: string;
  isResetFilters: boolean;
}

export interface ISetFilters {
  status?: string;
  title?: string;
  description?: string;
}

export interface IresponseGetAllTasks {
  items: ITask[];
}
