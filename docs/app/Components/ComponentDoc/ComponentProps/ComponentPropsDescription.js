import PropTypes from 'prop-types'
import React from 'react'
import { Divider } from 'semantic-ui-react'

import { pure } from 'docs/app/HOC'

const descriptionStyle = {
  fontSize: '1.08em',
  color: '#777',
}

const ComponentPropsDescription = ({ description }) => (
  <div style={descriptionStyle}>
    {description}
    <Divider />
  </div>
)

ComponentPropsDescription.propTypes = {
  description: PropTypes.string,
}

export default pure(ComponentPropsDescription)
