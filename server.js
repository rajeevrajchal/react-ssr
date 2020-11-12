/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
module.exports =
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./routes/Routes.js":
/*!**************************!*\
  !*** ./routes/Routes.js ***!
  \**************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _src_modules_landing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/modules/landing */ \"./src/modules/landing/index.js\");\n/* harmony import */ var _src_modules_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/modules/admin */ \"./src/modules/admin/index.js\");\n/* harmony import */ var _src_modules_landing_views_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/modules/landing/views/users */ \"./src/modules/landing/views/users/index.js\");\n;\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{\n  loadData: _src_modules_landing_views_users__WEBPACK_IMPORTED_MODULE_2__.loadData,\n  path: '/',\n  component: _src_modules_landing__WEBPACK_IMPORTED_MODULE_0__.default,\n  exact: true\n}, {\n  path: '/admin',\n  component: _src_modules_admin__WEBPACK_IMPORTED_MODULE_1__.default,\n  exact: true\n}]);\n\n//# sourceURL=webpack://ssr/./routes/Routes.js?");

/***/ }),

/***/ "./server/htmlToRender.js":
/*!********************************!*\
  !*** ./server/htmlToRender.js ***!
  \********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_1__);\n;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (markup, state) {\n  var helmetData = react_helmet__WEBPACK_IMPORTED_MODULE_0___default().renderStatic();\n  var html = \"\\n    <!DOCTYPE html>\\n        <head>\\n            \".concat(helmetData.title.toString(), \"\\n            \").concat(helmetData.meta.toString(), \"\\n            <link rel=\\\"stylesheet\\\" href=\\\"/css/style.css\\\"/>\\n        </head>\\n        <body>\\n            <div id=\\\"root\\\">\\n                \").concat(markup, \"\\n            </div>\\n            <script>window.INITIAL_STATE = \").concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_1___default()(state.getState()), \"</script>\\n            <script src=\\\"/js/bundle.js\\\" defer></script>\\n        </body>\\n    </html>\\n    \");\n  return html;\n});\n\n//# sourceURL=webpack://ssr/./server/htmlToRender.js?");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! namespace exports */
/*! exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-polyfill */ \"babel-polyfill\");\n/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _htmlToRender__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./htmlToRender */ \"./server/htmlToRender.js\");\n/* harmony import */ var _serverStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./serverStore */ \"./server/serverStore/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _routes_Routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../routes/Routes */ \"./routes/Routes.js\");\n;\n\n\n\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_1___default()();\napp.use(express__WEBPACK_IMPORTED_MODULE_1___default().static('public'));\napp.get('*', function (req, res, next) {\n  var store = (0,_serverStore__WEBPACK_IMPORTED_MODULE_6__.default)();\n  var promises = (0,react_router_config__WEBPACK_IMPORTED_MODULE_8__.matchRoutes)(_routes_Routes__WEBPACK_IMPORTED_MODULE_9__.default, req.path).map(function (_ref) {\n    var route = _ref.route;\n    return route.loadData ? route.loadData(store) : null;\n  });\n  Promise.all(promises).then(function () {\n    var context = {};\n    var content = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_3__.renderToString)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_7__.Provider, {\n      store: store\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router__WEBPACK_IMPORTED_MODULE_4__.StaticRouter, {\n      context: context,\n      location: req.path\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"div\", null, (0,react_router_config__WEBPACK_IMPORTED_MODULE_8__.renderRoutes)(_routes_Routes__WEBPACK_IMPORTED_MODULE_9__.default)))));\n    res.send((0,_htmlToRender__WEBPACK_IMPORTED_MODULE_5__.default)(content, store));\n  });\n});\nvar port = 3000;\napp.listen(port, function () {\n  return console.log(\"server listing at \".concat(port));\n});\n\n//# sourceURL=webpack://ssr/./server/index.js?");

/***/ }),

/***/ "./server/serverStore/index.js":
/*!*************************************!*\
  !*** ./server/serverStore/index.js ***!
  \*************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_store_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/store/reducer */ \"./src/store/reducer.js\");\n;\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n  return (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_src_store_reducer__WEBPACK_IMPORTED_MODULE_3__.default, {}, (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__.composeWithDevTools)((0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)((redux_thunk__WEBPACK_IMPORTED_MODULE_2___default()))));\n});\n\n//# sourceURL=webpack://ssr/./server/serverStore/index.js?");

/***/ }),

/***/ "./src/modules/admin/index.js":
/*!************************************!*\
  !*** ./src/modules/admin/index.js ***!
  \************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n;\n\nvar Admin = function Admin() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \" This is admin \"));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Admin);\n\n//# sourceURL=webpack://ssr/./src/modules/admin/index.js?");

/***/ }),

/***/ "./src/modules/landing/index.js":
/*!**************************************!*\
  !*** ./src/modules/landing/index.js ***!
  \**************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _views_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/users */ \"./src/modules/landing/views/users/index.js\");\n;\n\n\nvar Landing = function Landing() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \" i am landing \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_views_users__WEBPACK_IMPORTED_MODULE_1__.default, null));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Landing);\n\n//# sourceURL=webpack://ssr/./src/modules/landing/index.js?");

/***/ }),

/***/ "./src/modules/landing/views/users/index.js":
/*!**************************************************!*\
  !*** ./src/modules/landing/views/users/index.js ***!
  \**************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! export loadData [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadData\": () => /* binding */ loadData,\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../store/actions */ \"./src/store/actions.js\");\n;\n\n\n\nvar Users = function Users() {\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n\n  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {\n    return state.usersReducers;\n  }),\n      users = _useSelector.users; // useEffect(() => {\n  //     dispatch(actions.fetchUsers())\n  // }, [])\n\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \" all users list \"), users ? users.map(function (user, index) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      key: user.id\n    }, user.name);\n  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, \" No user found \"));\n};\n\nvar loadData = function loadData(store) {\n  return store.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_2__.fetchUsers());\n};\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Users);\n\n//# sourceURL=webpack://ssr/./src/modules/landing/views/users/index.js?");

/***/ }),

/***/ "./src/modules/landing/views/users/services/usersAction.js":
/*!*****************************************************************!*\
  !*** ./src/modules/landing/views/users/services/usersAction.js ***!
  \*****************************************************************/
/*! namespace exports */
/*! export fetchUsers [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchUsers\": () => /* binding */ fetchUsers\n/* harmony export */ });\n/* harmony import */ var _usersType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./usersType */ \"./src/modules/landing/views/users/services/usersType.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\nvar getUsers = function getUsers(users) {\n  return {\n    type: _usersType__WEBPACK_IMPORTED_MODULE_0__.GET_USERS,\n    users: users\n  };\n};\n\nvar fetchUsers = function fetchUsers() {\n  return /*#__PURE__*/function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {\n      var res;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return axios__WEBPACK_IMPORTED_MODULE_1___default().get('http://react-ssr-api.herokuapp.com/users');\n\n            case 2:\n              res = _context.sent;\n              dispatch(getUsers(res.data));\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function (_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n};\n\n//# sourceURL=webpack://ssr/./src/modules/landing/views/users/services/usersAction.js?");

/***/ }),

/***/ "./src/modules/landing/views/users/services/usersReducers.js":
/*!*******************************************************************!*\
  !*** ./src/modules/landing/views/users/services/usersReducers.js ***!
  \*******************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _usersType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./usersType */ \"./src/modules/landing/views/users/services/usersType.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar initialState = {\n  users: []\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var actions = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (actions.type) {\n    case _usersType__WEBPACK_IMPORTED_MODULE_0__.GET_USERS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        users: actions.users\n      });\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack://ssr/./src/modules/landing/views/users/services/usersReducers.js?");

/***/ }),

/***/ "./src/modules/landing/views/users/services/usersType.js":
/*!***************************************************************!*\
  !*** ./src/modules/landing/views/users/services/usersType.js ***!
  \***************************************************************/
/*! namespace exports */
/*! export GET_USERS [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GET_USERS\": () => /* binding */ GET_USERS\n/* harmony export */ });\nvar GET_USERS = 'GET_USERS';\n\n//# sourceURL=webpack://ssr/./src/modules/landing/views/users/services/usersType.js?");

/***/ }),

/***/ "./src/store/actions.js":
/*!******************************!*\
  !*** ./src/store/actions.js ***!
  \******************************/
/*! namespace exports */
/*! export fetchUsers [provided] [no usage info] [missing usage info prevents renaming] -> ./src/modules/landing/views/users/services/usersAction.js .fetchUsers */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchUsers\": () => /* reexport safe */ _modules_landing_views_users_services_usersAction__WEBPACK_IMPORTED_MODULE_0__.fetchUsers\n/* harmony export */ });\n/* harmony import */ var _modules_landing_views_users_services_usersAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/landing/views/users/services/usersAction */ \"./src/modules/landing/views/users/services/usersAction.js\");\n\n\n//# sourceURL=webpack://ssr/./src/store/actions.js?");

/***/ }),

/***/ "./src/store/reducer.js":
/*!******************************!*\
  !*** ./src/store/reducer.js ***!
  \******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_landing_views_users_services_usersReducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/landing/views/users/services/usersReducers */ \"./src/modules/landing/views/users/services/usersReducers.js\");\n;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n  usersReducers: _modules_landing_views_users_services_usersReducers__WEBPACK_IMPORTED_MODULE_1__.default\n}));\n\n//# sourceURL=webpack://ssr/./src/store/reducer.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

eval("module.exports = require(\"axios\");;\n\n//# sourceURL=webpack://ssr/external_%22axios%22?");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

eval("module.exports = require(\"babel-polyfill\");;\n\n//# sourceURL=webpack://ssr/external_%22babel-polyfill%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

eval("module.exports = require(\"express\");;\n\n//# sourceURL=webpack://ssr/external_%22express%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

eval("module.exports = require(\"react\");;\n\n//# sourceURL=webpack://ssr/external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

eval("module.exports = require(\"react-dom/server\");;\n\n//# sourceURL=webpack://ssr/external_%22react-dom/server%22?");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

eval("module.exports = require(\"react-helmet\");;\n\n//# sourceURL=webpack://ssr/external_%22react-helmet%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

eval("module.exports = require(\"react-redux\");;\n\n//# sourceURL=webpack://ssr/external_%22react-redux%22?");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

eval("module.exports = require(\"react-router\");;\n\n//# sourceURL=webpack://ssr/external_%22react-router%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

eval("module.exports = require(\"react-router-config\");;\n\n//# sourceURL=webpack://ssr/external_%22react-router-config%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

eval("module.exports = require(\"redux\");;\n\n//# sourceURL=webpack://ssr/external_%22redux%22?");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

eval("module.exports = require(\"redux-devtools-extension\");;\n\n//# sourceURL=webpack://ssr/external_%22redux-devtools-extension%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

eval("module.exports = require(\"redux-thunk\");;\n\n//# sourceURL=webpack://ssr/external_%22redux-thunk%22?");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

eval("module.exports = require(\"serialize-javascript\");;\n\n//# sourceURL=webpack://ssr/external_%22serialize-javascript%22?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./server/index.js");
/******/ })()
;