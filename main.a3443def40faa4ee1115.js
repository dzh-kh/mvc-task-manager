/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./api/api.js":
/*!********************!*\
  !*** ./api/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shared_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/store */ "./shared/store.js");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils */ "./shared/utils/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var MockApi = /*#__PURE__*/function () {
  function MockApi() {
    _classCallCheck(this, MockApi);
    this.database = {
      tasks: _shared_store__WEBPACK_IMPORTED_MODULE_0__["default"].getData("tasks") || _shared_store__WEBPACK_IMPORTED_MODULE_0__["default"].setData("tasks", []) || [],
      projects: _shared_store__WEBPACK_IMPORTED_MODULE_0__["default"].getData("projects") || _shared_store__WEBPACK_IMPORTED_MODULE_0__["default"].setData("projects", []) || []
    };
  }
  return _createClass(MockApi, [{
    key: "_updateDB",
    value: function _updateDB(entitie, data) {
      _shared_store__WEBPACK_IMPORTED_MODULE_0__["default"].setData(entitie, data);
      this.database = _objectSpread(_objectSpread({}, this.database), {}, _defineProperty({}, entitie, _shared_store__WEBPACK_IMPORTED_MODULE_0__["default"].getData(entitie)));
    }
  }, {
    key: "_getEntite",
    value: function _getEntite(path, id) {
      var data = this.database[path];
      data = data.filter(function (item) {
        return item.id === id;
      });
      return data[0];
    }
  }, {
    key: "_getEntities",
    value: function _getEntities(path, params) {
      var data = this.database[path];
      if (path === "tasks") {
        data = data.filter(function (item) {
          return (0,_shared_utils__WEBPACK_IMPORTED_MODULE_1__.filterDBValues)(item, (0,_shared_utils__WEBPACK_IMPORTED_MODULE_1__.normalizeTaskGetParams)(params));
        });
      }
      return data;
    }
  }, {
    key: "_transformEndpoint",
    value: function _transformEndpoint(endpoint) {
      var _URL = new URL(endpoint),
        pathname = _URL.pathname,
        query = _URL.search;
      pathname = pathname.replace(/^\//, "");
      var _pathname$split = pathname.split("/"),
        _pathname$split2 = _slicedToArray(_pathname$split, 2),
        path = _pathname$split2[0],
        id = _pathname$split2[1];
      var params = (0,_shared_utils__WEBPACK_IMPORTED_MODULE_1__.transformQueryToObj)(query);
      return {
        path: path,
        id: id,
        params: params
      };
    }
  }, {
    key: "get",
    value: function get(endpoint) {
      var _this$_transformEndpo = this._transformEndpoint(endpoint),
        path = _this$_transformEndpo.path,
        id = _this$_transformEndpo.id,
        params = _this$_transformEndpo.params;
      var data;
      if (id) {
        data = this._getEntite(path, id);
      } else {
        data = this._getEntities(path, params);
      }
      return data;
    }
  }, {
    key: "delete",
    value: function _delete(endpoint) {
      var _this$_transformEndpo2 = this._transformEndpoint(endpoint),
        path = _this$_transformEndpo2.path,
        id = _this$_transformEndpo2.id;
      var deletedItem = [];
      var data = this.database[path].filter(function (i) {
        if (i.id === id) {
          deletedItem = i;
        } else return true;
      });
      if (!deletedItem.deleted) {
        data.push(_objectSpread(_objectSpread({}, deletedItem), {}, {
          deleted: true
        }));
      }
      this._updateDB(path, data);
    }
  }, {
    key: "post",
    value: function post(endpoint, body) {
      var _this$_transformEndpo3 = this._transformEndpoint(endpoint),
        path = _this$_transformEndpo3.path;
      var data = this.database[path];
      var newId = (0,_shared_utils__WEBPACK_IMPORTED_MODULE_1__.createId)(this.database[path]);
      data.push(_objectSpread({
        id: newId
      }, body));
      this._updateDB(path, data);
    }
  }, {
    key: "patch",
    value: function patch(endpoint, body) {
      var _this$_transformEndpo4 = this._transformEndpoint(endpoint),
        path = _this$_transformEndpo4.path,
        id = _this$_transformEndpo4.id;
      var data = this.database[path];
      if (id) {
        data.forEach(function (item, i) {
          if (item.id === id) {
            data[i] = _objectSpread(_objectSpread({}, item), body);
          }
        });
      }
      this._updateDB(path, data);
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new MockApi());

/***/ }),

/***/ "./api/services/project.service.js":
/*!*****************************************!*\
  !*** ./api/services/project.service.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api */ "./api/api.js");
/* harmony import */ var _shared_consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/consts */ "./shared/consts.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var baseUrl = "".concat(location.origin, "/").concat(_shared_consts__WEBPACK_IMPORTED_MODULE_1__.endpoints.PROJECTS);
var ProjectService = /*#__PURE__*/function () {
  function ProjectService() {
    _classCallCheck(this, ProjectService);
  }
  return _createClass(ProjectService, [{
    key: "getProjectById",
    value: function getProjectById(id) {
      var res = _api__WEBPACK_IMPORTED_MODULE_0__["default"].get("".concat(baseUrl, "/").concat(id));
      return res;
    }
  }, {
    key: "getProjects",
    value: function getProjects() {
      var res = _api__WEBPACK_IMPORTED_MODULE_0__["default"].get("".concat(baseUrl));
      return res;
    }
  }, {
    key: "deleteProject",
    value: function deleteProject(id) {
      var res = _api__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]("".concat(baseUrl, "/").concat(id));
      return res;
    }
  }, {
    key: "createProject",
    value: function createProject(data) {
      var res = _api__WEBPACK_IMPORTED_MODULE_0__["default"].post("".concat(baseUrl), data);
      return res;
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new ProjectService());

/***/ }),

/***/ "./api/services/task.service.js":
/*!**************************************!*\
  !*** ./api/services/task.service.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api */ "./api/api.js");
/* harmony import */ var _shared_consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/consts */ "./shared/consts.js");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils */ "./shared/utils/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var baseUrl = "".concat(location.origin, "/").concat(_shared_consts__WEBPACK_IMPORTED_MODULE_1__.endpoints.TASKS);
var TaskService = /*#__PURE__*/function () {
  function TaskService() {
    _classCallCheck(this, TaskService);
  }
  return _createClass(TaskService, [{
    key: "getTaskById",
    value: function getTaskById(id) {
      var res = _api__WEBPACK_IMPORTED_MODULE_0__["default"].get("".concat(baseUrl, "/").concat(id));
      return res;
    }
  }, {
    key: "deleteTask",
    value: function deleteTask(id) {
      var res = _api__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]("".concat(baseUrl, "/").concat(id));
      return res;
    }
  }, {
    key: "createTask",
    value: function createTask(data) {
      data = (0,_shared_utils__WEBPACK_IMPORTED_MODULE_2__.normalizeTaskFields)(data);
      var res = _api__WEBPACK_IMPORTED_MODULE_0__["default"].post("".concat(baseUrl), data);
      return res;
    }
  }, {
    key: "updateTask",
    value: function updateTask(id, data) {
      var res = _api__WEBPACK_IMPORTED_MODULE_0__["default"].patch("".concat(baseUrl, "/").concat(id), data);
      return res;
    }
  }, {
    key: "restoreTask",
    value: function restoreTask(id) {
      var res = _api__WEBPACK_IMPORTED_MODULE_0__["default"].patch("".concat(baseUrl, "/").concat(id), {
        deleted: false
      });
      return res;
    }
  }, {
    key: "getTasks",
    value: function getTasks() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      params = (0,_shared_utils__WEBPACK_IMPORTED_MODULE_2__.normalizeTaskGetParams)(params);
      var query = (0,_shared_utils__WEBPACK_IMPORTED_MODULE_2__.transformObjToQuery)(params);
      var res = _api__WEBPACK_IMPORTED_MODULE_0__["default"].get("".concat(baseUrl, "?").concat(query));
      return res;
    }

    // addTaskToRecycleBin(id) {
    //   const res = mockApi.patch(`${baseUrl}/${id}`, { deleted: true });
    //   return res;
    // }

    // getProjectTasks(projectId, params = {}) {
    //   params = normalizeTaskGetParams(params);
    //   const query = transformObjToQuery({ projectId, ...params, deleted: false });
    //   const res = mockApi.get(`${baseUrl}?${query}`);
    //   return res;
    // }

    // getRecycleBinTasks(params = {}) {
    //   params = normalizeTaskGetParams(params);
    //   const query = transformObjToQuery({ ...params, deleted: true });
    //   const res = mockApi.get(`${baseUrl}?${query}`);
    //   return res;
    // }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new TaskService());

/***/ }),

/***/ "./assets/index.js":
/*!*************************!*\
  !*** ./assets/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteIcon: () => (/* reexport safe */ _delete_svg__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   editIcon: () => (/* reexport safe */ _edit_svg__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   plusIcon: () => (/* reexport safe */ _plus_svg__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   restoreIcon: () => (/* reexport safe */ _restore_svg__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   searchIcon: () => (/* reexport safe */ _search_svg__WEBPACK_IMPORTED_MODULE_3__["default"])
/* harmony export */ });
/* harmony import */ var _delete_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delete.svg */ "./assets/delete.svg");
/* harmony import */ var _edit_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.svg */ "./assets/edit.svg");
/* harmony import */ var _plus_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plus.svg */ "./assets/plus.svg");
/* harmony import */ var _search_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search.svg */ "./assets/search.svg");
/* harmony import */ var _restore_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./restore.svg */ "./assets/restore.svg");







/***/ }),

/***/ "./controllers/index.js":
/*!******************************!*\
  !*** ./controllers/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectListController: () => (/* reexport safe */ _projectList__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   ProjectTaskListController: () => (/* reexport safe */ _projectTaskList__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   RecycleBinTaskListController: () => (/* reexport safe */ _recycleBinTaskList__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   SidebarController: () => (/* reexport safe */ _sidebar__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   TaskFilterController: () => (/* reexport safe */ _taskFilter__WEBPACK_IMPORTED_MODULE_4__["default"])
/* harmony export */ });
/* harmony import */ var _projectList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectList */ "./controllers/projectList.js");
/* harmony import */ var _projectTaskList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectTaskList */ "./controllers/projectTaskList.js");
/* harmony import */ var _recycleBinTaskList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recycleBinTaskList */ "./controllers/recycleBinTaskList.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar */ "./controllers/sidebar.js");
/* harmony import */ var _taskFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./taskFilter */ "./controllers/taskFilter.js");







/***/ }),

/***/ "./controllers/projectList.js":
/*!************************************!*\
  !*** ./controllers/projectList.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var ProjectListController = /*#__PURE__*/_createClass(function ProjectListController(model, view) {
  var _this = this;
  _classCallCheck(this, ProjectListController);
  _defineProperty(this, "onProjectListChanged", function (projects) {
    _this.view.initProjectList(projects);
  });
  _defineProperty(this, "handleAddProject", function (data) {
    _this.model.addProject(data);
  });
  _defineProperty(this, "handleDeleteTask", function (id) {
    _this.model.deleteTask(id);
  });
  this.model = model;
  this.view = view;
  this.model.bindProjectListChanged(this.onProjectListChanged);
  this.view.bindAddProject(this.handleAddProject);
  this.onProjectListChanged(this.model.projects);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectListController);

/***/ }),

/***/ "./controllers/projectTaskList.js":
/*!****************************************!*\
  !*** ./controllers/projectTaskList.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var ProjectTaskListController = /*#__PURE__*/function () {
  function ProjectTaskListController(model, view) {
    var _this = this;
    _classCallCheck(this, ProjectTaskListController);
    _defineProperty(this, "onTaskListChanged", function (tasks) {
      _this.view.initTaskList(tasks);
    });
    _defineProperty(this, "onEditFormOpen", function (task) {
      _this.view.initFormModal(task);
    });
    _defineProperty(this, "handleGetEditingTask", function (id) {
      _this.model.getEditingTask(id);
    });
    _defineProperty(this, "handleEditOrAddTask", function (data, actionType) {
      if (actionType === "add") {
        _this.model.addTask(data);
      } else _this.model.updateTask(data);
    });
    _defineProperty(this, "handleGetTasks", function (params) {
      _this.model.getTasks(params);
    });
    _defineProperty(this, "handleToggleTask", function (id, isCompleted) {
      var body = {
        completed: isCompleted
      };
      _this.model.toggleTask(id, body);
    });
    _defineProperty(this, "handleDeleteTask", function (id) {
      _this.model.deleteTask(id);
    });
    this.model = model;
    this.view = view;
    this.model.bindTaskListChanged(this.onTaskListChanged);
    this.model.bindFormChanged(this.onEditFormOpen);
    this.view.bindGetEditingTask(this.handleGetEditingTask);
    this.view.bindAddOrEditTask(this.handleEditOrAddTask);
    this.view.bindDeleteTask(this.handleDeleteTask);
    this.view.bindToggleTask(this.handleToggleTask);
  }
  return _createClass(ProjectTaskListController, [{
    key: "mount",
    value: function mount(params) {
      this.view.init();
      this.model.changeDefaultParams(params);
    }
  }, {
    key: "unmount",
    value: function unmount() {
      this.view.content.remove();
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectTaskListController);

/***/ }),

/***/ "./controllers/recycleBinTaskList.js":
/*!*******************************************!*\
  !*** ./controllers/recycleBinTaskList.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var RecycleBinTaskListController = /*#__PURE__*/function () {
  function RecycleBinTaskListController(model, view) {
    var _this = this;
    _classCallCheck(this, RecycleBinTaskListController);
    _defineProperty(this, "onTaskListChanged", function (tasks) {
      _this.view.initTaskList(tasks);
    });
    _defineProperty(this, "handleGetTasks", function (params) {
      _this.model.getTasks(params);
    });
    _defineProperty(this, "handleDeleteTask", function (id) {
      _this.model.deleteTask(id);
    });
    _defineProperty(this, "handleRestoreTask", function (id) {
      var body = {
        deleted: false
      };
      _this.model.restoreTask(id, body);
    });
    this.model = model;
    this.view = view;
    this.model.bindTaskListChanged(this.onTaskListChanged);
    this.view.bindDeleteTask(this.handleDeleteTask);
    this.view.bindRestoreTask(this.handleRestoreTask);
  }
  return _createClass(RecycleBinTaskListController, [{
    key: "mount",
    value: function mount(params) {
      this.view.init();
      this.model.changeDefaultParams(params);
    }
  }, {
    key: "unmount",
    value: function unmount() {
      this.view.content.remove();
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RecycleBinTaskListController);

/***/ }),

/***/ "./controllers/sidebar.js":
/*!********************************!*\
  !*** ./controllers/sidebar.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SidebarController)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var SidebarController = /*#__PURE__*/_createClass(function SidebarController(model, view) {
  _classCallCheck(this, SidebarController);
  this.model = model;
  this.view = view;
  this.view.initSelectedTab(this.model.query.get("projectId"));
});


/***/ }),

/***/ "./controllers/taskFilter.js":
/*!***********************************!*\
  !*** ./controllers/taskFilter.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TaskFilterController)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var TaskFilterController = /*#__PURE__*/_createClass(function TaskFilterController(model, view) {
  var _this = this;
  _classCallCheck(this, TaskFilterController);
  _defineProperty(this, "handleChangeQuery", function (data) {
    _this.model.changeQuery(data);
  });
  this.model = model;
  this.view = view;
  this.view.bindChangeQuery(this.handleChangeQuery);
  this.view.init(Object.fromEntries(this.model.query.entries()));
});


/***/ }),

/***/ "./models/appRoute.js":
/*!****************************!*\
  !*** ./models/appRoute.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var AppRouteModel = /*#__PURE__*/function () {
  function AppRouteModel() {
    _classCallCheck(this, AppRouteModel);
    this._initCurrentHref();
  }
  return _createClass(AppRouteModel, [{
    key: "_initCurrentHref",
    value: function _initCurrentHref() {
      this.href = window.location.hash.replace(/\#/, "").split("?");
      this.path = this.href[0];
      this.query = new URLSearchParams(this.href[1] || "");
    }
  }, {
    key: "_refreshHistory",
    value: function _refreshHistory() {
      history.pushState("", "", "#".concat(this.path, "?").concat(this.query.toString()));
      dispatchEvent(new HashChangeEvent("hashchange"));
    }
  }, {
    key: "changeQuery",
    value: function changeQuery(data) {
      var _this = this;
      this._initCurrentHref();
      Object.entries(data).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];
        if (value) _this.query.set(key, value);else _this.query["delete"](key);
        _this._refreshHistory();
      });
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppRouteModel);

/***/ }),

/***/ "./models/index.js":
/*!*************************!*\
  !*** ./models/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRouteModel: () => (/* reexport safe */ _appRoute__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   ProjectListModel: () => (/* reexport safe */ _projectList__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   ProjectTaskListModel: () => (/* reexport safe */ _projectTaskList__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   RecycleBinTaskListModel: () => (/* reexport safe */ _recycleBinTaskList__WEBPACK_IMPORTED_MODULE_3__["default"])
/* harmony export */ });
/* harmony import */ var _appRoute__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appRoute */ "./models/appRoute.js");
/* harmony import */ var _projectList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectList */ "./models/projectList.js");
/* harmony import */ var _projectTaskList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectTaskList */ "./models/projectTaskList.js");
/* harmony import */ var _recycleBinTaskList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recycleBinTaskList */ "./models/recycleBinTaskList.js");






/***/ }),

/***/ "./models/projectList.js":
/*!*******************************!*\
  !*** ./models/projectList.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_services_project_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/services/project.service */ "./api/services/project.service.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var ProjectListModel = /*#__PURE__*/function () {
  function ProjectListModel() {
    _classCallCheck(this, ProjectListModel);
    this.projects = _api_services_project_service__WEBPACK_IMPORTED_MODULE_0__["default"].getProjects() || [];
    if (!this.projects.length) _api_services_project_service__WEBPACK_IMPORTED_MODULE_0__["default"].createProject(new Project("default"));
  }
  return _createClass(ProjectListModel, [{
    key: "bindProjectListChanged",
    value: function bindProjectListChanged(handler) {
      this.onProjectListChanged = handler;
    }
  }, {
    key: "_refresh",
    value: function _refresh() {
      this.projects = _api_services_project_service__WEBPACK_IMPORTED_MODULE_0__["default"].getProjects();
      this.onProjectListChanged(this.projects);
    }
  }, {
    key: "addProject",
    value: function addProject(data) {
      _api_services_project_service__WEBPACK_IMPORTED_MODULE_0__["default"].createProject(data);
      this._refresh();
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectListModel);
var Project = /*#__PURE__*/_createClass(function Project(title) {
  _classCallCheck(this, Project);
  this.title = title;
});

/***/ }),

/***/ "./models/projectTaskList.js":
/*!***********************************!*\
  !*** ./models/projectTaskList.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectTaskListModel)
/* harmony export */ });
/* harmony import */ var _api_services_task_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/services/task.service */ "./api/services/task.service.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./models/task.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var requiredParams = {
  deleted: false
};
var ProjectTaskListModel = /*#__PURE__*/function () {
  function ProjectTaskListModel() {
    _classCallCheck(this, ProjectTaskListModel);
    this.tasks = [];
    this.editingTask = {};
    this.defaultParams = requiredParams;
  }
  return _createClass(ProjectTaskListModel, [{
    key: "bindTaskListChanged",
    value: function bindTaskListChanged(handler) {
      this.onTaskListChanged = handler;
    }
  }, {
    key: "bindFormChanged",
    value: function bindFormChanged(handler) {
      this.onEditingFormOpen = handler;
    }
  }, {
    key: "_refreshList",
    value: function _refreshList(tasks) {
      this.tasks = tasks ? tasks : _api_services_task_service__WEBPACK_IMPORTED_MODULE_0__["default"].getTasks(this.defaultParams);
      this.onTaskListChanged(this.tasks);
    }
  }, {
    key: "_refreshForm",
    value: function _refreshForm(task) {
      this.onEditingFormOpen(task);
    }
  }, {
    key: "getEditingTask",
    value: function getEditingTask(id) {
      var data = _api_services_task_service__WEBPACK_IMPORTED_MODULE_0__["default"].getTaskById(id);
      this.editingTask = data;
      this._refreshForm(this.editingTask);
    }
  }, {
    key: "changeDefaultParams",
    value: function changeDefaultParams(params) {
      this.defaultParams = _objectSpread(_objectSpread({}, requiredParams), params);
      this._refreshList();
    }
  }, {
    key: "deleteTask",
    value: function deleteTask(id) {
      _api_services_task_service__WEBPACK_IMPORTED_MODULE_0__["default"].deleteTask(id);
      this._refreshList();
    }
  }, {
    key: "addTask",
    value: function addTask(data) {
      var task = new _task__WEBPACK_IMPORTED_MODULE_1__.Task(_objectSpread(_objectSpread({}, data), {}, {
        projectId: this.defaultParams.projectId
      }));
      _api_services_task_service__WEBPACK_IMPORTED_MODULE_0__["default"].createTask(task);
      this._refreshList();
    }
  }, {
    key: "getTasks",
    value: function getTasks() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var res = _api_services_task_service__WEBPACK_IMPORTED_MODULE_0__["default"].getTasks(params);
      this._refreshList(res);
    }
  }, {
    key: "updateTask",
    value: function updateTask(data, id) {
      if (!id) {
        id = this.editingTask.id;
      }
      _api_services_task_service__WEBPACK_IMPORTED_MODULE_0__["default"].updateTask(id, _objectSpread(_objectSpread({}, this.editingTask), data));
      this.editingTask = {};
      this._refreshList();
    }
  }, {
    key: "toggleTask",
    value: function toggleTask(id, data) {
      _api_services_task_service__WEBPACK_IMPORTED_MODULE_0__["default"].updateTask(id, data);
      this._refreshList();
    }
  }]);
}();


/***/ }),

/***/ "./models/recycleBinTaskList.js":
/*!**************************************!*\
  !*** ./models/recycleBinTaskList.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RecycleBinTaskListModel)
/* harmony export */ });
/* harmony import */ var _api_services_task_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/services/task.service */ "./api/services/task.service.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var requiredParams = {
  deleted: true
};
var RecycleBinTaskListModel = /*#__PURE__*/function () {
  function RecycleBinTaskListModel() {
    _classCallCheck(this, RecycleBinTaskListModel);
    this.tasks = [];
    this.defaultParams = requiredParams;
  }
  return _createClass(RecycleBinTaskListModel, [{
    key: "bindTaskListChanged",
    value: function bindTaskListChanged(handler) {
      this.onTaskListChanged = handler;
    }
  }, {
    key: "_refreshList",
    value: function _refreshList(tasks) {
      this.tasks = tasks ? tasks : _api_services_task_service__WEBPACK_IMPORTED_MODULE_0__["default"].getTasks(this.defaultParams);
      this.onTaskListChanged(this.tasks);
    }
  }, {
    key: "changeDefaultParams",
    value: function changeDefaultParams(params) {
      this.defaultParams = _objectSpread(_objectSpread({}, requiredParams), params);
      this._refreshList();
    }
  }, {
    key: "deleteTask",
    value: function deleteTask(id) {
      _api_services_task_service__WEBPACK_IMPORTED_MODULE_0__["default"].deleteTask(id);
      this._refreshList();
    }
  }, {
    key: "restoreTask",
    value: function restoreTask(id) {
      _api_services_task_service__WEBPACK_IMPORTED_MODULE_0__["default"].restoreTask(id);
      this._refreshList();
    }
  }, {
    key: "getTasks",
    value: function getTasks() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var res = _api_services_task_service__WEBPACK_IMPORTED_MODULE_0__["default"].getTasks(_objectSpread(_objectSpread({}, params), this.defaultParams));
      this._refreshList(res);
    }
  }]);
}();


/***/ }),

/***/ "./models/task.js":
/*!************************!*\
  !*** ./models/task.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Task: () => (/* binding */ Task),
/* harmony export */   initTaskData: () => (/* binding */ initTaskData)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var Task = /*#__PURE__*/_createClass(function Task(data) {
  _classCallCheck(this, Task);
  var projectId = data.projectId,
    title = data.title,
    description = data.description,
    dueDate = data.dueDate,
    priority = data.priority,
    completed = data.completed;
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.completed = !!completed || false;
  this.projectId = projectId || defaultProjectId;
  this.deleted = false;
});
var defaultProjectId = "0";
var initTaskData = {
  title: "",
  description: "",
  dueDate: "",
  priority: "",
  completed: false,
  projectId: "",
  deleted: false
};

/***/ }),

/***/ "./shared/consts.js":
/*!**************************!*\
  !*** ./shared/consts.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   endpoints: () => (/* binding */ endpoints),
/* harmony export */   priorities: () => (/* binding */ priorities),
/* harmony export */   priorityModificators: () => (/* binding */ priorityModificators),
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var endpoints = {
  TASKS: "tasks",
  PROJECTS: "projects"
};
var priorities = {
  LOW: "low",
  NORMAL: "normal",
  HIGH: "high"
};
var priorityModificators = _defineProperty(_defineProperty(_defineProperty({}, priorities.LOW, "info-label--primary"), priorities.NORMAL, "info-label--secondary"), priorities.HIGH, "info-label--tertiary");
var routes = {
  PROJECT: "project",
  RECYCLEBIN: "recycle-bin"
};

/***/ }),

/***/ "./shared/domApi.js":
/*!**************************!*\
  !*** ./shared/domApi.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var DOMApi = /*#__PURE__*/function () {
  function DOMApi() {
    _classCallCheck(this, DOMApi);
  }
  return _createClass(DOMApi, [{
    key: "createElement",
    value: function createElement(tag, className) {
      var element = document.createElement(tag);
      if (className) {
        className.trim().split(" ").forEach(function (name) {
          element.classList.add(name);
        });
      }
      return element;
    }
  }, {
    key: "getElement",
    value: function getElement(selector) {
      var element = document.querySelector(selector);
      return element;
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new DOMApi());

/***/ }),

/***/ "./shared/store.js":
/*!*************************!*\
  !*** ./shared/store.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Store = /*#__PURE__*/function () {
  function Store() {
    _classCallCheck(this, Store);
    this.store = localStorage;
  }
  return _createClass(Store, [{
    key: "getData",
    value: function getData(key) {
      var data = this.store.getItem(key);
      return JSON.parse(data);
    }
  }, {
    key: "deleteData",
    value: function deleteData(key) {
      this.store.getItem(key);
    }
  }, {
    key: "setData",
    value: function setData(key, value) {
      this.store.setItem(key, JSON.stringify(value));
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Store());

/***/ }),

/***/ "./shared/utils/createId.js":
/*!**********************************!*\
  !*** ./shared/utils/createId.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createId)
/* harmony export */ });
function createId(entitie) {
  return String(entitie.length);
}

/***/ }),

/***/ "./shared/utils/filterObject.js":
/*!**************************************!*\
  !*** ./shared/utils/filterObject.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   filterDBValues: () => (/* binding */ filterDBValues)
/* harmony export */ });
var partialCheckKeys = ["title"];
function filterDBValues(obj, params) {
  var isValid = true;
  Object.keys(params).forEach(function (key) {
    if (partialCheckKeys.includes(key)) {
      var checkRes = stringFieldPartialCheck(obj[key], params[key]);
      if (!checkRes) isValid = false;
    } else if (obj[key] !== params[key]) isValid = false;
  });
  return isValid;
}
function stringFieldPartialCheck(str, str2) {
  return str.includes(str2) ? true : false;
}

/***/ }),

/***/ "./shared/utils/index.js":
/*!*******************************!*\
  !*** ./shared/utils/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createId: () => (/* reexport safe */ _createId__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   filterDBValues: () => (/* reexport safe */ _filterObject__WEBPACK_IMPORTED_MODULE_2__.filterDBValues),
/* harmony export */   normalizeTaskFields: () => (/* reexport safe */ _normalizeTask__WEBPACK_IMPORTED_MODULE_1__.normalizeTaskFields),
/* harmony export */   normalizeTaskGetParams: () => (/* reexport safe */ _normalizeTask__WEBPACK_IMPORTED_MODULE_1__.normalizeTaskGetParams),
/* harmony export */   transformObjToQuery: () => (/* reexport safe */ _searchParams__WEBPACK_IMPORTED_MODULE_3__.transformObjToQuery),
/* harmony export */   transformQueryToObj: () => (/* reexport safe */ _searchParams__WEBPACK_IMPORTED_MODULE_3__.transformQueryToObj)
/* harmony export */ });
/* harmony import */ var _createId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createId */ "./shared/utils/createId.js");
/* harmony import */ var _normalizeTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./normalizeTask */ "./shared/utils/normalizeTask.js");
/* harmony import */ var _filterObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filterObject */ "./shared/utils/filterObject.js");
/* harmony import */ var _searchParams__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./searchParams */ "./shared/utils/searchParams.js");






/***/ }),

/***/ "./shared/utils/normalizeTask.js":
/*!***************************************!*\
  !*** ./shared/utils/normalizeTask.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   normalizeTaskFields: () => (/* binding */ normalizeTaskFields),
/* harmony export */   normalizeTaskGetParams: () => (/* binding */ normalizeTaskGetParams)
/* harmony export */ });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consts */ "./shared/consts.js");

var normalizeTaskFields = function normalizeTaskFields(data) {
  if (typeof (data === null || data === void 0 ? void 0 : data.completed) === "string" && data.completed.match(/true|false/)) data.completed = stringToBoolean(data.completed);
  if (typeof (data === null || data === void 0 ? void 0 : data.deleted) === "string" && data.deleted.match(/true|false/)) data.deleted = stringToBoolean(data.deleted);
  if (typeof (data === null || data === void 0 ? void 0 : data.id) === "number") data.id = String(data.id);
  if (typeof (data === null || data === void 0 ? void 0 : data.projectId) === "number") data.projectId = String(data.projectId);
  return data;
};
var normalizeTaskGetParams = function normalizeTaskGetParams(params) {
  params = normalizeTaskFields(params);
  var _params = params,
    title = _params.title,
    priority = _params.priority,
    completed = _params.completed;
  if (!title) delete params.title;
  if (typeof completed !== "boolean") delete params.completed;
  if (!Object.values(_consts__WEBPACK_IMPORTED_MODULE_0__.priorities).includes(priority)) {
    delete params.priority;
  }
  return params;
};
var stringToBoolean = function stringToBoolean(string) {
  return string === "true" ? true : false;
};

/***/ }),

/***/ "./shared/utils/searchParams.js":
/*!**************************************!*\
  !*** ./shared/utils/searchParams.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   transformObjToQuery: () => (/* binding */ transformObjToQuery),
/* harmony export */   transformQueryToObj: () => (/* binding */ transformQueryToObj)
/* harmony export */ });
function transformQueryToObj(query) {
  var searchParams = new URLSearchParams(query);
  var obj = Object.fromEntries(searchParams.entries());
  return obj;
}
function transformObjToQuery(obj) {
  var searchParams = new URLSearchParams(obj);
  var query = searchParams.toString();
  return query;
}

/***/ }),

/***/ "./views/index.js":
/*!************************!*\
  !*** ./views/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectListView: () => (/* reexport safe */ _projectList__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   ProjectTaskListView: () => (/* reexport safe */ _projectTaskList__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   RecycleBinTaskListView: () => (/* reexport safe */ _recycleBinTaskList__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   SidebarView: () => (/* reexport safe */ _sidebar__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   TaskFilterView: () => (/* reexport safe */ _taskFilter__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _taskFilter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskFilter */ "./views/taskFilter.js");
/* harmony import */ var _projectList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectList */ "./views/projectList.js");
/* harmony import */ var _projectTaskList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectTaskList */ "./views/projectTaskList.js");
/* harmony import */ var _recycleBinTaskList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recycleBinTaskList */ "./views/recycleBinTaskList.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar */ "./views/sidebar.js");







/***/ }),

/***/ "./views/projectList.js":
/*!******************************!*\
  !*** ./views/projectList.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets */ "./assets/index.js");
/* harmony import */ var _shared_domApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/domApi */ "./shared/domApi.js");
/* harmony import */ var _shared_consts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/consts */ "./shared/consts.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var ProjectListView = /*#__PURE__*/function () {
  function ProjectListView(root) {
    _classCallCheck(this, ProjectListView);
    this.root = root || _shared_domApi__WEBPACK_IMPORTED_MODULE_1__["default"].getElement(".sidebar__list");
    this.projectsWrapper = _shared_domApi__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("li", "projects");
    this.projectsTop = _shared_domApi__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("div", "projects__top projects__top--collapsed");
    this.projectsTitle = _shared_domApi__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("h1", "projects__title");
    this.projectsTitle.textContent = "Projects";
    this.projectCreateBtn = _shared_domApi__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("button", "projects__create-btn");
    this.projectCreateBtnImg = _shared_domApi__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("img");
    this.projectCreateBtnImg.alt = "plus";
    this.projectCreateBtnImg.src = _assets__WEBPACK_IMPORTED_MODULE_0__.plusIcon;
    this.projectCreateBtn.append(this.projectCreateBtnImg);
    this.projectForm = _shared_domApi__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("form", "projects__form dropdown-form");
    this.projectFormField = _shared_domApi__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("input", "dropdown-form__field");
    this.projectFormField.name = "title";
    this.projectFormField.placeholder = "Enter the name of the project";
    this.projectFormField.maxLength = "15";
    this.projectFormField.required = true;
    this.projectSubmitInput = _shared_domApi__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("input", "dropdown-form__submit");
    this.projectSubmitInput.type = "submit";
    this.projectSubmitInput.hidden = true;
    this.projectFormField.placeholder = "Enter the name of the project";
    this.projectForm.append(this.projectFormField, this.projectSubmitInput);
    this.projectsTop.append(this.projectsTitle, this.projectCreateBtn, this.projectForm);
    this.projectList = _shared_domApi__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("ul", "projects__list");
    this.projectsWrapper.append(this.projectsTop, this.projectList);
    this.root.append(this.projectsWrapper);
    this._initLocalListener();
  }
  return _createClass(ProjectListView, [{
    key: "_initLocalListener",
    value: function _initLocalListener() {
      var _this = this;
      this.projectCreateBtn.addEventListener("click", function () {
        var isMenuCollapsed = _this.projectsTop.classList.contains("projects__top--collapsed");
        if (isMenuCollapsed) {
          _this.projectFormField.focus();
        } else _this.projectFormField.blur();
        _this.projectsTop.classList.toggle("projects__top--collapsed");
      });
    }
  }, {
    key: "initProjectList",
    value: function initProjectList(projects) {
      var _this2 = this;
      this.projectList.innerHTML = "";
      projects.forEach(function (project, index) {
        var id = project.id,
          title = project.title;
        var projectItem = _shared_domApi__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("li", "sidebar__item tab");
        projectItem.id = "projectId:".concat(id);
        var projectAnchor = _shared_domApi__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("a", "sidebar__link");
        projectAnchor.href = "#".concat(_shared_consts__WEBPACK_IMPORTED_MODULE_2__.routes.PROJECT, "?projectId=").concat(id);
        projectAnchor.textContent = title;
        projectItem.append(projectAnchor);
        _this2.projectList.append(projectItem);
      });
    }
  }, {
    key: "bindAddProject",
    value: function bindAddProject(handler) {
      this.projectForm.addEventListener("submit", function (event) {
        event.preventDefault();
        var data = Object.fromEntries(new FormData(event.target));
        handler(data);
      });
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectListView);

/***/ }),

/***/ "./views/projectTaskList.js":
/*!**********************************!*\
  !*** ./views/projectTaskList.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectTaskListView)
/* harmony export */ });
/* harmony import */ var _shared_domApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/domApi */ "./shared/domApi.js");
/* harmony import */ var _taskList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskList */ "./views/taskList.js");
/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets */ "./assets/index.js");
/* harmony import */ var _models_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/task */ "./models/task.js");
/* harmony import */ var _shared_consts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/consts */ "./shared/consts.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var ProjectTaskListView = /*#__PURE__*/function (_TaskListView) {
  function ProjectTaskListView() {
    var _this;
    _classCallCheck(this, ProjectTaskListView);
    _this = _callSuper(this, ProjectTaskListView);
    _this.modalForm = _shared_domApi__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("form", "modal-form");
    _this.modal = _shared_domApi__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("dialog", "modal");
    _this.modalCloseBtn = _shared_domApi__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", "modal__close-btn btn btn--primary");
    _this.modalCloseBtn.textContent = "close";
    _this.modal.append(_this.modalCloseBtn, _this.modalForm);
    _this.root.append(_this.modal);
    _this._initLocalListeners();
    return _this;
  }
  _inherits(ProjectTaskListView, _TaskListView);
  return _createClass(ProjectTaskListView, [{
    key: "_initLocalListeners",
    value: function _initLocalListeners() {
      var _this2 = this;
      this.modalCloseBtn.addEventListener("click", function (e) {
        _this2._closeModalForm();
      });
    }
  }, {
    key: "_closeModalForm",
    value: function _closeModalForm() {
      this.modalForm.innerHTML = "";
      this.modal.close();
    }
  }, {
    key: "initTaskList",
    value: function initTaskList(tasks) {
      var _this3 = this;
      this.taskListRoot.innerHTML = "";
      tasks.forEach(function (task) {
        var taskItem = _this3.createSingleTask(task);
        _this3.taskListRoot.append(taskItem);
        var taskCheckbox = _shared_domApi__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("input", "tasks__checkbox");
        taskCheckbox.type = "checkbox";
        taskCheckbox.checked = task.completed;
        var taskActions = _shared_domApi__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", "tasks__actions");
        var deleteBtn = _shared_domApi__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", "tasks__delete-btn");
        var deleteBtnIcon = _shared_domApi__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("img");
        deleteBtnIcon.alt = "delete";
        deleteBtnIcon.src = _assets__WEBPACK_IMPORTED_MODULE_2__.deleteIcon;
        deleteBtn.append(deleteBtnIcon);
        var editBtn = _shared_domApi__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", "tasks__edit-btn");
        var editBtnIcon = _shared_domApi__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("img");
        editBtnIcon.alt = "edit";
        editBtnIcon.src = _assets__WEBPACK_IMPORTED_MODULE_2__.editIcon;
        editBtn.append(editBtnIcon);
        taskActions.append(editBtn, deleteBtn);
        taskItem.append(taskCheckbox, taskActions);
      });
      var addTaskCard = _shared_domApi__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("li", "tasks__item");
      var addCardBtn = _shared_domApi__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", "tasks__add-btn");
      var addTaskBtnImg = _shared_domApi__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("img");
      addTaskBtnImg.alt = "plus";
      addTaskBtnImg.src = _assets__WEBPACK_IMPORTED_MODULE_2__.plusIcon;
      addCardBtn.append(addTaskBtnImg);
      addTaskCard.append(addCardBtn);
      this.taskListRoot.append(addTaskCard);
      addCardBtn.addEventListener("click", function () {
        _this3.initFormModal();
      });
    }
  }, {
    key: "initFormModal",
    value: function initFormModal() {
      var initValues = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _models_task__WEBPACK_IMPORTED_MODULE_3__.initTaskData;
      var completed = initValues.completed,
        title = initValues.title,
        dueDate = initValues.dueDate,
        priority = initValues.priority,
        description = initValues.description;
      if (!initValues.title) {
        this.modalForm.classList.remove("edit");
      } else {
        this.modalForm.classList.add("edit");
      }
      var modalFormFields = _shared_domApi__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", "modal-form__fields");
      var titleLabel = _shared_domApi__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("label");
      titleLabel.setAttribute("for", "title");
      titleLabel.textContent = "Title";
      var titleField = _shared_domApi__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("input", "modal-form__title");
      titleField.type = "text";
      titleField.value = title;
      titleField.name = "title";
      titleField.id = "title";
      titleField.autofocus = true;
      titleField.maxLength = 20;
      titleField.required = true;
      var priorityLabel = _shared_domApi__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("label");
      priorityLabel.setAttribute("for", "priority");
      priorityLabel.textContent = "Priority";
      var priorityFieldset = _shared_domApi__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("fieldset", "modal-form__priority");
      priorityFieldset.id = "priority";
      Object.values(_shared_consts__WEBPACK_IMPORTED_MODULE_4__.priorities).forEach(function (item) {
        var priorityField = _shared_domApi__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("input", "info-label__input");
        priorityField.type = "radio";
        priorityField.value = item;
        priorityField.name = "priority";
        priorityField.id = item;
        priorityField.checked = item === priority;
        priorityField.required = true;
        var priorityFieldLabel = _shared_domApi__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("label", "modal-form__priority-label info-label ".concat(_shared_consts__WEBPACK_IMPORTED_MODULE_4__.priorityModificators[item]));
        priorityFieldLabel.setAttribute("for", item);
        priorityFieldLabel.textContent = item;
        priorityFieldset.append(priorityField, priorityFieldLabel);
      });
      var descriptionLabel = _shared_domApi__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("label");
      descriptionLabel.setAttribute("for", "description");
      descriptionLabel.textContent = "Description";
      var descriptionField = _shared_domApi__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("textarea", "modal-form__description textarea");
      descriptionField.value = description;
      descriptionField.name = "description";
      descriptionField.id = "description";
      descriptionField.required = true;
      var dueDateLabel = _shared_domApi__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("label");
      dueDateLabel.setAttribute("for", "dueDate");
      dueDateLabel.textContent = "Due date";
      var dueDateField = _shared_domApi__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("input", "modal-form__dueDate");
      dueDateField.type = "date";
      dueDateField.value = dueDate;
      dueDateField.name = "dueDate";
      dueDateField.id = "dueDate";
      dueDateField.required = true;
      var completedLabel = _shared_domApi__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("label");
      completedLabel.setAttribute("for", "completed");
      completedLabel.textContent = "Completed";
      var completedField = _shared_domApi__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("input", "modal-form__complete");
      completedField.type = "checkbox";
      completedField.checked = completed;
      completedField.name = "completed";
      completedField.id = "completed";
      modalFormFields.append(titleLabel, titleField, priorityLabel, priorityFieldset, dueDateLabel, dueDateField, descriptionLabel, descriptionField, completedLabel, completedField);
      var modalFormActions = _shared_domApi__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", "modal-form__actions");
      var submitBtn = _shared_domApi__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", "modal-form__save btn btn--primary");
      submitBtn.textContent = "Save";
      submitBtn.type = "submit";
      var resetBtn = _shared_domApi__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", "modal-form__reset btn btn--primary");
      resetBtn.textContent = "Reset";
      resetBtn.type = "reset";
      modalFormActions.append(submitBtn, resetBtn);
      this.modalForm.append(modalFormFields, modalFormActions);
      this.modal.showModal();
    }
  }, {
    key: "bindGetEditingTask",
    value: function bindGetEditingTask(handler) {
      this.taskListRoot.addEventListener("click", function (event) {
        if (event.target.closest(".tasks__edit-btn")) {
          var id = event.target.closest(".tasks__item").id.split(":")[1];
          handler(id);
        }
      });
    }
  }, {
    key: "bindAddOrEditTask",
    value: function bindAddOrEditTask(handler) {
      var _this4 = this;
      this.modalForm.addEventListener("submit", function (e) {
        e.preventDefault();
        var formData = Object.fromEntries(new FormData(_this4.modalForm));
        if (_this4.modalForm.className.includes("edit")) {
          handler(formData, "edit");
        } else handler(formData, "add");
        e.target.reset();
        _this4._closeModalForm();
      });
    }
  }, {
    key: "bindDeleteTask",
    value: function bindDeleteTask(handler) {
      this.taskListRoot.addEventListener("click", function (event) {
        if (event.target.closest(".tasks__delete-btn")) {
          var id = event.target.closest(".tasks__item").id.split(":")[1];
          handler(id);
        }
      });
    }
  }, {
    key: "bindToggleTask",
    value: function bindToggleTask(handler) {
      this.taskListRoot.addEventListener("change", function (event) {
        var checkbox = event.target.closest(".tasks__checkbox");
        if (checkbox) {
          var currentTask = checkbox.closest(".tasks__item");
          var id = currentTask.closest(".tasks__item").id.split(":")[1];
          handler(id, checkbox.checked);
        }
      });
    }
  }]);
}(_taskList__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./views/recycleBinTaskList.js":
/*!*************************************!*\
  !*** ./views/recycleBinTaskList.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets */ "./assets/index.js");
/* harmony import */ var _taskList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskList */ "./views/taskList.js");
/* harmony import */ var _shared_domApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/domApi */ "./shared/domApi.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var RecycleBinTaskListView = /*#__PURE__*/function (_TaskListView) {
  function RecycleBinTaskListView() {
    _classCallCheck(this, RecycleBinTaskListView);
    return _callSuper(this, RecycleBinTaskListView);
  }
  _inherits(RecycleBinTaskListView, _TaskListView);
  return _createClass(RecycleBinTaskListView, [{
    key: "initTaskList",
    value: function initTaskList(tasks) {
      var _this = this;
      this.taskListRoot.innerHTML = "";
      tasks.forEach(function (task) {
        var taskItem = _this.createSingleTask(task);
        _this.taskListRoot.append(taskItem);
        var taskCheckbox = _shared_domApi__WEBPACK_IMPORTED_MODULE_2__["default"].createElement("input", "tasks__checkbox");
        taskCheckbox.setAttribute("type", "checkbox");
        taskCheckbox.checked = task.completed;
        taskCheckbox.disabled = true;
        var taskActions = _shared_domApi__WEBPACK_IMPORTED_MODULE_2__["default"].createElement("div", "tasks__actions");
        var deleteBtn = _shared_domApi__WEBPACK_IMPORTED_MODULE_2__["default"].createElement("button", "tasks__delete-btn");
        var deleteBtnIcon = _shared_domApi__WEBPACK_IMPORTED_MODULE_2__["default"].createElement("img");
        deleteBtnIcon.alt = "delete";
        deleteBtnIcon.src = _assets__WEBPACK_IMPORTED_MODULE_0__.deleteIcon;
        deleteBtn.append(deleteBtnIcon);
        var restoreBtn = _shared_domApi__WEBPACK_IMPORTED_MODULE_2__["default"].createElement("button", "tasks__restore-btn");
        var restoreBtnIcon = _shared_domApi__WEBPACK_IMPORTED_MODULE_2__["default"].createElement("img");
        restoreBtnIcon.alt = "restore";
        restoreBtnIcon.src = _assets__WEBPACK_IMPORTED_MODULE_0__.restoreIcon;
        restoreBtn.append(restoreBtnIcon);
        taskActions.append(restoreBtn, deleteBtn);
        taskItem.append(taskCheckbox, taskActions);
      });
    }
  }, {
    key: "bindRestoreTask",
    value: function bindRestoreTask(handler) {
      this.taskListRoot.addEventListener("click", function (event) {
        if (event.target.closest(".tasks__restore-btn")) {
          var id = event.target.closest(".tasks__item").id.split(":")[1];
          handler(id);
        }
      });
    }
  }, {
    key: "bindDeleteTask",
    value: function bindDeleteTask(handler) {
      this.taskListRoot.addEventListener("click", function (event) {
        if (event.target.closest(".tasks__delete-btn")) {
          var id = event.target.closest(".tasks__item").id.split(":")[1];
          handler(id);
        }
      });
    }
  }]);
}(_taskList__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RecycleBinTaskListView);

/***/ }),

/***/ "./views/sidebar.js":
/*!**************************!*\
  !*** ./views/sidebar.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shared_consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/consts */ "./shared/consts.js");
/* harmony import */ var _shared_domApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/domApi */ "./shared/domApi.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var SidebarView = /*#__PURE__*/function () {
  function SidebarView() {
    _classCallCheck(this, SidebarView);
    this.root = _shared_domApi__WEBPACK_IMPORTED_MODULE_1__["default"].getElement(".layout");
    this.content = _shared_domApi__WEBPACK_IMPORTED_MODULE_1__["default"].getElement(".content");
    this.sidebar = _shared_domApi__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("aside", "sidebar");
    this.nav = _shared_domApi__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("nav", "sidebar__nav");
    this.list = _shared_domApi__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("ul", "sidebar__list");
    this.recycleBinTab = _shared_domApi__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("li", "sidebar__item tab sidebar__recycle-bin");
    this.recycleBinTabAnchor = _shared_domApi__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("a", "sidebar__link");
    this.recycleBinTabAnchor.href = "#".concat(_shared_consts__WEBPACK_IMPORTED_MODULE_0__.routes.RECYCLEBIN);
    this.recycleBinTabAnchor.textContent = "Recycle Bin";
    this.recycleBinTab.append(this.recycleBinTabAnchor);
    this.list.append(this.recycleBinTab);
    this.nav.append(this.list);
    this.sidebar.append(this.nav);
    this.root.append(this.sidebar);
    this.selectedTab = _shared_domApi__WEBPACK_IMPORTED_MODULE_1__["default"].getElement(".tab--selected");
    this._initLocalListener();
  }
  return _createClass(SidebarView, [{
    key: "_initLocalListener",
    value: function _initLocalListener() {
      var _this = this;
      this.list.addEventListener("click", function (e) {
        if (_this.selectedTab) _this.selectedTab.classList.remove("tab--selected");
        var target = e.target.closest(".sidebar__item");
        if (!target) return false;
        target.classList.add("tab--selected");
        _this.selectedTab = target;
      });
    }
  }, {
    key: "initSelectedTab",
    value: function initSelectedTab(currentProjectId) {
      var _this2 = this;
      window.onload = function () {
        if (currentProjectId) {
          var tab = document.getElementById("projectId:".concat(currentProjectId));
          if (tab) {
            tab.classList.add("tab--selected");
            _this2.selectedTab = tab;
          }
        } else {
          _this2.recycleBinTab.classList.add("tab--selected");
          _this2.selectedTab = _this2.recycleBinTab;
        }
      };
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SidebarView);

/***/ }),

/***/ "./views/taskFilter.js":
/*!*****************************!*\
  !*** ./views/taskFilter.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shared_domApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/domApi */ "./shared/domApi.js");
/* harmony import */ var _shared_consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/consts */ "./shared/consts.js");
/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets */ "./assets/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var priorityOptions = {
  all: "",
  low: _shared_consts__WEBPACK_IMPORTED_MODULE_1__.priorities.LOW,
  normal: _shared_consts__WEBPACK_IMPORTED_MODULE_1__.priorities.NORMAL,
  high: _shared_consts__WEBPACK_IMPORTED_MODULE_1__.priorities.HIGH
};
var completedOptions = {
  all: "",
  completed: "true",
  "in progress": "false"
};
var TaskFilterView = /*#__PURE__*/function () {
  function TaskFilterView(root) {
    _classCallCheck(this, TaskFilterView);
    this.root = root || _shared_domApi__WEBPACK_IMPORTED_MODULE_0__["default"].getElement(".content");
    this.filterForm = _shared_domApi__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("form", "tasks__filter-form filter-form");
    this.root.append(this.filterForm);
  }
  return _createClass(TaskFilterView, [{
    key: "init",
    value: function init(initData) {
      var _this = this;
      var _initData$title = initData.title,
        title = _initData$title === void 0 ? "" : _initData$title,
        completed = initData.completed,
        priority = initData.priority;
      this.filterFormSelects = _shared_domApi__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("fieldset", "filter-form__selects");
      this.priorityLabel = _shared_domApi__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("label");
      this.priorityLabel.setAttribute("for", "priority");
      this.priorityLabel.textContent = "Priority";
      this.prioritySelect = _shared_domApi__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("select", "filters__select select");
      this.prioritySelect.id = "priority";
      this.prioritySelect.name = "priority";
      Object.entries(priorityOptions).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];
        var option = _shared_domApi__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("option");
        option.value = value;
        option.textContent = key;
        option.selected = value === priority;
        _this.prioritySelect.append(option);
      });
      this.completedLabel = _shared_domApi__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("label");
      this.completedLabel.setAttribute("for", "completed");
      this.completedLabel.textContent = "Completed";
      this.completedSelect = _shared_domApi__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("select", "filters__select select");
      this.completedSelect.id = "completed";
      this.completedSelect.name = "completed";
      Object.entries(completedOptions).forEach(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
          key = _ref4[0],
          value = _ref4[1];
        var option = _shared_domApi__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("option");
        option.value = value;
        option.textContent = key;
        option.selected = value === completed;
        _this.completedSelect.append(option);
      });
      this.filterFormSelects.append(this.completedLabel, this.completedSelect, this.priorityLabel, this.prioritySelect);
      this.searchbar = _shared_domApi__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", "searchbar");
      this.searchbarField = _shared_domApi__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("input", "searchbar__field");
      this.searchbarField.value = title;
      this.searchbarField.name = "title";
      this.searchbarIcon = _shared_domApi__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("img", "searchbar__icon");
      this.searchbarIcon.src = _assets__WEBPACK_IMPORTED_MODULE_2__.searchIcon;
      this.searchbarIcon.alt = "search";
      this.searchbar.append(this.searchbarField, this.searchbarIcon);
      this.filterForm.append(this.filterFormSelects, this.searchbar);
      var onChange = function onChange() {
        return _this.filterForm.requestSubmit();
      };
      this.prioritySelect.addEventListener("change", onChange);
      this.completedSelect.addEventListener("change", onChange);
      this.searchbarField.addEventListener("input", onChange);
    }
  }, {
    key: "bindChangeQuery",
    value: function bindChangeQuery(handler) {
      this.filterForm.addEventListener("submit", function (e) {
        e.preventDefault();
        var data = Object.fromEntries(new FormData(e.target));
        handler(data);
      });
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TaskFilterView);

/***/ }),

/***/ "./views/taskList.js":
/*!***************************!*\
  !*** ./views/taskList.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TaskListView)
/* harmony export */ });
/* harmony import */ var _shared_consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/consts */ "./shared/consts.js");
/* harmony import */ var _shared_domApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/domApi */ "./shared/domApi.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var TaskListView = /*#__PURE__*/function () {
  function TaskListView(root) {
    _classCallCheck(this, TaskListView);
    this.root = root || _shared_domApi__WEBPACK_IMPORTED_MODULE_1__["default"].getElement(".content");
    this.content = _shared_domApi__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("div", "tasks");
    this.taskListRoot = _shared_domApi__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("ul", "tasks__list");
    this.content.append(this.taskListRoot);
  }
  return _createClass(TaskListView, [{
    key: "init",
    value: function init() {
      this.root.append(this.content);
    }
  }, {
    key: "createSingleTask",
    value: function createSingleTask(task) {
      var id = task.id,
        dueDate = task.dueDate,
        priority = task.priority,
        description = task.description,
        title = task.title;
      var taskItem = _shared_domApi__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("li", "tasks__item");
      taskItem.id = "taskId:".concat(id);
      var taskTitle = _shared_domApi__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("h1", "tasks__title");
      taskTitle.textContent = title;
      var taskStatus = _shared_domApi__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("div", "tasks__status");
      var taskPriority = _shared_domApi__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("span", "info-label ".concat(_shared_consts__WEBPACK_IMPORTED_MODULE_0__.priorityModificators[priority]));
      taskPriority.textContent = priority;
      var taskDueDate = _shared_domApi__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("span", "info-label info-label--fortiary");
      taskDueDate.textContent = dueDate;
      taskStatus.append(taskPriority, taskDueDate);
      var taskDescription = _shared_domApi__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("p", "tasks__description");
      taskDescription.textContent = description.slice(0, 100) + "...";
      taskItem.append(taskTitle, taskStatus, taskDescription);
      return taskItem;
    }
  }]);
}();


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./styles/base.css":
/*!****************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./styles/base.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --sidebar-bg: #161a23;
  --main-bg: #0c111d;
  --text: #fcfbfc;
  --text2: #979ca1;
  /* --card-bg: var(--text); */
  --edit-bg: #141b2b;
  --high-bg: #55160c;
  --high-text: #ffa8a1;
  --normal-bg: #053321;
  --normal-text: #7eeeb2;
  --low-bg: #062b3f;
  --low-text: #68b6da;
  --date-border: #4d3cdd;
  --border: #1c202c;
  --glass-bg: rgba(255, 255, 255, 0.1);
  --tab-height: 40px;
  --btn-primary-bg: #3e465c;
}

button,
input {
  cursor: pointer;
}

* {
  transition: all 0.4s linear;
}
`, "",{"version":3,"sources":["webpack://./styles/base.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,eAAe;EACf,gBAAgB;EAChB,4BAA4B;EAC5B,kBAAkB;EAClB,kBAAkB;EAClB,oBAAoB;EACpB,oBAAoB;EACpB,sBAAsB;EACtB,iBAAiB;EACjB,mBAAmB;EACnB,sBAAsB;EACtB,iBAAiB;EACjB,oCAAoC;EACpC,kBAAkB;EAClB,yBAAyB;AAC3B;;AAEA;;EAEE,eAAe;AACjB;;AAEA;EACE,2BAA2B;AAC7B","sourcesContent":[":root {\r\n  --sidebar-bg: #161a23;\r\n  --main-bg: #0c111d;\r\n  --text: #fcfbfc;\r\n  --text2: #979ca1;\r\n  /* --card-bg: var(--text); */\r\n  --edit-bg: #141b2b;\r\n  --high-bg: #55160c;\r\n  --high-text: #ffa8a1;\r\n  --normal-bg: #053321;\r\n  --normal-text: #7eeeb2;\r\n  --low-bg: #062b3f;\r\n  --low-text: #68b6da;\r\n  --date-border: #4d3cdd;\r\n  --border: #1c202c;\r\n  --glass-bg: rgba(255, 255, 255, 0.1);\r\n  --tab-height: 40px;\r\n  --btn-primary-bg: #3e465c;\r\n}\r\n\r\nbutton,\r\ninput {\r\n  cursor: pointer;\r\n}\r\n\r\n* {\r\n  transition: all 0.4s linear;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./styles/index.css":
/*!*****************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./styles/index.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./reset.css */ "../node_modules/css-loader/dist/cjs.js!./styles/reset.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_base_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./base.css */ "../node_modules/css-loader/dist/cjs.js!./styles/base.css");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_base_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  background-color: var(--main-bg);
  color: var(--text);
  font-family: "Gilroy", sans-serif;
  font-weight: 500;
}

ul {
  list-style: none;
}

.layout {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-areas: "sidebar content";
  height: 100vh;
  gap: 40px;
}

@media (max-width: 645px) {
  .layout {
    grid-template-columns: 150px 1fr;
  }
}

.content {
  grid-area: content;
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow-y: auto;
  gap: 50px;
}

.filters__select {
  width: 100px;
}
.searchbar {
  background: white;
  color: black;
  border-radius: 12px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 16px;
}

.searchbar__field {
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  position: absolute;
  padding: 0 30px 0 10px;
  cursor: auto;
}

.searchbar__icon {
  position: absolute;
  z-index: 1;
  right: 5px;
}

.sidebar {
  grid-area: sidebar;
  background-color: var(--sidebar-bg);

  padding: 20px 0;
  height: 100%;
  position: sticky;
  overflow-y: scroll;
}

.sidebar__nav {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.sidebar__list {
  margin-bottom: 20px;
  width: 100%;
}

.sidebar__link {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.projects__create-btn {
  background-color: transparent;
}

button:hover {
  background: var(--glass-bg);
}

.projects__create-btn img {
  width: 25px;
}

.projects__top {
  display: grid;
  gap: 20px;
  align-items: center;
  margin: 15px 0;
  padding: 0 15px;
  grid-template-columns: 1fr auto;
  height: fit-content;
  overflow: hidden;
}

.projects__top.projects__top--collapsed {
  height: 28px;
}
.projects__title {
  color: var(--text2);
}

.projects__form {
  grid-area: 2 /1 / 3/ 3;
}
.dropdown-form {
  gap: 5px;
  display: flex;
}

.dropdown-form__field {
  padding: 10px 20px;
  border-radius: 5px;
  padding: 10px 5px;
  width: 100%;
}

.projects__list {
  width: 100%;
  margin-bottom: 20px;
}

.tab {
  height: var(--tab-height);
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  cursor: pointer;
  position: relative;
}

.tab:hover {
  background-color: #d1c3c33d;
}

.tab--selected {
  background-color: #f1e4e43d;
}

.tab--selected::after {
  content: "";
  position: absolute;
  height: var(--tab-height);
  top: 0;
  right: 0;
  background-color: var(--text);
  width: 3px;
}

.tasks {
  grid-area: 2 / 1 /3 /3;
  word-break: break-word;
  height: 100%;
}
.tasks__list {
  display: grid;
  grid-template-rows: repeat(auto-fit, 200px);
  grid-template-columns: repeat(auto-fit, 200px);
  gap: 20px;
  height: 100%;
}
.tasks__item {
  border-radius: 7px;
  background-color: var(--card-bg);
  padding: 10px 15px;
  display: grid;
  border: 2px solid var(--border);
  grid-template-rows: auto auto 1fr auto;
  gap: 10px;
  justify-items: start;
  position: relative;
  height: 200px;
}
.tasks__title {
  font-size: 20px;
}

.tasks__description {
  font-size: 0.9rem;
}
.tasks__status {
  display: flex;
  gap: 6px;
  justify-content: center;
  align-items: center;
  font-size: 0.7rem;
}

.tasks__checkbox {
  width: 20px;
  height: 20px;
  accent-color: #ffff;
}

.tasks__dueDate {
}
.tasks__check-btn {
}
.tasks__actions {
  display: flex;
  gap: 5px;
  justify-self: end;
}

.tasks__add-btn {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.tasks__add-btn::after {
  content: "";
  background: var(--glass-bg);
  clip-path: inset(100% 0 0 0);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.tasks__add-btn:hover::after {
  clip-path: inset(0 0 0 0);
}

.tasks__restore-btn {
  width: 18px;
}

.tasks__restore-btn img {
  width: 100%;
}

.filter-form {
  display: grid;
  grid-template-columns: auto minmax(auto, 300px);
  gap: 20px;
  justify-content: space-between;
}

@media (max-width: 955px) {
  .filter-form {
    grid-template-columns: auto;
    grid-template-rows: 1fr auto;
  }
}
.filter-form__selects {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.filters__select {
  background-color: transparent;
  color: var(--white);
  border-radius: 3px;
  text-align: center;
}

/* -----modal----- */

.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px 30px;
  border: 3px solid var(--border);
  border-radius: 10px;
  background: var(--sidebar-bg);
  color: var(--white1);
}

.modal__close-btn {
  margin: 0 auto 20px auto;
}

.modal-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.modal-form__fields {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 20px;
}

.modal-form__title,
.modal-form__dueDate {
  background: var(--glass-bg);
  color: var(--white);
  border-radius: 5px;
  padding: 5px 10px;
}
.modal-form__priority {
  display: flex;
  gap: 5px;
}
.modal-form__description {
  resize: none;
  width: 100%;
  padding: 15px;
  border-radius: 15px;
  border: 0;
  background: var(--glass-bg);
  height: 150px;
  overflow: auto;
  color: var(--white);
}
.modal-form__complete {
  width: fit-content;
}

/* UI */

.select {
  border: 1px solid var(--border);
  padding: 5px 10px;
  background-color: var(--main-bg);
}

.btn {
  border-radius: 4px;
  padding: 5px 15px;
}

.btn--primary {
  background: var(--btn-primary-bg);
  color: var(--text);
}

.info-label {
  padding: 3px 6px;
  width: fit-content;
  height: fit-content;
  border-radius: 5px;
}

.modal-form__priority-label {
  filter: brightness(0.5);
}
.info-label__input:checked + .modal-form__priority-label {
  filter: brightness(1);
}

.info-label--secondary {
  border: 0.5px solid var(--normal-text);
  color: var(--normal-text);
  background-color: var(--normal-bg);
}

.info-label--tertiary {
  border: 0.5px solid var(--high-text);
  color: var(--high-text);
  background-color: var(--high-bg);
}

.info-label--fortiary {
  border: 0.5px solid var(--date-border);
  color: var(--text);
}

.info-label--primary {
  border: 0.5px solid var(--low-text);
  color: var(--low-text);
  background-color: var(--low-bg);
}

.info-label__input {
  width: 0;
  height: 0;
}

/* info */

.info {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 20px;
}
.info__title {
  /* grid-area: 1 / 1 / 2 / 3; */
}
.info__label {
}
.info__priority {
}
.info-label {
}
.info-label--tertiary {
}
.info__dueDate {
}
.info-label--fortiary {
}
.info__description {
}
.info__complete {
}

.info__actions {
  justify-self: end;
}
`, "",{"version":3,"sources":["webpack://./styles/index.css"],"names":[],"mappings":"AAGA;EACE,gCAAgC;EAChC,kBAAkB;EAClB,iCAAiC;EACjC,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,gCAAgC;EAChC,sCAAsC;EACtC,aAAa;EACb,SAAS;AACX;;AAEA;EACE;IACE,gCAAgC;EAClC;AACF;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,gBAAgB;EAChB,SAAS;AACX;;AAEA;EACE,YAAY;AACd;AACA;EACE,iBAAiB;EACjB,YAAY;EACZ,mBAAmB;EACnB,aAAa;EACb,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,OAAO;EACP,QAAQ;EACR,MAAM;EACN,SAAS;EACT,kBAAkB;EAClB,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,mCAAmC;;EAEnC,eAAe;EACf,YAAY;EACZ,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,SAAS;EACT,QAAQ;EACR,OAAO;EACP,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,SAAS;EACT,mBAAmB;EACnB,cAAc;EACd,eAAe;EACf,+BAA+B;EAC/B,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,YAAY;AACd;AACA;EACE,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;AACxB;AACA;EACE,QAAQ;EACR,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,iBAAiB;EACjB,WAAW;AACb;;AAEA;EACE,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;EACzB,aAAa;EACb,mBAAmB;EACnB,WAAW;EACX,uBAAuB;EACvB,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,yBAAyB;EACzB,MAAM;EACN,QAAQ;EACR,6BAA6B;EAC7B,UAAU;AACZ;;AAEA;EACE,sBAAsB;EACtB,sBAAsB;EACtB,YAAY;AACd;AACA;EACE,aAAa;EACb,2CAA2C;EAC3C,8CAA8C;EAC9C,SAAS;EACT,YAAY;AACd;AACA;EACE,kBAAkB;EAClB,gCAAgC;EAChC,kBAAkB;EAClB,aAAa;EACb,+BAA+B;EAC/B,sCAAsC;EACtC,SAAS;EACT,oBAAoB;EACpB,kBAAkB;EAClB,aAAa;AACf;AACA;EACE,eAAe;AACjB;;AAEA;EACE,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,QAAQ;EACR,uBAAuB;EACvB,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;AACrB;;AAEA;AACA;AACA;AACA;AACA;EACE,aAAa;EACb,QAAQ;EACR,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,SAAS;EACT,OAAO;EACP,QAAQ;AACV;;AAEA;EACE,WAAW;EACX,2BAA2B;EAC3B,4BAA4B;EAC5B,kBAAkB;EAClB,MAAM;EACN,SAAS;EACT,OAAO;EACP,QAAQ;AACV;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,+CAA+C;EAC/C,SAAS;EACT,8BAA8B;AAChC;;AAEA;EACE;IACE,2BAA2B;IAC3B,4BAA4B;EAC9B;AACF;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,eAAe;AACjB;;AAEA;EACE,6BAA6B;EAC7B,mBAAmB;EACnB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA,oBAAoB;;AAEpB;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,kBAAkB;EAClB,+BAA+B;EAC/B,mBAAmB;EACnB,6BAA6B;EAC7B,oBAAoB;AACtB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,+BAA+B;EAC/B,SAAS;AACX;;AAEA;;EAEE,2BAA2B;EAC3B,mBAAmB;EACnB,kBAAkB;EAClB,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,QAAQ;AACV;AACA;EACE,YAAY;EACZ,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,2BAA2B;EAC3B,aAAa;EACb,cAAc;EACd,mBAAmB;AACrB;AACA;EACE,kBAAkB;AACpB;;AAEA,OAAO;;AAEP;EACE,+BAA+B;EAC/B,iBAAiB;EACjB,gCAAgC;AAClC;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,iCAAiC;EACjC,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;AACzB;AACA;EACE,qBAAqB;AACvB;;AAEA;EACE,sCAAsC;EACtC,yBAAyB;EACzB,kCAAkC;AACpC;;AAEA;EACE,oCAAoC;EACpC,uBAAuB;EACvB,gCAAgC;AAClC;;AAEA;EACE,sCAAsC;EACtC,kBAAkB;AACpB;;AAEA;EACE,mCAAmC;EACnC,sBAAsB;EACtB,+BAA+B;AACjC;;AAEA;EACE,QAAQ;EACR,SAAS;AACX;;AAEA,SAAS;;AAET;EACE,aAAa;EACb,+BAA+B;EAC/B,SAAS;AACX;AACA;EACE,8BAA8B;AAChC;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;;AAEA;EACE,iBAAiB;AACnB","sourcesContent":["@import \"./reset.css\";\r\n@import \"./base.css\";\r\n\r\nbody {\r\n  background-color: var(--main-bg);\r\n  color: var(--text);\r\n  font-family: \"Gilroy\", sans-serif;\r\n  font-weight: 500;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n}\r\n\r\n.layout {\r\n  display: grid;\r\n  grid-template-columns: 200px 1fr;\r\n  grid-template-areas: \"sidebar content\";\r\n  height: 100vh;\r\n  gap: 40px;\r\n}\r\n\r\n@media (max-width: 645px) {\r\n  .layout {\r\n    grid-template-columns: 150px 1fr;\r\n  }\r\n}\r\n\r\n.content {\r\n  grid-area: content;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 20px;\r\n  overflow-y: auto;\r\n  gap: 50px;\r\n}\r\n\r\n.filters__select {\r\n  width: 100px;\r\n}\r\n.searchbar {\r\n  background: white;\r\n  color: black;\r\n  border-radius: 12px;\r\n  display: flex;\r\n  align-items: center;\r\n  position: relative;\r\n  overflow: hidden;\r\n  padding: 16px;\r\n}\r\n\r\n.searchbar__field {\r\n  left: 0;\r\n  right: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  position: absolute;\r\n  padding: 0 30px 0 10px;\r\n  cursor: auto;\r\n}\r\n\r\n.searchbar__icon {\r\n  position: absolute;\r\n  z-index: 1;\r\n  right: 5px;\r\n}\r\n\r\n.sidebar {\r\n  grid-area: sidebar;\r\n  background-color: var(--sidebar-bg);\r\n\r\n  padding: 20px 0;\r\n  height: 100%;\r\n  position: sticky;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.sidebar__nav {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.sidebar__list {\r\n  margin-bottom: 20px;\r\n  width: 100%;\r\n}\r\n\r\n.sidebar__link {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  left: 0;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.projects__create-btn {\r\n  background-color: transparent;\r\n}\r\n\r\nbutton:hover {\r\n  background: var(--glass-bg);\r\n}\r\n\r\n.projects__create-btn img {\r\n  width: 25px;\r\n}\r\n\r\n.projects__top {\r\n  display: grid;\r\n  gap: 20px;\r\n  align-items: center;\r\n  margin: 15px 0;\r\n  padding: 0 15px;\r\n  grid-template-columns: 1fr auto;\r\n  height: fit-content;\r\n  overflow: hidden;\r\n}\r\n\r\n.projects__top.projects__top--collapsed {\r\n  height: 28px;\r\n}\r\n.projects__title {\r\n  color: var(--text2);\r\n}\r\n\r\n.projects__form {\r\n  grid-area: 2 /1 / 3/ 3;\r\n}\r\n.dropdown-form {\r\n  gap: 5px;\r\n  display: flex;\r\n}\r\n\r\n.dropdown-form__field {\r\n  padding: 10px 20px;\r\n  border-radius: 5px;\r\n  padding: 10px 5px;\r\n  width: 100%;\r\n}\r\n\r\n.projects__list {\r\n  width: 100%;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.tab {\r\n  height: var(--tab-height);\r\n  display: flex;\r\n  align-items: center;\r\n  width: 100%;\r\n  justify-content: center;\r\n  cursor: pointer;\r\n  position: relative;\r\n}\r\n\r\n.tab:hover {\r\n  background-color: #d1c3c33d;\r\n}\r\n\r\n.tab--selected {\r\n  background-color: #f1e4e43d;\r\n}\r\n\r\n.tab--selected::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  height: var(--tab-height);\r\n  top: 0;\r\n  right: 0;\r\n  background-color: var(--text);\r\n  width: 3px;\r\n}\r\n\r\n.tasks {\r\n  grid-area: 2 / 1 /3 /3;\r\n  word-break: break-word;\r\n  height: 100%;\r\n}\r\n.tasks__list {\r\n  display: grid;\r\n  grid-template-rows: repeat(auto-fit, 200px);\r\n  grid-template-columns: repeat(auto-fit, 200px);\r\n  gap: 20px;\r\n  height: 100%;\r\n}\r\n.tasks__item {\r\n  border-radius: 7px;\r\n  background-color: var(--card-bg);\r\n  padding: 10px 15px;\r\n  display: grid;\r\n  border: 2px solid var(--border);\r\n  grid-template-rows: auto auto 1fr auto;\r\n  gap: 10px;\r\n  justify-items: start;\r\n  position: relative;\r\n  height: 200px;\r\n}\r\n.tasks__title {\r\n  font-size: 20px;\r\n}\r\n\r\n.tasks__description {\r\n  font-size: 0.9rem;\r\n}\r\n.tasks__status {\r\n  display: flex;\r\n  gap: 6px;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 0.7rem;\r\n}\r\n\r\n.tasks__checkbox {\r\n  width: 20px;\r\n  height: 20px;\r\n  accent-color: #ffff;\r\n}\r\n\r\n.tasks__dueDate {\r\n}\r\n.tasks__check-btn {\r\n}\r\n.tasks__actions {\r\n  display: flex;\r\n  gap: 5px;\r\n  justify-self: end;\r\n}\r\n\r\n.tasks__add-btn {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n.tasks__add-btn::after {\r\n  content: \"\";\r\n  background: var(--glass-bg);\r\n  clip-path: inset(100% 0 0 0);\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n.tasks__add-btn:hover::after {\r\n  clip-path: inset(0 0 0 0);\r\n}\r\n\r\n.tasks__restore-btn {\r\n  width: 18px;\r\n}\r\n\r\n.tasks__restore-btn img {\r\n  width: 100%;\r\n}\r\n\r\n.filter-form {\r\n  display: grid;\r\n  grid-template-columns: auto minmax(auto, 300px);\r\n  gap: 20px;\r\n  justify-content: space-between;\r\n}\r\n\r\n@media (max-width: 955px) {\r\n  .filter-form {\r\n    grid-template-columns: auto;\r\n    grid-template-rows: 1fr auto;\r\n  }\r\n}\r\n.filter-form__selects {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.filters__select {\r\n  background-color: transparent;\r\n  color: var(--white);\r\n  border-radius: 3px;\r\n  text-align: center;\r\n}\r\n\r\n/* -----modal----- */\r\n\r\n.modal {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  padding: 20px 30px;\r\n  border: 3px solid var(--border);\r\n  border-radius: 10px;\r\n  background: var(--sidebar-bg);\r\n  color: var(--white1);\r\n}\r\n\r\n.modal__close-btn {\r\n  margin: 0 auto 20px auto;\r\n}\r\n\r\n.modal-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n}\r\n\r\n.modal-form__fields {\r\n  display: grid;\r\n  grid-template-columns: auto 1fr;\r\n  gap: 20px;\r\n}\r\n\r\n.modal-form__title,\r\n.modal-form__dueDate {\r\n  background: var(--glass-bg);\r\n  color: var(--white);\r\n  border-radius: 5px;\r\n  padding: 5px 10px;\r\n}\r\n.modal-form__priority {\r\n  display: flex;\r\n  gap: 5px;\r\n}\r\n.modal-form__description {\r\n  resize: none;\r\n  width: 100%;\r\n  padding: 15px;\r\n  border-radius: 15px;\r\n  border: 0;\r\n  background: var(--glass-bg);\r\n  height: 150px;\r\n  overflow: auto;\r\n  color: var(--white);\r\n}\r\n.modal-form__complete {\r\n  width: fit-content;\r\n}\r\n\r\n/* UI */\r\n\r\n.select {\r\n  border: 1px solid var(--border);\r\n  padding: 5px 10px;\r\n  background-color: var(--main-bg);\r\n}\r\n\r\n.btn {\r\n  border-radius: 4px;\r\n  padding: 5px 15px;\r\n}\r\n\r\n.btn--primary {\r\n  background: var(--btn-primary-bg);\r\n  color: var(--text);\r\n}\r\n\r\n.info-label {\r\n  padding: 3px 6px;\r\n  width: fit-content;\r\n  height: fit-content;\r\n  border-radius: 5px;\r\n}\r\n\r\n.modal-form__priority-label {\r\n  filter: brightness(0.5);\r\n}\r\n.info-label__input:checked + .modal-form__priority-label {\r\n  filter: brightness(1);\r\n}\r\n\r\n.info-label--secondary {\r\n  border: 0.5px solid var(--normal-text);\r\n  color: var(--normal-text);\r\n  background-color: var(--normal-bg);\r\n}\r\n\r\n.info-label--tertiary {\r\n  border: 0.5px solid var(--high-text);\r\n  color: var(--high-text);\r\n  background-color: var(--high-bg);\r\n}\r\n\r\n.info-label--fortiary {\r\n  border: 0.5px solid var(--date-border);\r\n  color: var(--text);\r\n}\r\n\r\n.info-label--primary {\r\n  border: 0.5px solid var(--low-text);\r\n  color: var(--low-text);\r\n  background-color: var(--low-bg);\r\n}\r\n\r\n.info-label__input {\r\n  width: 0;\r\n  height: 0;\r\n}\r\n\r\n/* info */\r\n\r\n.info {\r\n  display: grid;\r\n  grid-template-columns: auto 1fr;\r\n  gap: 20px;\r\n}\r\n.info__title {\r\n  /* grid-area: 1 / 1 / 2 / 3; */\r\n}\r\n.info__label {\r\n}\r\n.info__priority {\r\n}\r\n.info-label {\r\n}\r\n.info-label--tertiary {\r\n}\r\n.info__dueDate {\r\n}\r\n.info-label--fortiary {\r\n}\r\n.info__description {\r\n}\r\n.info__complete {\r\n}\r\n\r\n.info__actions {\r\n  justify-self: end;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./styles/reset.css":
/*!*****************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./styles/reset.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  outline: none;
  border: none;
  box-sizing: border-box;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

a {
  text-decoration: none;
  color: inherit;
}

li {
  list-style: none;
}

button {
  background-color: transparent;
}
`, "",{"version":3,"sources":["webpack://./styles/reset.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,SAAS;EACT,eAAe;EACf,aAAa;EACb,wBAAwB;EACxB,aAAa;EACb,YAAY;EACZ,sBAAsB;AACxB;AACA,gDAAgD;AAChD;;;;;;;;;;;EAWE,cAAc;AAChB;AACA;EACE,cAAc;AAChB;AACA;;EAEE,gBAAgB;AAClB;AACA;;EAEE,YAAY;AACd;AACA;;;;EAIE,WAAW;EACX,aAAa;AACf;AACA;EACE,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;EACE,qBAAqB;EACrB,cAAc;AAChB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,6BAA6B;AAC/B","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  font-size: 100%;\r\n  font: inherit;\r\n  vertical-align: baseline;\r\n  outline: none;\r\n  border: none;\r\n  box-sizing: border-box;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle,\r\naside,\r\ndetails,\r\nfigcaption,\r\nfigure,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\nsection {\r\n  display: block;\r\n}\r\nbody {\r\n  line-height: 1;\r\n}\r\nol,\r\nul {\r\n  list-style: none;\r\n}\r\nblockquote,\r\nq {\r\n  quotes: none;\r\n}\r\nblockquote:before,\r\nblockquote:after,\r\nq:before,\r\nq:after {\r\n  content: \"\";\r\n  content: none;\r\n}\r\ntable {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: inherit;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n}\r\n\r\nbutton {\r\n  background-color: transparent;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!*************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \*************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./assets/delete.svg":
/*!***************************!*\
  !*** ./assets/delete.svg ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "ac4c570a42428a8dd367f915e5707048.svg");

/***/ }),

/***/ "./assets/edit.svg":
/*!*************************!*\
  !*** ./assets/edit.svg ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "fe655f3242080937b7587da01dbdbf4b.svg");

/***/ }),

/***/ "./assets/plus.svg":
/*!*************************!*\
  !*** ./assets/plus.svg ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "fbf0a69cafdc6131efd6184229aa138f.svg");

/***/ }),

/***/ "./assets/restore.svg":
/*!****************************!*\
  !*** ./assets/restore.svg ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "5841b4bca8ed3055c85c0eb848fe4072.svg");

/***/ }),

/***/ "./assets/search.svg":
/*!***************************!*\
  !*** ./assets/search.svg ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "059677cf3d2463d1295e2b8da2547020.svg");

/***/ }),

/***/ "./styles/index.css":
/*!**************************!*\
  !*** ./styles/index.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "../node_modules/css-loader/dist/cjs.js!./styles/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.css */ "./styles/index.css");
/* harmony import */ var _shared_consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/consts */ "./shared/consts.js");
/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controllers */ "./controllers/index.js");
/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views */ "./views/index.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models */ "./models/index.js");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/utils */ "./shared/utils/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


// const root = document.getElementById("root");






var sharedAppRouteModel = new _models__WEBPACK_IMPORTED_MODULE_4__.AppRouteModel();
new _controllers__WEBPACK_IMPORTED_MODULE_2__.TaskFilterController(sharedAppRouteModel, new _views__WEBPACK_IMPORTED_MODULE_3__.TaskFilterView());
new _controllers__WEBPACK_IMPORTED_MODULE_2__.SidebarController(sharedAppRouteModel, new _views__WEBPACK_IMPORTED_MODULE_3__.SidebarView());
new _controllers__WEBPACK_IMPORTED_MODULE_2__.ProjectListController(new _models__WEBPACK_IMPORTED_MODULE_4__.ProjectListModel(), new _views__WEBPACK_IMPORTED_MODULE_3__.ProjectListView());
var projectTaskListController = new _controllers__WEBPACK_IMPORTED_MODULE_2__.ProjectTaskListController(new _models__WEBPACK_IMPORTED_MODULE_4__.ProjectTaskListModel(), new _views__WEBPACK_IMPORTED_MODULE_3__.ProjectTaskListView());
var recycleBinTaskListController = new _controllers__WEBPACK_IMPORTED_MODULE_2__.RecycleBinTaskListController(new _models__WEBPACK_IMPORTED_MODULE_4__.RecycleBinTaskListModel(), new _views__WEBPACK_IMPORTED_MODULE_3__.RecycleBinTaskListView());
var onUrlChange = function onUrlChange() {
  var href = location.hash.replace(/\#/, "");
  var _href$split = href.split("?"),
    _href$split2 = _slicedToArray(_href$split, 2),
    path = _href$split2[0],
    _href$split2$ = _href$split2[1],
    params = _href$split2$ === void 0 ? "" : _href$split2$;
  params = (0,_shared_utils__WEBPACK_IMPORTED_MODULE_5__.transformQueryToObj)(params);
  switch (path) {
    case _shared_consts__WEBPACK_IMPORTED_MODULE_1__.routes.PROJECT:
      {
        recycleBinTaskListController.unmount();
        projectTaskListController.mount(params);
        break;
      }
    case _shared_consts__WEBPACK_IMPORTED_MODULE_1__.routes.RECYCLEBIN:
      {
        projectTaskListController.unmount();
        recycleBinTaskListController.mount(params);
        break;
      }
    default:
      {
        history.replaceState(null, null, "#project?projectId=0");
      }
  }
};
window.addEventListener("load", onUrlChange);
window.addEventListener("hashchange", onUrlChange);
})();

/******/ })()
;
//# sourceMappingURL=main.a3443def40faa4ee1115.js.map