"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _lib = require("../../lib");

var _FeedDate = _interopRequireDefault(require("./FeedDate"));

var _FeedUser = _interopRequireDefault(require("./FeedUser"));

/**
 * A feed can contain a summary.
 */
function FeedSummary(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      date = props.date,
      user = props.user;
  var classes = (0, _clsx.default)('summary', className);
  var rest = (0, _lib.getUnhandledProps)(FeedSummary, props);
  var ElementType = (0, _lib.getElementType)(FeedSummary, props);

  if (!_lib.childrenUtils.isNil(children)) {
    return /*#__PURE__*/_react.default.createElement(ElementType, (0, _extends2.default)({}, rest, {
      className: classes
    }), children);
  }

  return /*#__PURE__*/_react.default.createElement(ElementType, (0, _extends2.default)({}, rest, {
    className: classes
  }), (0, _lib.createShorthand)(_FeedUser.default, function (val) {
    return {
      content: val
    };
  }, user, {
    autoGenerateKey: false
  }), content && ' ', content, content && ' ', (0, _lib.createShorthand)(_FeedDate.default, function (val) {
    return {
      content: val
    };
  }, date, {
    autoGenerateKey: false
  }));
}

FeedSummary.handledProps = ["as", "children", "className", "content", "date", "user"];
FeedSummary.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _propTypes.default.elementType,

  /** Primary content. */
  children: _propTypes.default.node,

  /** Additional classes. */
  className: _propTypes.default.string,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand,

  /** Shorthand for FeedDate. */
  date: _lib.customPropTypes.itemShorthand,

  /** Shorthand for FeedUser. */
  user: _lib.customPropTypes.itemShorthand
} : {};
var _default = FeedSummary;
exports.default = _default;