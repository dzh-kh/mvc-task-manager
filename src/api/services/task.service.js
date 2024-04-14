import mockApi from "../api";
import { endpoints } from "../../shared/consts";
import {
  normalizeTaskFields,
  normalizeTaskGetParams,
  transformObjToQuery,
} from "../../shared/utils";

const baseUrl = `${location.origin}/${endpoints.TASKS}`;

class TaskService {
  getTaskById(id) {
    const res = mockApi.get(`${baseUrl}/${id}`);
    return res;
  }

  deleteTask(id) {
    const res = mockApi.delete(`${baseUrl}/${id}`);
    return res;
  }
  createTask(data) {
    data = normalizeTaskFields(data);
    const res = mockApi.post(`${baseUrl}`, data);
    return res;
  }

  updateTask(id, data) {
    const res = mockApi.patch(`${baseUrl}/${id}`, data);
    return res;
  }

  restoreTask(id) {
    const res = mockApi.patch(`${baseUrl}/${id}`, { deleted: false });
    return res;
  }

  getTasks(params = {}) {
    params = normalizeTaskGetParams(params);
    const query = transformObjToQuery(params);
    const res = mockApi.get(`${baseUrl}?${query}`);
    return res;
  }

  // addTaskToRecycleBin(id) {
  //   const res = mockApi.patch(`${baseUrl}/${id}`, { deleted: true });
  //   return res;
  // }

  // getProjectTasks(projectId, params = {}) {
  //   params = normalizeTaskGetParams(params);
  //   const query = transformObjToQuery({ projectId, ...params, deleted: false });
  //   const res = mockApi.get(`${baseUrl}?${query}`);
  //   return res;
  // }

  // getRecycleBinTasks(params = {}) {
  //   params = normalizeTaskGetParams(params);
  //   const query = transformObjToQuery({ ...params, deleted: true });
  //   const res = mockApi.get(`${baseUrl}?${query}`);
  //   return res;
  // }
}

export default new TaskService();
