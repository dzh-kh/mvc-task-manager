export default class TaskFilterController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.bindChangeQuery(this.handleChangeQuery);
    this.view.init(Object.fromEntries(this.model.query.entries()));
  }

  handleChangeQuery = (data) => {
    this.model.changeQuery(data);
  };
}
