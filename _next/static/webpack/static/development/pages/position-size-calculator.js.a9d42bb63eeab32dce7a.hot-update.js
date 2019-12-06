webpackHotUpdate("static/development/pages/position-size-calculator.js",{

/***/ "./layouts/main.js":
/*!*************************!*\
  !*** ./layouts/main.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Main; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");
/* harmony import */ var _package__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../package */ "./package.json");
var _package__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../package */ "./package.json", 1);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");







var _jsxFileName = "/Users/aarnod01/code/trading-tools/layouts/main.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;






if (global.document) {
  var info = ["Version: ".concat(_package__WEBPACK_IMPORTED_MODULE_10__["version"])];

  for (var _i = 0, _info = info; _i < _info.length; _i++) {
    var message = _info[_i];
    console.log(message);
  }
}

var suffix = 'Trading tools';

var Main =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Main, _Component);

  function Main() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Main);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Main)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      theme: null
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Main, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.setState({
        theme: window.__theme
      });

      window.__onThemeChange = function () {
        _this2.setState({
          theme: window.__theme
        });
      };

      if (false) {}
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          title = _this$props.title,
          _this$props$descripti = _this$props.description,
          description = _this$props$descripti === void 0 ? 'Tools and resources for traders not to get rekt.' : _this$props$descripti;
      var tit = title ? "".concat(title, " \u2014 ").concat(suffix) : suffix;
      return __jsx("div", {
        className: "flex flex-col min-h-screen",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, __jsx("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, tit), __jsx("meta", {
        name: "description",
        content: description,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }), __jsx("link", {
        rel: "apple-touch-icon",
        sizes: "57x57",
        href: "/static/apple-icon-57x57.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }), __jsx("link", {
        rel: "apple-touch-icon",
        sizes: "60x60",
        href: "/static/apple-icon-60x60.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }), __jsx("link", {
        rel: "apple-touch-icon",
        sizes: "72x72",
        href: "/static/apple-icon-72x72.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }), __jsx("link", {
        rel: "apple-touch-icon",
        sizes: "76x76",
        href: "/static/apple-icon-76x76.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }), __jsx("link", {
        rel: "apple-touch-icon",
        sizes: "114x114",
        href: "/static/apple-icon-114x114.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }), __jsx("link", {
        rel: "apple-touch-icon",
        sizes: "120x120",
        href: "/static/apple-icon-120x120.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }), __jsx("link", {
        rel: "apple-touch-icon",
        sizes: "144x144",
        href: "/static/apple-icon-144x144.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }), __jsx("link", {
        rel: "apple-touch-icon",
        sizes: "152x152",
        href: "/static/apple-icon-152x152.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }), __jsx("link", {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/static/apple-icon-180x180.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }), __jsx("link", {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        href: "/static/android-icon-192x192.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }), __jsx("link", {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/static/favicon-32x32.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }), __jsx("link", {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        href: "/static/favicon-96x96.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }), __jsx("link", {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/static/favicon-16x16.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }), __jsx("link", {
        rel: "manifest",
        href: "/static/manifest.json",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }), __jsx("meta", {
        name: "msapplication-TileColor",
        content: "#ffffff",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }), __jsx("meta", {
        name: "msapplication-TileImage",
        content: "/ms-icon-144x144.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }), __jsx("meta", {
        name: "theme-color",
        content: "#ffffff",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }), __jsx("link", {
        rel: "shortcut icon",
        href: "/static/favicon.ico",
        type: "image/x-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }), __jsx("link", {
        rel: "icon",
        href: "/static/favicon.ico",
        type: "image/x-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }), __jsx("meta", {
        name: "viewport",
        content: "width=device-width,initial-scale=1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }), __jsx("meta", {
        name: "og:title",
        content: tit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }), __jsx("meta", {
        name: "og:description",
        content: description,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }), __jsx("meta", {
        name: "og:type",
        content: "website",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      })), __jsx("header", {
        className: "px-3 w-full",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, __jsx("div", {
        className: "max-w-md mr-auto ml-auto flex items-center justify-between",
        style: {
          height: '50px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, __jsx("div", {
        className: "pr-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, __jsx("a", {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_11__["FiBarChart"], {
        style: {
          height: '24',
          width: '24'
        },
        className: "text-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }))), this.state.theme !== null && __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, __jsx("button", {
        title: "Toggle dark/light theme",
        onClick: function onClick() {
          window.__setPreferredTheme(_this3.state.theme === 'light' ? 'dark' : 'light');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, this.state.theme === 'dark' ? __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_11__["FiSun"], {
        style: {
          height: '24',
          width: '24'
        },
        className: "text-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }) : __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_11__["FiMoon"], {
        style: {
          height: '24',
          width: '24'
        },
        className: "text-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }))))), __jsx("main", {
        className: "max-w-md px-3 mt-5 pb-10 mx-auto flex-1 w-full",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, this.props.children), __jsx("footer", {
        className: "py-3 px-3 w-full text-center p-4 bottom-0 border-t border-lgray",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, __jsx("div", {
        className: "font-bold",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }, "BTC tip: 36sBfcHd1FdLvynCuh6n5SBzCVAnzb5eeT"), __jsx("div", {
        className: "font-bold",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, "handcrafted with \u2764\uFE0Fby ", __jsx("a", {
        className: "hover:no-underline px-2 underline text-accent transition-all",
        href: "https://twitter.com/fewsats",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }, "@fewsats"))));
    }
  }]);

  return Main;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=position-size-calculator.js.a9d42bb63eeab32dce7a.hot-update.js.map