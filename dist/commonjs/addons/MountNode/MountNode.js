"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _lib = require("../../lib");

/**
 * A component that allows to manage classNames on a DOM node in declarative manner.
 *
 * @deprecated This component is deprecated and will be removed in next major release.
 */
function MountNode(props) {
  (0, _lib.useClassNamesOnNode)(props.node, props.className); // A workaround for `react-docgen`: https://github.com/reactjs/react-docgen/issues/336

  if (process.env.NODE_ENV === 'test') {
    return /*#__PURE__*/_react.default.createElement("div", null);
  }
  /* istanbul ignore next */


  return null;
}

MountNode.handledProps = ["className", "node"];
MountNode.propTypes = process.env.NODE_ENV !== "production" ? {
  /** Additional classes. */
  className: _propTypes.default.string,

  /** The DOM node where we will apply class names. Defaults to document.body. */
  node: _propTypes.default.oneOfType([_lib.customPropTypes.domNode, _lib.customPropTypes.refObject])
} : {};
var _default = MountNode;
exports.default = _default;