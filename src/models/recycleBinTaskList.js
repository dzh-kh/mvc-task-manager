import taskService from "../api/services/task.service";

const requiredParams = {
  deleted: true,
};
export default class RecycleBinTaskListModel {
  constructor() {
    this.tasks = [];
    this.defaultParams = requiredParams;
  }

  bindTaskListChanged(handler) {
    this.onTaskListChanged = handler;
  }

  _refreshList(tasks) {
    this.tasks = tasks ? tasks : taskService.getTasks(this.defaultParams);
    this.onTaskListChanged(this.tasks);
  }

  changeDefaultParams(params) {
    this.defaultParams = { ...requiredParams, ...params };
    this._refreshList();
  }

  deleteTask(id) {
    taskService.deleteTask(id);
    this._refreshList();
  }

  restoreTask(id) {
    taskService.restoreTask(id);
    this._refreshList();
  }

  getTasks(params = {}) {
    const res = taskService.getTasks({
      ...params,
      ...this.defaultParams,
    });
    this._refreshList(res);
  }
}
