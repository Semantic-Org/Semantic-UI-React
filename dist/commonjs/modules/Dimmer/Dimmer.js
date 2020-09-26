"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _lib = require("../../lib");

var _Portal = _interopRequireDefault(require("../../addons/Portal"));

var _DimmerDimmable = _interopRequireDefault(require("./DimmerDimmable"));

var _DimmerInner = _interopRequireDefault(require("./DimmerInner"));

/**
 * A dimmer hides distractions to focus attention on particular content.
 */
var Dimmer = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2.default)(Dimmer, _Component);

  function Dimmer() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this.handlePortalMount = function () {
      if (!(0, _lib.isBrowser)()) return; // Heads up, IE doesn't support second argument in add()

      document.body.classList.add('dimmed');
      document.body.classList.add('dimmable');
    };

    _this.handlePortalUnmount = function () {
      if (!(0, _lib.isBrowser)()) return; // Heads up, IE doesn't support second argument in add()

      document.body.classList.remove('dimmed');
      document.body.classList.remove('dimmable');
    };

    return _this;
  }

  var _proto = Dimmer.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        active = _this$props.active,
        page = _this$props.page;
    var rest = (0, _lib.getUnhandledProps)(Dimmer, this.props);

    if (page) {
      return /*#__PURE__*/_react.default.createElement(_Portal.default, {
        closeOnEscape: false,
        closeOnDocumentClick: false,
        onMount: this.handlePortalMount,
        onUnmount: this.handlePortalUnmount,
        open: active,
        openOnTriggerClick: false
      }, /*#__PURE__*/_react.default.createElement(_DimmerInner.default, (0, _extends2.default)({}, rest, {
        active: active,
        page: page
      })));
    }

    return /*#__PURE__*/_react.default.createElement(_DimmerInner.default, (0, _extends2.default)({}, rest, {
      active: active,
      page: page
    }));
  };

  return Dimmer;
}(_react.Component);

exports.default = Dimmer;
Dimmer.handledProps = ["active", "page"];
Dimmer.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An active dimmer will dim its parent container. */
  active: _propTypes.default.bool,

  /** A dimmer can be formatted to be fixed to the page. */
  page: _propTypes.default.bool
} : {};
Dimmer.Dimmable = _DimmerDimmable.default;
Dimmer.Inner = _DimmerInner.default;
Dimmer.create = (0, _lib.createShorthandFactory)(Dimmer, function (value) {
  return {
    content: value
  };
});