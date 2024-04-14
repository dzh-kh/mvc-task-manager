import projectService from "../api/services/project.service";

class ProjectListModel {
  constructor() {
    this.projects = projectService.getProjects() || [];
    if (!this.projects.length)
      projectService.createProject(new Project("default"));
  }

  bindProjectListChanged(handler) {
    this.onProjectListChanged = handler;
  }

  _refresh() {
    this.projects = projectService.getProjects();
    this.onProjectListChanged(this.projects);
  }

  addProject(data) {
    projectService.createProject(data);
    this._refresh();
  }
}

export default ProjectListModel;

class Project {
  constructor(title) {
    this.title = title;
  }
}
