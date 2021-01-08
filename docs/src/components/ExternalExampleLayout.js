import { KnobProvider } from '@stardust-ui/docs-components'
import PropTypes from 'prop-types'
import React, { createElement } from 'react'
import { withRouteData } from 'react-static'

const ExternalExampleLayout = (props) => {
  const exampleComponent = require(`docs/src/examples/${props.path}`).default

  return <KnobProvider>{createElement(exampleComponent)}</KnobProvider>
}

ExternalExampleLayout.propTypes = {
  path: PropTypes.string.isRequired,
}

export default withRouteData(ExternalExampleLayout)
