import _extends from "@babel/runtime/helpers/esm/extends";
import cx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import { childrenUtils, createShorthandFactory, customPropTypes, getElementType, getUnhandledProps } from '../../lib';
/**
 * A dropdown contains a selected value.
 */

function DropdownText(props) {
  var children = props.children,
      className = props.className,
      content = props.content;
  var classes = cx('divider', className);
  var rest = getUnhandledProps(DropdownText, props);
  var ElementType = getElementType(DropdownText, props);
  return /*#__PURE__*/React.createElement(ElementType, _extends({
    "aria-atomic": true,
    "aria-live": "polite",
    role: "alert"
  }, rest, {
    className: classes
  }), childrenUtils.isNil(children) ? content : children);
}

DropdownText.handledProps = ["as", "children", "className", "content"];
DropdownText.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand
} : {};
DropdownText.create = createShorthandFactory(DropdownText, function (val) {
  return {
    content: val
  };
});
export default DropdownText;