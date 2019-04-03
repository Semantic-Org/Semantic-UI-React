import PropTypes from 'prop-types'
import React from 'react'

const spanStyle = {
  display: 'inline-block',
  paddingRight: '0.2em',
}

const ComponentPropEnumValue = ({ children }) => (
  <span style={spanStyle}>
    <code>{children}</code>
  </span>
)

ComponentPropEnumValue.propTypes = {
  children: PropTypes.node,
}

const areEqual = () => true

export default React.memo(ComponentPropEnumValue, areEqual)
