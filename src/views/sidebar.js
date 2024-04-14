import { routes } from "../shared/consts";
import domApi from "../shared/domApi";

class SidebarView {
  constructor() {
    this.root = domApi.getElement(".layout");
    this.content = domApi.getElement(".content");
    this.sidebar = domApi.createElement("aside", "sidebar");

    this.nav = domApi.createElement("nav", "sidebar__nav");
    this.list = domApi.createElement("ul", "sidebar__list");
    this.recycleBinTab = domApi.createElement(
      "li",
      "sidebar__item tab sidebar__recycle-bin"
    );
    this.recycleBinTabAnchor = domApi.createElement("a", "sidebar__link");
    this.recycleBinTabAnchor.href = `#${routes.RECYCLEBIN}`;
    this.recycleBinTabAnchor.textContent = "Recycle Bin";
    this.recycleBinTab.append(this.recycleBinTabAnchor);
    this.list.append(this.recycleBinTab);
    this.nav.append(this.list);

    this.sidebar.append(this.nav);

    this.root.append(this.sidebar);

    this.selectedTab = domApi.getElement(".tab--selected");

    this._initLocalListener();
  }

  _initLocalListener() {
    this.list.addEventListener("click", (e) => {
      if (this.selectedTab) this.selectedTab.classList.remove("tab--selected");
      const target = e.target.closest(".sidebar__item");

      if (!target) return false;
      target.classList.add("tab--selected");
      this.selectedTab = target;
    });
  }

  initSelectedTab(currentProjectId) {
    window.onload = () => {
      if (currentProjectId) {
        const tab = document.getElementById(`projectId:${currentProjectId}`);
        if (tab) {
          tab.classList.add("tab--selected");
          this.selectedTab = tab;
        }
      } else {
        this.recycleBinTab.classList.add("tab--selected");
        this.selectedTab = this.recycleBinTab;
      }
    };
  }
}

export default SidebarView;
