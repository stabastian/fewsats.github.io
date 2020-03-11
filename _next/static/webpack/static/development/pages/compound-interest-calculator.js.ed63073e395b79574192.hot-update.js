webpackHotUpdate("static/development/pages/compound-interest-calculator.js",{

/***/ "./components/calculator-row.js":
/*!**************************************!*\
  !*** ./components/calculator-row.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-tooltip */ "./node_modules/react-tooltip/dist/index.es.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");

var _jsxFileName = "/Users/aarnod01/code/trading-tools/components/calculator-row.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var CalculatorRow = function CalculatorRow(_ref) {
  var label = _ref.label,
      value = _ref.value,
      name = _ref.name,
      readOnly = _ref.readOnly,
      onChange = _ref.onChange,
      tip = _ref.tip,
      variant = _ref.variant,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'number' : _ref$type;
  return __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("td", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(readOnly ? 'bg-background' : 'bg-muted font-semibold', variant === 'long' && 'text-green font-bold', variant === 'short' && 'text-red font-bold', !variant && 'text-text font-semi-bold', 'truncate p-1 w-2/3 border border-highlight'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("div", {
    className: "flex items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("div", {
    className: "flex items-center mr-2 ml-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("div", {
    "data-tip": true,
    "data-for": label,
    className: "flex items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiHelpCircle"], {
    className: "text-gray-300 transition-all hover:text-lgray inline-block h-5 w-5 cursor-pointer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  })), __jsx(react_tooltip__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: label,
    event: "click focus",
    className: "customTooltipTheme",
    globalEventOff: "click",
    effect: "solid",
    place: 'right',
    clickable: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("div", {
    className: "text-xs font-light p-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, tip)))), __jsx("div", {
    className: "text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, label))), __jsx("td", {
    className: "p-1 w-1/3 border border-highlight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])('text-sm w-full text-right bg-background', variant === 'long' && 'text-green font-bold', variant === 'short' && 'text-red font-bold', !variant && (readOnly ? 'text-lgray ' : 'text-text')),
    type: type,
    name: name,
    onChange: onChange,
    value: value,
    readOnly: readOnly
  }, readOnly && {
    tabIndex: '-1'
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (CalculatorRow);

/***/ })

})
//# sourceMappingURL=compound-interest-calculator.js.ed63073e395b79574192.hot-update.js.map