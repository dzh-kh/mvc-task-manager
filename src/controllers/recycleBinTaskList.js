class RecycleBinTaskListController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.model.bindTaskListChanged(this.onTaskListChanged);
    this.view.bindDeleteTask(this.handleDeleteTask);
    this.view.bindRestoreTask(this.handleRestoreTask);
  }

  mount(params) {
    this.view.init();
    this.model.changeDefaultParams(params);
  }

  unmount() {
    this.view.content.remove();
  }

  onTaskListChanged = (tasks) => {
    this.view.initTaskList(tasks);
  };

  handleGetTasks = (params) => {
    this.model.getTasks(params);
  };

  handleDeleteTask = (id) => {
    this.model.deleteTask(id);
  };

  handleRestoreTask = (id) => {
    const body = { deleted: false };
    this.model.restoreTask(id, body);
  };
}

export default RecycleBinTaskListController;
