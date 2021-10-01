export interface TaskCreate {
  name: string;
  description: string;
  date: Date;
  tags: string[];
}

export interface Task extends TaskCreate {
  id: string;
}
