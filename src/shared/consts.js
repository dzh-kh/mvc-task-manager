export const endpoints = {
  TASKS: "tasks",
  PROJECTS: "projects",
};

export const priorities = {
  LOW: "low",
  NORMAL: "normal",
  HIGH: "high",
};

export const priorityModificators = {
  [priorities.LOW]: "info-label--primary",
  [priorities.NORMAL]: "info-label--secondary",
  [priorities.HIGH]: "info-label--tertiary",
};

export const routes = {
  PROJECT: "project",
  RECYCLEBIN: "recycle-bin",
};
