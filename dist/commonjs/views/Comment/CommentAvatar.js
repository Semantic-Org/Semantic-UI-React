"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _lib = require("../../lib");

/**
 * A comment can contain an image or avatar.
 */
function CommentAvatar(props) {
  var className = props.className,
      src = props.src;
  var classes = (0, _clsx.default)('avatar', className);
  var rest = (0, _lib.getUnhandledProps)(CommentAvatar, props);

  var _partitionHTMLProps = (0, _lib.partitionHTMLProps)(rest, {
    htmlProps: _lib.htmlImageProps
  }),
      imageProps = _partitionHTMLProps[0],
      rootProps = _partitionHTMLProps[1];

  var ElementType = (0, _lib.getElementType)(CommentAvatar, props);
  return /*#__PURE__*/_react.default.createElement(ElementType, (0, _extends2.default)({}, rootProps, {
    className: classes
  }), (0, _lib.createHTMLImage)(src, {
    autoGenerateKey: false,
    defaultProps: imageProps
  }));
}

CommentAvatar.handledProps = ["as", "className", "src"];
CommentAvatar.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _propTypes.default.elementType,

  /** Additional classes. */
  className: _propTypes.default.string,

  /** Specifies the URL of the image. */
  src: _propTypes.default.string
} : {};
var _default = CommentAvatar;
exports.default = _default;