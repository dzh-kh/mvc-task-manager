import domApi from "../shared/domApi";
import TaskListView from "./taskList";
import { deleteIcon, plusIcon, editIcon } from "../assets";
import { initTaskData } from "../models/task";
import { priorities, priorityModificators } from "../shared/consts";

export default class ProjectTaskListView extends TaskListView {
  constructor() {
    super();
    this.modalForm = domApi.createElement("form", "modal-form");

    this.modal = domApi.createElement("dialog", "modal");
    this.modalCloseBtn = domApi.createElement(
      "button",
      "modal__close-btn btn btn--primary"
    );
    this.modalCloseBtn.textContent = "close";
    this.modal.append(this.modalCloseBtn, this.modalForm);

    this.root.append(this.modal);

    this._initLocalListeners();
  }

  _initLocalListeners() {
    this.modalCloseBtn.addEventListener("click", (e) => {
      this._closeModalForm();
    });
  }

  _closeModalForm() {
    this.modalForm.innerHTML = "";
    this.modal.close();
  }

  initTaskList(tasks) {
    this.taskListRoot.innerHTML = "";
    tasks.forEach((task) => {
      const taskItem = this.createSingleTask(task);
      this.taskListRoot.append(taskItem);

      const taskCheckbox = domApi.createElement("input", "tasks__checkbox");
      taskCheckbox.type = "checkbox";
      taskCheckbox.checked = task.completed;

      const taskActions = domApi.createElement("div", "tasks__actions");

      const deleteBtn = domApi.createElement("button", "tasks__delete-btn");
      const deleteBtnIcon = domApi.createElement("img");
      deleteBtnIcon.alt = "delete";
      deleteBtnIcon.src = deleteIcon;
      deleteBtn.append(deleteBtnIcon);

      const editBtn = domApi.createElement("button", "tasks__edit-btn");
      const editBtnIcon = domApi.createElement("img");
      editBtnIcon.alt = "edit";
      editBtnIcon.src = editIcon;
      editBtn.append(editBtnIcon);

      taskActions.append(editBtn, deleteBtn);

      taskItem.append(taskCheckbox, taskActions);
    });

    const addTaskCard = domApi.createElement("li", "tasks__item");
    const addCardBtn = domApi.createElement("button", "tasks__add-btn");
    const addTaskBtnImg = domApi.createElement("img");
    addTaskBtnImg.alt = "plus";
    addTaskBtnImg.src = plusIcon;
    addCardBtn.append(addTaskBtnImg);
    addTaskCard.append(addCardBtn);
    this.taskListRoot.append(addTaskCard);
    addCardBtn.addEventListener("click", () => {
      this.initFormModal();
    });
  }

  initFormModal(initValues = initTaskData) {
    const { completed, title, dueDate, priority, description } = initValues;
    if (!initValues.title) {
      this.modalForm.classList.remove("edit");
    } else {
      this.modalForm.classList.add("edit");
    }
    const modalFormFields = domApi.createElement("div", "modal-form__fields");

    const titleLabel = domApi.createElement("label");
    titleLabel.setAttribute("for", "title");
    titleLabel.textContent = "Title";
    const titleField = domApi.createElement("input", "modal-form__title");
    titleField.type = "text";
    titleField.value = title;
    titleField.name = "title";
    titleField.id = "title";
    titleField.autofocus = true;
    titleField.maxLength = 20;
    titleField.required = true;

    const priorityLabel = domApi.createElement("label");
    priorityLabel.setAttribute("for", "priority");
    priorityLabel.textContent = "Priority";
    const priorityFieldset = domApi.createElement(
      "fieldset",
      "modal-form__priority"
    );

    priorityFieldset.id = "priority";

    Object.values(priorities).forEach((item) => {
      const priorityField = domApi.createElement("input", "info-label__input");
      priorityField.type = "radio";
      priorityField.value = item;
      priorityField.name = "priority";
      priorityField.id = item;
      priorityField.checked = item === priority;
      priorityField.required = true;

      const priorityFieldLabel = domApi.createElement(
        "label",
        `modal-form__priority-label info-label ${priorityModificators[item]}`
      );
      priorityFieldLabel.setAttribute("for", item);
      priorityFieldLabel.textContent = item;
      priorityFieldset.append(priorityField, priorityFieldLabel);
    });

    const descriptionLabel = domApi.createElement("label");
    descriptionLabel.setAttribute("for", "description");
    descriptionLabel.textContent = "Description";
    const descriptionField = domApi.createElement(
      "textarea",
      "modal-form__description textarea"
    );
    descriptionField.value = description;
    descriptionField.name = "description";
    descriptionField.id = "description";
    descriptionField.required = true;

    const dueDateLabel = domApi.createElement("label");
    dueDateLabel.setAttribute("for", "dueDate");
    dueDateLabel.textContent = "Due date";
    const dueDateField = domApi.createElement("input", "modal-form__dueDate");
    dueDateField.type = "date";
    dueDateField.value = dueDate;
    dueDateField.name = "dueDate";
    dueDateField.id = "dueDate";
    dueDateField.required = true;

    const completedLabel = domApi.createElement("label");
    completedLabel.setAttribute("for", "completed");
    completedLabel.textContent = "Completed";
    const completedField = domApi.createElement(
      "input",
      "modal-form__complete"
    );
    completedField.type = "checkbox";
    completedField.checked = completed;
    completedField.name = "completed";
    completedField.id = "completed";

    modalFormFields.append(
      titleLabel,
      titleField,
      priorityLabel,
      priorityFieldset,
      dueDateLabel,
      dueDateField,
      descriptionLabel,
      descriptionField,
      completedLabel,
      completedField
    );
    const modalFormActions = domApi.createElement("div", "modal-form__actions");

    const submitBtn = domApi.createElement(
      "button",
      "modal-form__save btn btn--primary"
    );
    submitBtn.textContent = "Save";
    submitBtn.type = "submit";

    const resetBtn = domApi.createElement(
      "button",
      "modal-form__reset btn btn--primary"
    );
    resetBtn.textContent = "Reset";
    resetBtn.type = "reset";

    modalFormActions.append(submitBtn, resetBtn);

    this.modalForm.append(modalFormFields, modalFormActions);

    this.modal.showModal();
  }

  bindGetEditingTask(handler) {
    this.taskListRoot.addEventListener("click", (event) => {
      if (event.target.closest(".tasks__edit-btn")) {
        const id = event.target.closest(".tasks__item").id.split(":")[1];
        handler(id);
      }
    });
  }

  bindAddOrEditTask(handler) {
    this.modalForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = Object.fromEntries(new FormData(this.modalForm));
      if (this.modalForm.className.includes("edit")) {
        handler(formData, "edit");
      } else handler(formData, "add");
      e.target.reset();
      this._closeModalForm();
    });
  }

  bindDeleteTask(handler) {
    this.taskListRoot.addEventListener("click", (event) => {
      if (event.target.closest(".tasks__delete-btn")) {
        const id = event.target.closest(".tasks__item").id.split(":")[1];
        handler(id);
      }
    });
  }

  bindToggleTask(handler) {
    this.taskListRoot.addEventListener("change", (event) => {
      const checkbox = event.target.closest(".tasks__checkbox");
      if (checkbox) {
        const currentTask = checkbox.closest(".tasks__item");
        const id = currentTask.closest(".tasks__item").id.split(":")[1];
        handler(id, checkbox.checked);
      }
    });
  }
}
