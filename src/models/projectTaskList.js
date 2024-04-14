import taskService from "../api/services/task.service";
import { Task } from "./task";

const requiredParams = {
  deleted: false,
};

export default class ProjectTaskListModel {
  constructor() {
    this.tasks = [];
    this.editingTask = {};
    this.defaultParams = requiredParams;
  }

  bindTaskListChanged(handler) {
    this.onTaskListChanged = handler;
  }

  bindFormChanged(handler) {
    this.onEditingFormOpen = handler;
  }

  _refreshList(tasks) {
    this.tasks = tasks ? tasks : taskService.getTasks(this.defaultParams);
    this.onTaskListChanged(this.tasks);
  }

  _refreshForm(task) {
    this.onEditingFormOpen(task);
  }

  getEditingTask(id) {
    const data = taskService.getTaskById(id);
    this.editingTask = data;
    this._refreshForm(this.editingTask);
  }

  changeDefaultParams(params) {
    this.defaultParams = { ...requiredParams, ...params };
    this._refreshList();
  }

  deleteTask(id) {
    taskService.deleteTask(id);
    this._refreshList();
  }

  addTask(data) {
    const task = new Task({
      ...data,
      projectId: this.defaultParams.projectId,
    });
    taskService.createTask(task);
    this._refreshList();
  }

  getTasks(params = {}) {
    const res = taskService.getTasks(params);
    this._refreshList(res);
  }

  updateTask(data, id) {
    if (!id) {
      id = this.editingTask.id;
    }
    taskService.updateTask(id, { ...this.editingTask, ...data });
    this.editingTask = {};
    this._refreshList();
  }

  toggleTask(id, data) {
    taskService.updateTask(id, data);
    this._refreshList();
  }
}
