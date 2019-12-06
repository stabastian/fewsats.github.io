webpackHotUpdate("static/development/pages/position-size-calculator.js",{

/***/ "./pages/position-size-calculator.js":
/*!*******************************************!*\
  !*** ./pages/position-size-calculator.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PosistionSizeCalculator; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! big.js */ "./node_modules/big.js/big.js");
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(big_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../layouts/main */ "./layouts/main.js");
/* harmony import */ var _components_calculator_row__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/calculator-row */ "./components/calculator-row.js");
/* harmony import */ var _components_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/select */ "./components/select.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../utils */ "./utils.js");















var _jsxFileName = "/Users/aarnod01/code/trading-tools/pages/position-size-calculator.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_14__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }








var LS_KEY = 'bitmex_calculator';
var pairs = [{
  key: 'XBTUSD',
  value: 'XBTUSD (BitMEX contracts)'
}, {
  key: 'ETHUSD',
  value: 'ETHUSD (BitMEX perpetual contracts)'
}, {
  key: 'ALTS',
  value: 'Alt pairs (BitMEX, Binance, etc...)'
}];
var STORAGE_VERSION = 4;
var defaultFormState = {
  capital: 1,
  entry: 8000,
  stop: 7000,
  target: 9000,
  risk: 5,
  ethPrice: 300
};

var PosistionSizeCalculator =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_13__["default"])(PosistionSizeCalculator, _Component);

  function PosistionSizeCalculator() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, PosistionSizeCalculator);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_10__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_11__["default"])(PosistionSizeCalculator)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_14__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_12__["default"])(_this), "state", {
      ready: false,
      storageVersion: STORAGE_VERSION,
      pair: 'ALTS',
      form: defaultFormState
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_14__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_12__["default"])(_this), "handleInputChange",
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee(e) {
        var name, value, ethPrice;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                name = e.target.name;
                value = e.target.value;

                if (!(e.target.name === 'pair')) {
                  _context.next = 10;
                  break;
                }

                _this.setState({
                  pair: e.target.value
                }, function () {
                  Object(_utils__WEBPACK_IMPORTED_MODULE_21__["set"])("".concat(LS_KEY, "_pair"), _this.state.pair);
                  var storedFormState = Object(_utils__WEBPACK_IMPORTED_MODULE_21__["get"])("".concat(LS_KEY, "_").concat(_this.state.pair));

                  _this.setState({
                    form: storedFormState || defaultFormState
                  });
                });

                if (!(value === 'ETHUSD')) {
                  _context.next = 9;
                  break;
                }

                _context.next = 7;
                return Object(_utils__WEBPACK_IMPORTED_MODULE_21__["getETHPrice"])();

              case 7:
                ethPrice = _context.sent;

                if (ethPrice) {
                  _this.setState(function (state) {
                    return _objectSpread({}, state, {
                      form: _objectSpread({}, state.form, {}, {
                        ethPrice: ethPrice
                      })
                    });
                  }, function () {
                    Object(_utils__WEBPACK_IMPORTED_MODULE_21__["set"])("".concat(LS_KEY, "_").concat(_this.state.pair), _this.state.form);
                  });
                }

              case 9:
                return _context.abrupt("return");

              case 10:
                _this.setState(function (state) {
                  return _objectSpread({}, state, {
                    form: _objectSpread({}, state.form, {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_14__["default"])({}, name, value))
                  });
                }, function () {
                  Object(_utils__WEBPACK_IMPORTED_MODULE_21__["set"])("".concat(LS_KEY, "_").concat(_this.state.pair), _this.state.form);
                  Object(_utils__WEBPACK_IMPORTED_MODULE_21__["set"])("".concat(LS_KEY, "_pair"), _this.state.pair);
                  Object(_utils__WEBPACK_IMPORTED_MODULE_21__["set"])("".concat(LS_KEY, "_storageVersion"), _this.state.storageVersion);
                });

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(PosistionSizeCalculator, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee2() {
        var _this2 = this;

        var storedPair, storageVersion, storedFormState, ethPrice;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                storedPair = Object(_utils__WEBPACK_IMPORTED_MODULE_21__["get"])("".concat(LS_KEY, "_pair")) || 'XBTUSD';
                storageVersion = Object(_utils__WEBPACK_IMPORTED_MODULE_21__["get"])("".concat(LS_KEY, "_storageVersion"));
                storedFormState = Object(_utils__WEBPACK_IMPORTED_MODULE_21__["get"])("".concat(LS_KEY, "_").concat(storedPair));

                if (storageVersion !== this.state.storageVersion) {
                  Object(_utils__WEBPACK_IMPORTED_MODULE_21__["unset"])("".concat(LS_KEY, "_XBTUSD"));
                  Object(_utils__WEBPACK_IMPORTED_MODULE_21__["unset"])("".concat(LS_KEY, "_ETHUSD"));
                  Object(_utils__WEBPACK_IMPORTED_MODULE_21__["unset"])("".concat(LS_KEY, "_ALTS"));
                }

                this.setState({
                  form: storedFormState && storageVersion === this.state.storageVersion ? storedFormState : defaultFormState,
                  pair: storedPair,
                  ready: true
                });
                _context2.next = 7;
                return Object(_utils__WEBPACK_IMPORTED_MODULE_21__["getETHPrice"])();

              case 7:
                ethPrice = _context2.sent;

                if (ethPrice) {
                  this.setState(function (state) {
                    return _objectSpread({}, state, {
                      form: _objectSpread({}, state.form, {}, {
                        ethPrice: ethPrice
                      })
                    });
                  }, function () {
                    Object(_utils__WEBPACK_IMPORTED_MODULE_21__["set"])("".concat(LS_KEY, "_").concat(_this2.state.pair), _this2.state.form);
                  });
                }

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "compute",
    value: function compute() {
      var result = {
        riskAmount: 0,
        distanceToStop: 0,
        positionSizeBTC: 0,
        positionSize: 0,
        riskReward: 0,
        contractValue: 0,
        isLong: false
      };

      try {
        var _this$state = this.state,
            form = _this$state.form,
            pair = _this$state.pair;
        var capital = form.capital,
            entry = form.entry,
            stop = form.stop,
            target = form.target,
            risk = form.risk,
            ethPrice = form.ethPrice;
        var isLong = new big_js__WEBPACK_IMPORTED_MODULE_16___default.a(target).gt(new big_js__WEBPACK_IMPORTED_MODULE_16___default.a(entry));
        var riskAmount = new big_js__WEBPACK_IMPORTED_MODULE_16___default.a(capital).times(new big_js__WEBPACK_IMPORTED_MODULE_16___default.a(risk).div(100)).toFixed(8);
        var distanceToStop = new big_js__WEBPACK_IMPORTED_MODULE_16___default.a(stop).div(new big_js__WEBPACK_IMPORTED_MODULE_16___default.a(entry)).minus(1).times(isLong ? -100 : 100).toFixed(3);
        var positionSizeBTC = new big_js__WEBPACK_IMPORTED_MODULE_16___default.a(riskAmount).div(new big_js__WEBPACK_IMPORTED_MODULE_16___default.a(distanceToStop)).times(100).toFixed(8); // prettier-ignore

        var riskReward = isLong ? new big_js__WEBPACK_IMPORTED_MODULE_16___default.a(target).minus(new big_js__WEBPACK_IMPORTED_MODULE_16___default.a(entry)).div(new big_js__WEBPACK_IMPORTED_MODULE_16___default.a(new big_js__WEBPACK_IMPORTED_MODULE_16___default.a(entry).minus(new big_js__WEBPACK_IMPORTED_MODULE_16___default.a(stop)))).toFixed(2) : new big_js__WEBPACK_IMPORTED_MODULE_16___default.a(entry).minus(new big_js__WEBPACK_IMPORTED_MODULE_16___default.a(target)).div(new big_js__WEBPACK_IMPORTED_MODULE_16___default.a(new big_js__WEBPACK_IMPORTED_MODULE_16___default.a(stop).minus(new big_js__WEBPACK_IMPORTED_MODULE_16___default.a(entry)))).toFixed(2);

        if (pair === 'ETHUSD') {
          // prettier-ignore
          var contractValue = new big_js__WEBPACK_IMPORTED_MODULE_16___default.a(ethPrice).times(0.000001).toFixed(8);
          result.contractValue = contractValue; // prettier-ignore

          result.positionSize = new big_js__WEBPACK_IMPORTED_MODULE_16___default.a(riskAmount).div(contractValue).div(distanceToStop).times(100).toFixed(0);
        } else if (pair === 'ALTS') {
          // prettier-ignore
          result.positionSize = new big_js__WEBPACK_IMPORTED_MODULE_16___default.a(positionSizeBTC).div(entry).toFixed(2);
        } else if (pair === 'XBTUSD') {
          // prettier-ignore
          result.positionSize = new big_js__WEBPACK_IMPORTED_MODULE_16___default.a(entry).times(new big_js__WEBPACK_IMPORTED_MODULE_16___default.a(positionSizeBTC)).toFixed(0);
        }

        result.isLong = isLong;
        result.riskReward = riskReward;
        result.positionSizeBTC = positionSizeBTC;
        result.gain = new big_js__WEBPACK_IMPORTED_MODULE_16___default.a(riskReward).times(new big_js__WEBPACK_IMPORTED_MODULE_16___default.a(riskAmount)).toFixed(8);
        result.riskAmount = riskAmount;
        result.distanceToStop = distanceToStop;
        return result;
      } catch (err) {
        console.error('ouch!', err.message);
        return result;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          ready = _this$state2.ready,
          form = _this$state2.form,
          pair = _this$state2.pair;
      var capital = form.capital,
          entry = form.entry,
          stop = form.stop,
          target = form.target,
          risk = form.risk,
          ethPrice = form.ethPrice;

      var _this$compute = this.compute(),
          riskAmount = _this$compute.riskAmount,
          contractValue = _this$compute.contractValue,
          distanceToStop = _this$compute.distanceToStop,
          positionSizeBTC = _this$compute.positionSizeBTC,
          gain = _this$compute.gain,
          positionSize = _this$compute.positionSize,
          riskReward = _this$compute.riskReward,
          isLong = _this$compute.isLong;

      return __jsx(_layouts_main__WEBPACK_IMPORTED_MODULE_18__["default"], {
        title: "BitMEX and Binance Position Size Calculator",
        description: "Position Size Calculator for Bitcoin and Altcoins",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, __jsx("div", {
        className: Object(clsx__WEBPACK_IMPORTED_MODULE_17__["default"])({
          'opacity-100': ready,
          'opacity-0': !ready
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, __jsx("h1", {
        className: "text-2xl text-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, "Position size calculator"), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, __jsx("div", {
        className: "mt-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, __jsx(_components_select__WEBPACK_IMPORTED_MODULE_20__["default"], {
        name: "pair",
        value: pair,
        onChange: this.handleInputChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, pairs.map(function (el) {
        return __jsx("option", {
          key: el.key,
          value: el.key,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 201
          },
          __self: this
        }, el.value);
      }))), __jsx("div", {
        className: "mt-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }, __jsx("table", {
        className: Object(clsx__WEBPACK_IMPORTED_MODULE_17__["default"])({
          'border-green': isLong
        }, {
          'border-red': !isLong
        }, 'border-l-2 shadow-xl table-fixed w-full mt-2'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }, __jsx("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        },
        __self: this
      }, __jsx(_components_calculator_row__WEBPACK_IMPORTED_MODULE_19__["default"], {
        label: "Account Balance",
        name: "capital",
        value: capital,
        onChange: this.handleInputChange,
        tip: "This is your total account balance.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        },
        __self: this
      }), __jsx(_components_calculator_row__WEBPACK_IMPORTED_MODULE_19__["default"], {
        label: "Risk (%)",
        name: "risk",
        value: risk,
        onChange: this.handleInputChange,
        tip: "Percentage of acceptable risk.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      }), pair === 'ETHUSD' && __jsx(react__WEBPACK_IMPORTED_MODULE_15___default.a.Fragment, null, __jsx(_components_calculator_row__WEBPACK_IMPORTED_MODULE_19__["default"], {
        label: "ETH price ($)",
        name: "ethPrice",
        value: ethPrice,
        onChange: this.handleInputChange,
        tip: "Spot ETH price ($)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      }), __jsx(_components_calculator_row__WEBPACK_IMPORTED_MODULE_19__["default"], {
        label: "Contract Value",
        value: contractValue,
        readOnly: true,
        tip: "ETH/USD perpetual contract value.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        },
        __self: this
      })), __jsx(_components_calculator_row__WEBPACK_IMPORTED_MODULE_19__["default"], {
        label: "Entry price",
        name: "entry",
        value: entry,
        onChange: this.handleInputChange,
        tip: "Position entry price.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }), __jsx(_components_calculator_row__WEBPACK_IMPORTED_MODULE_19__["default"], {
        label: "Stop-Loss Price",
        name: "stop",
        value: stop,
        onChange: this.handleInputChange,
        tip: "Stop-Loss price.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        },
        __self: this
      }), __jsx(_components_calculator_row__WEBPACK_IMPORTED_MODULE_19__["default"], {
        label: "Take Profit Price",
        name: "target",
        value: target,
        onChange: this.handleInputChange,
        tip: "Take Profit price.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        },
        __self: this
      }), __jsx(_components_calculator_row__WEBPACK_IMPORTED_MODULE_19__["default"], {
        label: "Total Risk in BTC",
        value: riskAmount,
        readOnly: true,
        tip: "Maximum loss in case the Stop-Loss gets hit.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        },
        __self: this
      }), __jsx(_components_calculator_row__WEBPACK_IMPORTED_MODULE_19__["default"], {
        label: "Distance to Stop-Loss (%)",
        value: distanceToStop,
        readOnly: true,
        tip: __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 278
          },
          __self: this
        }, __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 279
          },
          __self: this
        }, "Difference between Entry price and Stop-Loss."), __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 280
          },
          __self: this
        }, "Expressed in percentage.")),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        },
        __self: this
      }), __jsx(_components_calculator_row__WEBPACK_IMPORTED_MODULE_19__["default"], {
        label: "Position Size in BTC",
        value: positionSizeBTC,
        readOnly: true,
        tip: __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 289
          },
          __self: this
        }, __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 290
          },
          __self: this
        }, "Position size expressed in BTC."), __jsx("div", {
          className: "mt-1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 291
          },
          __self: this
        }, "Calculated with the following formula:"), __jsx("div", {
          className: "underline",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 294
          },
          __self: this
        }, "Position Size = Risk Amount/Distance to Stop"), __jsx("div", {
          className: "mt-1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 297
          },
          __self: this
        }, "Assuming an account of 1 BTC."), __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 300
          },
          __self: this
        }, "A risk of 5% per trade."), __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 301
          },
          __self: this
        }, "A 10% distance from the entry to the Stop-Loss."), __jsx("div", {
          className: "underline",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 304
          },
          __self: this
        }, "Position Size = (1 BTC x 0.05)/0.1 = 0.5 BTC")),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        },
        __self: this
      }), __jsx(_components_calculator_row__WEBPACK_IMPORTED_MODULE_19__["default"], {
        label: "Position Size",
        value: positionSize,
        variant: isLong ? 'long' : 'short',
        readOnly: true,
        tip: __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 316
          },
          __self: this
        }, __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 317
          },
          __self: this
        }, "Position size expressed in USD or $ALT."), __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 318
          },
          __self: this
        }, "On BitMEX it corresponds to the amount of contracts to buy."), __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 322
          },
          __self: this
        }, "For $ALTS it corresponds to the amount to buy."), __jsx("div", {
          className: "mt-1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 325
          },
          __self: this
        }, "Calculated with the following formula:"), __jsx("div", {
          className: "underline",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 328
          },
          __self: this
        }, "Position Size = Entry price * Position Size in BTC")),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310
        },
        __self: this
      }), __jsx(_components_calculator_row__WEBPACK_IMPORTED_MODULE_19__["default"], {
        label: "Risk Reward Ratio",
        value: riskReward,
        readOnly: true,
        tip: "Risk/Reward Ratio.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 334
        },
        __self: this
      }), __jsx(_components_calculator_row__WEBPACK_IMPORTED_MODULE_19__["default"], {
        label: "Potential Gain",
        value: gain,
        readOnly: true,
        tip: "Realised gain in case of Take Profit.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340
        },
        __self: this
      })))))));
    }
  }]);

  return PosistionSizeCalculator;
}(react__WEBPACK_IMPORTED_MODULE_15__["Component"]);



/***/ })

})
//# sourceMappingURL=position-size-calculator.js.349a44a85fe39bf803f0.hot-update.js.map