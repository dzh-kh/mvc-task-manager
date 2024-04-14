import { plusIcon } from "../assets";
import domApi from "../shared/domApi";
import { routes } from "../shared/consts";

class ProjectListView {
  constructor(root) {
    this.root = root || domApi.getElement(".sidebar__list");

    this.projectsWrapper = domApi.createElement("li", "projects");

    this.projectsTop = domApi.createElement(
      "div",
      "projects__top projects__top--collapsed"
    );
    this.projectsTitle = domApi.createElement("h1", "projects__title");
    this.projectsTitle.textContent = "Projects";
    this.projectCreateBtn = domApi.createElement(
      "button",
      "projects__create-btn"
    );

    this.projectCreateBtnImg = domApi.createElement("img");
    this.projectCreateBtnImg.alt = "plus";
    this.projectCreateBtnImg.src = plusIcon;
    this.projectCreateBtn.append(this.projectCreateBtnImg);

    this.projectForm = domApi.createElement(
      "form",
      "projects__form dropdown-form"
    );
    this.projectFormField = domApi.createElement(
      "input",
      "dropdown-form__field"
    );
    this.projectFormField.name = "title";
    this.projectFormField.placeholder = "Enter the name of the project";
    this.projectFormField.maxLength = "15";
    this.projectFormField.required = true;
    this.projectSubmitInput = domApi.createElement(
      "input",
      "dropdown-form__submit"
    );
    this.projectSubmitInput.type = "submit";
    this.projectSubmitInput.hidden = true;
    this.projectFormField.placeholder = "Enter the name of the project";

    this.projectForm.append(this.projectFormField, this.projectSubmitInput);

    this.projectsTop.append(
      this.projectsTitle,
      this.projectCreateBtn,
      this.projectForm
    );

    this.projectList = domApi.createElement("ul", "projects__list");

    this.projectsWrapper.append(this.projectsTop, this.projectList);
    this.root.append(this.projectsWrapper);

    this._initLocalListener();
  }

  _initLocalListener() {
    this.projectCreateBtn.addEventListener("click", () => {
      const isMenuCollapsed = this.projectsTop.classList.contains(
        "projects__top--collapsed"
      );
      if (isMenuCollapsed) {
        this.projectFormField.focus();
      } else this.projectFormField.blur();
      this.projectsTop.classList.toggle("projects__top--collapsed");
    });
  }

  initProjectList(projects) {
    this.projectList.innerHTML = "";
    projects.forEach((project, index) => {
      const { id, title } = project;
      const projectItem = domApi.createElement("li", "sidebar__item tab");
      projectItem.id = `projectId:${id}`;
      const projectAnchor = domApi.createElement("a", "sidebar__link");
      projectAnchor.href = `#${routes.PROJECT}?projectId=${id}`;
      projectAnchor.textContent = title;
      projectItem.append(projectAnchor);

      this.projectList.append(projectItem);
    });
  }

  bindAddProject(handler) {
    this.projectForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = Object.fromEntries(new FormData(event.target));
      handler(data);
    });
  }
}

export default ProjectListView;
