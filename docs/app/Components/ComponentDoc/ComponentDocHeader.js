import PropTypes from 'prop-types'
import React from 'react'
import { Header } from 'semantic-ui-react'

import { pure } from 'docs/app/HOC'
import { getDocDescription } from 'docs/app/utils'

const headerStyle = { marginBottom: '0.25em' }

const ComponentDocHeader = ({ componentName }) => (
  <Header as='h1' style={headerStyle}>
    {componentName}
    <Header.Subheader>{getDocDescription(componentName)}</Header.Subheader>
  </Header>
)

ComponentDocHeader.propTypes = {
  componentName: PropTypes.string,
}

export default pure(ComponentDocHeader)
