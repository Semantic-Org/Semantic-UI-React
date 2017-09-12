import PropTypes from 'prop-types'
import React from 'react'
import { Divider } from 'semantic-ui-react'

import { pure } from 'docs/app/HOC'
import { getDocDescription } from 'docs/app/utils'

const descriptionStyle = {
  fontSize: '1.08em',
  color: '#777',
}

const ComponentPropsComponent = ({ name }) => (
  <div style={descriptionStyle}>
    {getDocDescription(name)}
    <Divider />
  </div>
)

ComponentPropsComponent.propTypes = {
  name: PropTypes.string,
}

export default pure(ComponentPropsComponent)
