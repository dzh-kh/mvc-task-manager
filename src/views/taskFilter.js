import domApi from "../shared/domApi";
import { priorities } from "../shared/consts";
import { searchIcon } from "../assets";

const priorityOptions = {
  all: "",
  low: priorities.LOW,
  normal: priorities.NORMAL,
  high: priorities.HIGH,
};
const completedOptions = { all: "", completed: "true", "in progress": "false" };

class TaskFilterView {
  constructor(root) {
    this.root = root || domApi.getElement(".content");

    this.filterForm = domApi.createElement(
      "form",
      "tasks__filter-form filter-form"
    );

    this.root.append(this.filterForm);
  }

  init(initData) {
    const { title = "", completed, priority } = initData;
    this.filterFormSelects = domApi.createElement(
      "fieldset",
      "filter-form__selects"
    );

    this.priorityLabel = domApi.createElement("label");
    this.priorityLabel.setAttribute("for", "priority");
    this.priorityLabel.textContent = "Priority";

    this.prioritySelect = domApi.createElement(
      "select",
      "filters__select select"
    );
    this.prioritySelect.id = "priority";
    this.prioritySelect.name = "priority";

    Object.entries(priorityOptions).forEach(([key, value]) => {
      const option = domApi.createElement("option");
      option.value = value;
      option.textContent = key;
      option.selected = value === priority;
      this.prioritySelect.append(option);
    });

    this.completedLabel = domApi.createElement("label");
    this.completedLabel.setAttribute("for", "completed");
    this.completedLabel.textContent = "Completed";

    this.completedSelect = domApi.createElement(
      "select",
      "filters__select select"
    );
    this.completedSelect.id = "completed";
    this.completedSelect.name = "completed";

    Object.entries(completedOptions).forEach(([key, value]) => {
      const option = domApi.createElement("option");
      option.value = value;
      option.textContent = key;
      option.selected = value === completed;
      this.completedSelect.append(option);
    });

    this.filterFormSelects.append(
      this.completedLabel,
      this.completedSelect,
      this.priorityLabel,
      this.prioritySelect
    );

    this.searchbar = domApi.createElement("div", "searchbar");
    this.searchbarField = domApi.createElement("input", "searchbar__field");
    this.searchbarField.value = title;
    this.searchbarField.name = "title";

    this.searchbarIcon = domApi.createElement("img", "searchbar__icon");
    this.searchbarIcon.src = searchIcon;
    this.searchbarIcon.alt = "search";
    this.searchbar.append(this.searchbarField, this.searchbarIcon);

    this.filterForm.append(this.filterFormSelects, this.searchbar);

    const onChange = () => this.filterForm.requestSubmit();
    this.prioritySelect.addEventListener("change", onChange);
    this.completedSelect.addEventListener("change", onChange);
    this.searchbarField.addEventListener("input", onChange);
  }

  bindChangeQuery(handler) {
    this.filterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(e.target));
      handler(data);
    });
  }
}

export default TaskFilterView;
