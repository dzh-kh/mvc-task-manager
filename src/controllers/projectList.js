class ProjectListController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.model.bindProjectListChanged(this.onProjectListChanged);
    this.view.bindAddProject(this.handleAddProject);
    this.onProjectListChanged(this.model.projects);
  }

  onProjectListChanged = (projects) => {
    this.view.initProjectList(projects);
  };

  handleAddProject = (data) => {
    this.model.addProject(data);
  };

  handleDeleteTask = (id) => {
    this.model.deleteTask(id);
  };
}

export default ProjectListController;
