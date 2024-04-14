import { deleteIcon, restoreIcon } from "../assets";
import TaskListView from "./taskList";
import domApi from "../shared/domApi";

class RecycleBinTaskListView extends TaskListView {
  constructor() {
    super();
  }

  initTaskList(tasks) {
    this.taskListRoot.innerHTML = "";
    tasks.forEach((task) => {
      const taskItem = this.createSingleTask(task);
      this.taskListRoot.append(taskItem);

      const taskCheckbox = domApi.createElement("input", "tasks__checkbox");
      taskCheckbox.setAttribute("type", "checkbox");
      taskCheckbox.checked = task.completed;
      taskCheckbox.disabled = true;

      const taskActions = domApi.createElement("div", "tasks__actions");

      const deleteBtn = domApi.createElement("button", "tasks__delete-btn");
      const deleteBtnIcon = domApi.createElement("img");
      deleteBtnIcon.alt = "delete";
      deleteBtnIcon.src = deleteIcon;
      deleteBtn.append(deleteBtnIcon);

      const restoreBtn = domApi.createElement("button", "tasks__restore-btn");
      const restoreBtnIcon = domApi.createElement("img");
      restoreBtnIcon.alt = "restore";
      restoreBtnIcon.src = restoreIcon;
      restoreBtn.append(restoreBtnIcon);

      taskActions.append(restoreBtn, deleteBtn);

      taskItem.append(taskCheckbox, taskActions);
    });
  }

  bindRestoreTask(handler) {
    this.taskListRoot.addEventListener("click", (event) => {
      if (event.target.closest(".tasks__restore-btn")) {
        const id = event.target.closest(".tasks__item").id.split(":")[1];
        handler(id);
      }
    });
  }

  bindDeleteTask(handler) {
    this.taskListRoot.addEventListener("click", (event) => {
      if (event.target.closest(".tasks__delete-btn")) {
        const id = event.target.closest(".tasks__item").id.split(":")[1];
        handler(id);
      }
    });
  }
}

export default RecycleBinTaskListView;
