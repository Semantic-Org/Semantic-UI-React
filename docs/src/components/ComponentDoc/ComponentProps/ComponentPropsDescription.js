import PropTypes from 'prop-types'
import React from 'react'
import { Divider } from 'semantic-ui-react'

import { pure } from 'docs/src/hoc'

const descriptionStyle = {
  color: '#777',
  fontSize: '1.08em',
}

const ComponentPropsDescription = ({ description }) => (
  <div style={descriptionStyle}>
    {description.join(' ')}
    <Divider />
  </div>
)

ComponentPropsDescription.propTypes = {
  description: PropTypes.arrayOf(PropTypes.string),
}

export default pure(ComponentPropsDescription)
