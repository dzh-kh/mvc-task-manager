import "./styles/index.css";

// const root = document.getElementById("root");

import { routes } from "./shared/consts";
import {
  ProjectListController,
  ProjectTaskListController,
  RecycleBinTaskListController,
  SidebarController,
  TaskFilterController,
} from "./controllers";

import {
  ProjectListView,
  ProjectTaskListView,
  RecycleBinTaskListView,
  SidebarView,
  TaskFilterView,
} from "./views";

import {
  ProjectListModel,
  ProjectTaskListModel,
  RecycleBinTaskListModel,
  AppRouteModel,
} from "./models";

import { transformQueryToObj } from "./shared/utils";

const sharedAppRouteModel = new AppRouteModel();

new TaskFilterController(sharedAppRouteModel, new TaskFilterView());
new SidebarController(sharedAppRouteModel, new SidebarView());
new ProjectListController(new ProjectListModel(), new ProjectListView());

const projectTaskListController = new ProjectTaskListController(
  new ProjectTaskListModel(),
  new ProjectTaskListView()
);

const recycleBinTaskListController = new RecycleBinTaskListController(
  new RecycleBinTaskListModel(),
  new RecycleBinTaskListView()
);

const onUrlChange = () => {
  const href = location.hash.replace(/\#/, "");
  let [path, params = ""] = href.split("?");
  params = transformQueryToObj(params);
  switch (path) {
    case routes.PROJECT: {
      recycleBinTaskListController.unmount();
      projectTaskListController.mount(params);
      break;
    }
    case routes.RECYCLEBIN: {
      projectTaskListController.unmount();
      recycleBinTaskListController.mount(params);
      break;
    }
    default: {
      history.replaceState(null, null, "#project?projectId=0");
    }
  }
};

window.addEventListener("load", onUrlChange);
window.addEventListener("hashchange", onUrlChange);
