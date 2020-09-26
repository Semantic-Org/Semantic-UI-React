import _extends from "@babel/runtime/helpers/esm/extends";
import cx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import { getElementType, getUnhandledProps } from '../../lib';
/**
 * A placeholder can contain have lines of text.
 */

function PlaceholderLine(props) {
  var className = props.className,
      length = props.length;
  var classes = cx('line', length, className);
  var rest = getUnhandledProps(PlaceholderLine, props);
  var ElementType = getElementType(PlaceholderLine, props);
  return /*#__PURE__*/React.createElement(ElementType, _extends({}, rest, {
    className: classes
  }));
}

PlaceholderLine.handledProps = ["as", "className", "length"];
PlaceholderLine.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Additional classes. */
  className: PropTypes.string,

  /** A line can specify how long its contents should appear. */
  length: PropTypes.oneOf(['full', 'very long', 'long', 'medium', 'short', 'very short'])
} : {};
export default PlaceholderLine;