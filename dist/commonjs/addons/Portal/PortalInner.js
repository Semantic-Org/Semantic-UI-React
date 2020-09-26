"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _invoke2 = _interopRequireDefault(require("lodash/invoke"));

var _reactComponentRef = require("@fluentui/react-component-ref");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _reactDom = require("react-dom");

var _lib = require("../../lib");

/**
 * An inner component that allows you to render children outside their parent.
 */
var PortalInner = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2.default)(PortalInner, _Component);

  function PortalInner() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this.handleRef = function (c) {
      (0, _reactComponentRef.handleRef)(_this.props.innerRef, c);
    };

    return _this;
  }

  var _proto = PortalInner.prototype;

  _proto.componentDidMount = function componentDidMount() {
    (0, _invoke2.default)(this.props, 'onMount', null, this.props);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    (0, _invoke2.default)(this.props, 'onUnmount', null, this.props);
  };

  _proto.render = function render() {
    if (!(0, _lib.isBrowser)()) return null;
    var _this$props = this.props,
        children = _this$props.children,
        _this$props$mountNode = _this$props.mountNode,
        mountNode = _this$props$mountNode === void 0 ? document.body : _this$props$mountNode;
    return /*#__PURE__*/(0, _reactDom.createPortal)( /*#__PURE__*/_react.default.createElement(_reactComponentRef.Ref, {
      innerRef: this.handleRef
    }, children), mountNode);
  };

  return PortalInner;
}(_react.Component);

PortalInner.handledProps = ["children", "innerRef", "mountNode", "onMount", "onUnmount"];
PortalInner.propTypes = process.env.NODE_ENV !== "production" ? {
  /** Primary content. */
  children: _propTypes.default.node.isRequired,

  /** Called with a ref to the inner node. */
  innerRef: _lib.customPropTypes.ref,

  /** The node where the portal should mount. */
  mountNode: _propTypes.default.any,

  /**
   * Called when the portal is mounted on the DOM
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onMount: _propTypes.default.func,

  /**
   * Called when the portal is unmounted from the DOM
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onUnmount: _propTypes.default.func
} : {};
var _default = PortalInner;
exports.default = _default;