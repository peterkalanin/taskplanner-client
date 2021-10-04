export interface TaskCreate {
  name: string;
  description?: string;
  date?: Date;
  tags?: string[];
  checklists?: Checklist[];
}

export interface Task extends TaskCreate {
  id: string;
  userId: string;
  deleted?: boolean;
}

export interface Checklist {
  id: string;
  taskId: string;
  name: string;
  state?: string;
  prio?: number;
  checklistItems: ChecklistItem[];
}

export interface ChecklistItem {
  id: string;
  checklistId: string;
  name: string;
  state: string;
  prio?: number;
  date?: Date;
}