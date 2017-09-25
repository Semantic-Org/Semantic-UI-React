import PropTypes from 'prop-types'
import React from 'react'
import { Header } from 'semantic-ui-react'

import { pure } from 'docs/app/HOC'
import { getDocDescription } from 'docs/app/utils'

const headerStyle = { marginBottom: '0.25em' }

const ComponentDocHeader = ({ componentName }) => (
  <Header
    as='h1'
    content={componentName}
    style={headerStyle}
    subheader={getDocDescription(componentName)}
  />
)

ComponentDocHeader.propTypes = {
  componentName: PropTypes.string,
}

export default pure(ComponentDocHeader)
