import _extends from "@babel/runtime/helpers/esm/extends";
import PropTypes from 'prop-types';
import React from 'react';
import { getUnhandledProps } from '../../lib';
import TableHeader from './TableHeader';
/**
 * A table can have a footer.
 */

function TableFooter(props) {
  var as = props.as;
  var rest = getUnhandledProps(TableFooter, props);
  return /*#__PURE__*/React.createElement(TableHeader, _extends({}, rest, {
    as: as
  }));
}

TableFooter.handledProps = ["as"];
TableFooter.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType
} : {};
TableFooter.defaultProps = {
  as: 'tfoot'
};
export default TableFooter;