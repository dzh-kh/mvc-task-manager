import store from "../shared/store";
import {
  filterDBValues,
  createId,
  normalizeTaskGetParams,
  transformQueryToObj,
} from "../shared/utils";

class MockApi {
  constructor() {
    this.database = {
      tasks: store.getData("tasks") || store.setData("tasks", []) || [],
      projects:
        store.getData("projects") || store.setData("projects", []) || [],
    };
  }
  _updateDB(entitie, data) {
    store.setData(entitie, data);
    this.database = { ...this.database, [entitie]: store.getData(entitie) };
  }

  _getEntite(path, id) {
    let data = this.database[path];
    data = data.filter((item) => item.id === id);
    return data[0];
  }

  _getEntities(path, params) {
    let data = this.database[path];
    if (path === "tasks") {
      data = data.filter((item) => {
        return filterDBValues(item, normalizeTaskGetParams(params));
      });
    }
    return data;
  }

  _transformEndpoint(endpoint) {
    let { pathname, search: query } = new URL(endpoint);
    pathname = pathname.replace(/^\//, "");
    const [path, id] = pathname.split("/");
    const params = transformQueryToObj(query);
    return { path, id, params };
  }

  get(endpoint) {
    const { path, id, params } = this._transformEndpoint(endpoint);
    let data;
    if (id) {
      data = this._getEntite(path, id);
    } else {
      data = this._getEntities(path, params);
    }
    return data;
  }

  delete(endpoint) {
    const { path, id } = this._transformEndpoint(endpoint);
    let deletedItem = [];
    let data = this.database[path].filter((i) => {
      if (i.id === id) {
        deletedItem = i;
      } else return true;
    });
    if (!deletedItem.deleted) {
      data.push({ ...deletedItem, deleted: true });
    }
    this._updateDB(path, data);
  }

  post(endpoint, body) {
    const { path } = this._transformEndpoint(endpoint);
    let data = this.database[path];
    const newId = createId(this.database[path]);
    data.push({ id: newId, ...body });
    this._updateDB(path, data);
  }

  patch(endpoint, body) {
    const { path, id } = this._transformEndpoint(endpoint);
    let data = this.database[path];
    if (id) {
      data.forEach((item, i) => {
        if (item.id === id) {
          data[i] = { ...item, ...body };
        }
      });
    }
    this._updateDB(path, data);
  }
}

export default new MockApi();
