"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _lib = require("../../lib");

var _TableHeader = _interopRequireDefault(require("./TableHeader"));

/**
 * A table can have a footer.
 */
function TableFooter(props) {
  var as = props.as;
  var rest = (0, _lib.getUnhandledProps)(TableFooter, props);
  return /*#__PURE__*/_react.default.createElement(_TableHeader.default, (0, _extends2.default)({}, rest, {
    as: as
  }));
}

TableFooter.handledProps = ["as"];
TableFooter.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _propTypes.default.elementType
} : {};
TableFooter.defaultProps = {
  as: 'tfoot'
};
var _default = TableFooter;
exports.default = _default;