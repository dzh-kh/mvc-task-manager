class AppRouteModel {
  constructor() {
    this._initCurrentHref();
  }

  _initCurrentHref() {
    this.href = window.location.hash.replace(/\#/, "").split("?");
    this.path = this.href[0];
    this.query = new URLSearchParams(this.href[1] || "");
  }

  _refreshHistory() {
    history.pushState("", "", `#${this.path}?${this.query.toString()}`);
    dispatchEvent(new HashChangeEvent("hashchange"));
  }

  changeQuery(data) {
    this._initCurrentHref();
    Object.entries(data).forEach(([key, value]) => {
      if (value) this.query.set(key, value);
      else this.query.delete(key);
      this._refreshHistory();
    });
  }
}

export default AppRouteModel;
