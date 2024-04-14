class ProjectTaskListController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.model.bindTaskListChanged(this.onTaskListChanged);
    this.model.bindFormChanged(this.onEditFormOpen);
    this.view.bindGetEditingTask(this.handleGetEditingTask);
    this.view.bindAddOrEditTask(this.handleEditOrAddTask);
    this.view.bindDeleteTask(this.handleDeleteTask);
    this.view.bindToggleTask(this.handleToggleTask);
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

  onEditFormOpen = (task) => {
    this.view.initFormModal(task);
  };

  handleGetEditingTask = (id) => {
    this.model.getEditingTask(id);
  };

  handleEditOrAddTask = (data, actionType) => {
    if (actionType === "add") {
      this.model.addTask(data);
    } else this.model.updateTask(data);
  };

  handleGetTasks = (params) => {
    this.model.getTasks(params);
  };

  handleToggleTask = (id, isCompleted) => {
    const body = { completed: isCompleted };
    this.model.toggleTask(id, body);
  };

  handleDeleteTask = (id) => {
    this.model.deleteTask(id);
  };
}

export default ProjectTaskListController;
