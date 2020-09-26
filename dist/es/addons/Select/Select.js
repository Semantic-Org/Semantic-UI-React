import _extends from "@babel/runtime/helpers/esm/extends";
import PropTypes from 'prop-types';
import React from 'react';
import Dropdown from '../../modules/Dropdown';
/**
 * A Select is sugar for <Dropdown selection />.
 * @see Dropdown
 * @see Form
 */

function Select(props) {
  return /*#__PURE__*/React.createElement(Dropdown, _extends({}, props, {
    selection: true
  }));
}

Select.handledProps = ["options"];
Select.propTypes = process.env.NODE_ENV !== "production" ? {
  /** Array of Dropdown.Item props e.g. `{ text: '', value: '' }` */
  options: PropTypes.arrayOf(PropTypes.shape(Dropdown.Item.propTypes)).isRequired
} : {};
Select.Divider = Dropdown.Divider;
Select.Header = Dropdown.Header;
Select.Item = Dropdown.Item;
Select.Menu = Dropdown.Menu;
export default Select;