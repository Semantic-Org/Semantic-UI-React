import PropTypes from 'prop-types'
import React from 'react'

import ComponentExample from './ComponentExample'

const ShorthandExample: any = ({ description, ...rest }) => (
  <ComponentExample {...rest} description={description} />
)

ShorthandExample.propTypes = {
  description: PropTypes.node,
}

ShorthandExample.defaultProps = {
  description: 'You can do the same using shorthands.',
}

export default ShorthandExample
