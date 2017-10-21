import PropTypes from 'prop-types'
import React from 'react'
import { Header } from 'semantic-ui-react'

import { pure } from 'docs/app/HOC'

const headerStyle = { marginBottom: '0.25em' }

const ComponentDocHeader = ({ componentName, description }) => (
  <Header
    as='h1'
    content={componentName}
    style={headerStyle}
    subheader={description}
  />
)

ComponentDocHeader.propTypes = {
  componentName: PropTypes.string.isRequired,
  description: PropTypes.string,
}

export default pure(ComponentDocHeader)
