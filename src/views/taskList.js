import { priorityModificators } from "../shared/consts";
import domApi from "../shared/domApi";

export default class TaskListView {
  constructor(root) {
    this.root = root || domApi.getElement(".content");
    this.content = domApi.createElement("div", "tasks");
    this.taskListRoot = domApi.createElement("ul", "tasks__list");

    this.content.append(this.taskListRoot);
  }

  init() {
    this.root.append(this.content);
  }

  createSingleTask(task) {
    const { id, dueDate, priority, description, title } = task;
    const taskItem = domApi.createElement("li", "tasks__item");
    taskItem.id = `taskId:${id}`;
    const taskTitle = domApi.createElement("h1", "tasks__title");
    taskTitle.textContent = title;
    const taskStatus = domApi.createElement("div", "tasks__status");
    const taskPriority = domApi.createElement(
      "span",
      `info-label ${priorityModificators[priority]}`
    );
    taskPriority.textContent = priority;
    const taskDueDate = domApi.createElement(
      "span",
      "info-label info-label--fortiary"
    );
    taskDueDate.textContent = dueDate;
    taskStatus.append(taskPriority, taskDueDate);

    const taskDescription = domApi.createElement("p", "tasks__description");
    taskDescription.textContent = description.slice(0, 100) + "...";

    taskItem.append(taskTitle, taskStatus, taskDescription);
    return taskItem;
  }
}
