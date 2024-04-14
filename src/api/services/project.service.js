import mockApi from "../api";
import { endpoints } from "../../shared/consts";

const baseUrl = `${location.origin}/${endpoints.PROJECTS}`;

class ProjectService {
  getProjectById(id) {
    const res = mockApi.get(`${baseUrl}/${id}`);
    return res;
  }

  getProjects() {
    const res = mockApi.get(`${baseUrl}`);
    return res;
  }

  deleteProject(id) {
    const res = mockApi.delete(`${baseUrl}/${id}`);
    return res;
  }
  createProject(data) {
    const res = mockApi.post(`${baseUrl}`, data);
    return res;
  }
}

export default new ProjectService();
