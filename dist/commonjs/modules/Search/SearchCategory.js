"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _lib = require("../../lib");

var _SearchCategoryLayout = _interopRequireDefault(require("./SearchCategoryLayout"));

function SearchCategory(props) {
  var active = props.active,
      children = props.children,
      className = props.className,
      content = props.content,
      layoutRenderer = props.layoutRenderer,
      renderer = props.renderer;
  var classes = (0, _clsx.default)((0, _lib.useKeyOnly)(active, 'active'), 'category', className);
  var rest = (0, _lib.getUnhandledProps)(SearchCategory, props);
  var ElementType = (0, _lib.getElementType)(SearchCategory, props);
  var categoryContent = renderer(props);
  var resultsContent = _lib.childrenUtils.isNil(children) ? content : children;
  return /*#__PURE__*/_react.default.createElement(ElementType, (0, _extends2.default)({}, rest, {
    className: classes
  }), layoutRenderer({
    categoryContent: categoryContent,
    resultsContent: resultsContent
  }));
}

SearchCategory.handledProps = ["active", "as", "children", "className", "content", "layoutRenderer", "name", "renderer", "results"];
SearchCategory.defaultProps = {
  layoutRenderer: _SearchCategoryLayout.default,
  renderer: function renderer(_ref) {
    var name = _ref.name;
    return name;
  }
};
SearchCategory.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _propTypes.default.elementType,

  /** The item currently selected by keyboard shortcut. */
  active: _propTypes.default.bool,

  /** Primary content. */
  children: _propTypes.default.node,

  /** Additional classes. */
  className: _propTypes.default.string,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand,

  /** Display name. */
  name: _propTypes.default.string,

  /**
   * Renders the category layout contents.
   *
   * @param {object} props - The SearchCategoryLayout props object.
   * @returns {*} - Renderable category layout contents.
   */
  layoutRenderer: _propTypes.default.func,

  /**
   * Renders the category contents.
   *
   * @param {object} props - The SearchCategory props object.
   * @returns {*} - Renderable category contents.
   */
  renderer: _propTypes.default.func,

  /** Array of Search.Result props. */
  results: _propTypes.default.array
} : {};
var _default = SearchCategory;
exports.default = _default;