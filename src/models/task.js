export class Task {
  constructor(data) {
    const { projectId, title, description, dueDate, priority, completed } =
      data;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = !!completed || false;
    this.projectId = projectId || defaultProjectId;
    this.deleted = false;
  }
}

const defaultProjectId = "0";

export const initTaskData = {
  title: "",
  description: "",
  dueDate: "",
  priority: "",
  completed: false,
  projectId: "",
  deleted: false,
};
