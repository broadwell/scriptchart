webpackHotUpdate("main",{

/***/ "./js/components/App.js":
/*!******************************!*\
  !*** ./js/components/App.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bulma_css_bulma_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bulma/css/bulma.min.css */ \"./node_modules/bulma/css/bulma.min.css\");\n/* harmony import */ var bulma_css_bulma_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bulma_css_bulma_min_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! font-awesome/css/font-awesome.min.css */ \"./node_modules/font-awesome/css/font-awesome.min.css\");\n/* harmony import */ var font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ \"./js/components/Header.js\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer */ \"./js/components/Footer.js\");\n/* harmony import */ var _DashTabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DashTabs */ \"./js/components/DashTabs.js\");\n/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dnd-html5-backend */ \"./node_modules/react-dnd-html5-backend/lib/index.js\");\n/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dnd */ \"./node_modules/react-dnd/lib/index.js\");\n/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dnd__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _ManuscriptForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ManuscriptForm */ \"./js/components/ManuscriptForm.js\");\n/* harmony import */ var react_sidebar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-sidebar */ \"./node_modules/react-sidebar/dist/react-sidebar.esm.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\n // import \"./App.css\";\n\n\n // import \"./main.css\";\n\n // import ScriptChart from \"./ScriptChart\";\n\n\n\n\n\n\n\n\nvar App =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(App, _Component);\n\n  function App(props) {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));\n    _this.state = {\n      sidebarOpen: false,\n      sidebarDocked: true\n    };\n    _this.sidebarToggle = _this.sidebarToggle.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    _this.onSetSidebarOpen = _this.onSetSidebarOpen.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"onSetSidebarOpen\",\n    value: function onSetSidebarOpen(open) {\n      this.setState({\n        sidebarOpen: open\n      });\n    }\n  }, {\n    key: \"sidebarToggle\",\n    value: function sidebarToggle(docked) {\n      this.setState({\n        sidebarDocked: !this.state.sidebarDocked\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_sidebar__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n        sidebar: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"box\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", {\n          className: \"title is-4\"\n        }, \"Scriptchart options\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ManuscriptForm__WEBPACK_IMPORTED_MODULE_8__[\"default\"], null)),\n        open: this.state.sidebarOpen,\n        docked: this.state.sidebarDocked,\n        onSetOpen: this.onSetSidebarOpen,\n        styles: {\n          sidebar: {\n            background: \"white\"\n          }\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        className: \"button\",\n        onClick: this.sidebarToggle\n      }, \"Show/hide form\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DashTabs__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null)));\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_dnd__WEBPACK_IMPORTED_MODULE_7__[\"DragDropContext\"])(react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_6___default.a)(App));\n\n//# sourceURL=webpack:///./js/components/App.js?");

/***/ }),

/***/ "./js/components/DashTabs.css":
/*!************************************!*\
  !*** ./js/components/DashTabs.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./js/components/DashTabs.css?");

/***/ }),

/***/ "./js/components/DragAndDropTable.css":
/*!********************************************!*\
  !*** ./js/components/DragAndDropTable.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./js/components/DragAndDropTable.css?");

/***/ }),

/***/ "./js/components/index.css":
/*!*********************************!*\
  !*** ./js/components/index.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./js/components/index.css?");

/***/ }),

/***/ "./node_modules/bulma/css/bulma.min.css":
/*!**********************************************!*\
  !*** ./node_modules/bulma/css/bulma.min.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./node_modules/bulma/css/bulma.min.css?");

/***/ }),

/***/ "./node_modules/font-awesome/css/font-awesome.min.css":
/*!************************************************************!*\
  !*** ./node_modules/font-awesome/css/font-awesome.min.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./node_modules/font-awesome/css/font-awesome.min.css?");

/***/ }),

/***/ "?4e45":
false,

/***/ "?74ac":
false,

/***/ "?b789":
false,

/***/ "?bd2c":
false,

/***/ "?c6e4":
false

})