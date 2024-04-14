export default class SidebarController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.view.initSelectedTab(this.model.query.get("projectId"));
  }
}
