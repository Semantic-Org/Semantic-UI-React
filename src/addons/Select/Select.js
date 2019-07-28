import PropTypes from 'prop-types'
import React from 'react'

import Dropdown from '../../modules/Dropdown'

/**
 * A Select is sugar for <Dropdown selection />.
 * @see Dropdown
 * @see Form
 */
function Select(props) {
  let options = props.options
  if (props.labelField) {
    options = props.options.map((e) => ({
      key: e.key || e.value || e[props.valueField],
      value: e.value || e[props.valueField],
      text: e[props.labelField],
    }))
  }

  return <Dropdown {...props} options={options} selection />
}

Select.propTypes = {
  /** Array of Dropdown.Item props e.g. `{ text: '', value: '' }` */
  options: PropTypes.arrayOf(PropTypes.shape(Dropdown.Item.propTypes)).isRequired,

  /** Name of the field that present visual part of the data e.g. `label` */
  labelField: PropTypes.string,

  /** Name of the field that present identifier of the data, e.g. `value` */
  valueField: PropTypes.string,
}

Select.Divider = Dropdown.Divider
Select.Header = Dropdown.Header
Select.Item = Dropdown.Item
Select.Menu = Dropdown.Menu

export default Select
