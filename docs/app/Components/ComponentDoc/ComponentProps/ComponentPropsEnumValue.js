import PropTypes from 'prop-types'
import React from 'react'

import { neverUpdate } from 'docs/app/HOC'

const spanStyle = {
  display: 'inline-block',
  paddingRight: '0.2em',
}

const ComponentPropsEnumValue = ({ children }) => (
  <span style={spanStyle}>
    <code>{children}</code>
  </span>
)

ComponentPropsEnumValue.propTypes = {
  children: PropTypes.node,
}

export default neverUpdate(ComponentPropsEnumValue)
