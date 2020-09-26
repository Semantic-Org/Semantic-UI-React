"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _reactComponentRef = require("@fluentui/react-component-ref");

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _lib = require("../../lib");

/**
 * A modal has a dimmer.
 */
function ModalDimmer(props) {
  var blurring = props.blurring,
      children = props.children,
      className = props.className,
      centered = props.centered,
      content = props.content,
      inverted = props.inverted,
      mountNode = props.mountNode,
      scrolling = props.scrolling;

  var ref = _react.default.useRef();

  var classes = (0, _clsx.default)('ui', (0, _lib.useKeyOnly)(inverted, 'inverted'), (0, _lib.useKeyOnly)(!centered, 'top aligned'), 'page modals dimmer transition visible active', className);
  var bodyClasses = (0, _clsx.default)('dimmable dimmed', (0, _lib.useKeyOnly)(blurring, 'blurring'), (0, _lib.useKeyOnly)(scrolling, 'scrolling'));
  var rest = (0, _lib.getUnhandledProps)(ModalDimmer, props);
  var ElementType = (0, _lib.getElementType)(ModalDimmer, props);
  (0, _lib.useClassNamesOnNode)(mountNode, bodyClasses);

  _react.default.useEffect(function () {
    if (ref.current && ref.current.style) {
      ref.current.style.setProperty('display', 'flex', 'important');
    }
  }, []);

  return /*#__PURE__*/_react.default.createElement(_reactComponentRef.Ref, {
    innerRef: ref
  }, /*#__PURE__*/_react.default.createElement(ElementType, (0, _extends2.default)({}, rest, {
    className: classes
  }), _lib.childrenUtils.isNil(children) ? content : children));
}

ModalDimmer.handledProps = ["as", "blurring", "centered", "children", "className", "content", "inverted", "mountNode", "scrolling"];
ModalDimmer.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _propTypes.default.elementType,

  /** A dimmer can be blurred. */
  blurring: _propTypes.default.bool,

  /** Primary content. */
  children: _propTypes.default.node,

  /** Additional classes. */
  className: _propTypes.default.string,

  /** A dimmer can center its contents in the viewport. */
  centered: _propTypes.default.bool,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand,

  /** A dimmer can be inverted. */
  inverted: _propTypes.default.bool,

  /** The node where the modal should mount. Defaults to document.body. */
  mountNode: _propTypes.default.any,

  /** A dimmer can make body scrollable. */
  scrolling: _propTypes.default.bool
} : {};
ModalDimmer.create = (0, _lib.createShorthandFactory)(ModalDimmer, function (content) {
  return {
    content: content
  };
});
var _default = ModalDimmer;
exports.default = _default;