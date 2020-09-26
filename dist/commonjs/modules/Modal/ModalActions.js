"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _map2 = _interopRequireDefault(require("lodash/map"));

var _invoke2 = _interopRequireDefault(require("lodash/invoke"));

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _lib = require("../../lib");

var _Button = _interopRequireDefault(require("../../elements/Button"));

/**
 * A modal can contain a row of actions.
 */
var ModalActions = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2.default)(ModalActions, _Component);

  function ModalActions() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this.handleButtonOverrides = function (predefinedProps) {
      return {
        onClick: function onClick(e, buttonProps) {
          (0, _invoke2.default)(predefinedProps, 'onClick', e, buttonProps);
          (0, _invoke2.default)(_this.props, 'onActionClick', e, buttonProps);
        }
      };
    };

    return _this;
  }

  var _proto = ModalActions.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        actions = _this$props.actions,
        children = _this$props.children,
        className = _this$props.className,
        content = _this$props.content;
    var classes = (0, _clsx.default)('actions', className);
    var rest = (0, _lib.getUnhandledProps)(ModalActions, this.props);
    var ElementType = (0, _lib.getElementType)(ModalActions, this.props);

    if (!_lib.childrenUtils.isNil(children)) {
      return /*#__PURE__*/_react.default.createElement(ElementType, (0, _extends2.default)({}, rest, {
        className: classes
      }), children);
    }

    if (!_lib.childrenUtils.isNil(content)) {
      return /*#__PURE__*/_react.default.createElement(ElementType, (0, _extends2.default)({}, rest, {
        className: classes
      }), content);
    }

    return /*#__PURE__*/_react.default.createElement(ElementType, (0, _extends2.default)({}, rest, {
      className: classes
    }), (0, _map2.default)(actions, function (action) {
      return _Button.default.create(action, {
        overrideProps: _this2.handleButtonOverrides
      });
    }));
  };

  return ModalActions;
}(_react.Component);

exports.default = ModalActions;
ModalActions.handledProps = ["actions", "as", "children", "className", "content", "onActionClick"];
ModalActions.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _propTypes.default.elementType,

  /** Array of shorthand buttons. */
  actions: _lib.customPropTypes.collectionShorthand,

  /** Primary content. */
  children: _propTypes.default.node,

  /** Additional classes. */
  className: _propTypes.default.string,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand,

  /**
   * Action onClick handler when using shorthand `actions`.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props from the clicked action.
   */
  onActionClick: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['children']), _propTypes.default.func])
} : {};
ModalActions.create = (0, _lib.createShorthandFactory)(ModalActions, function (actions) {
  return {
    actions: actions
  };
});