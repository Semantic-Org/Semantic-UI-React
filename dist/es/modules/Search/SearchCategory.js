import _extends from "@babel/runtime/helpers/esm/extends";
import cx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import { childrenUtils, customPropTypes, getElementType, getUnhandledProps, useKeyOnly } from '../../lib';
import SearchCategoryLayout from './SearchCategoryLayout';

function SearchCategory(props) {
  var active = props.active,
      children = props.children,
      className = props.className,
      content = props.content,
      layoutRenderer = props.layoutRenderer,
      renderer = props.renderer;
  var classes = cx(useKeyOnly(active, 'active'), 'category', className);
  var rest = getUnhandledProps(SearchCategory, props);
  var ElementType = getElementType(SearchCategory, props);
  var categoryContent = renderer(props);
  var resultsContent = childrenUtils.isNil(children) ? content : children;
  return /*#__PURE__*/React.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), layoutRenderer({
    categoryContent: categoryContent,
    resultsContent: resultsContent
  }));
}

SearchCategory.handledProps = ["active", "as", "children", "className", "content", "layoutRenderer", "name", "renderer", "results"];
SearchCategory.defaultProps = {
  layoutRenderer: SearchCategoryLayout,
  renderer: function renderer(_ref) {
    var name = _ref.name;
    return name;
  }
};
SearchCategory.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** The item currently selected by keyboard shortcut. */
  active: PropTypes.bool,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** Display name. */
  name: PropTypes.string,

  /**
   * Renders the category layout contents.
   *
   * @param {object} props - The SearchCategoryLayout props object.
   * @returns {*} - Renderable category layout contents.
   */
  layoutRenderer: PropTypes.func,

  /**
   * Renders the category contents.
   *
   * @param {object} props - The SearchCategory props object.
   * @returns {*} - Renderable category contents.
   */
  renderer: PropTypes.func,

  /** Array of Search.Result props. */
  results: PropTypes.array
} : {};
export default SearchCategory;