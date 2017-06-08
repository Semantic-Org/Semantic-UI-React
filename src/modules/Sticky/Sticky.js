import React from 'react'
import PropTypes from 'prop-types'
import { META } from '../../lib'

function Sticky({ children }) {
  return <div>{children}</div>
}

Sticky.propTypes = {
  children: PropTypes.node,
}

Sticky._meta = {
  name: 'Sticky',
  type: META.TYPES.MODULE,
}

export default Sticky
