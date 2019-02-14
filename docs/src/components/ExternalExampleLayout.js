import PropTypes from 'prop-types'
import React, { createElement } from 'react'
import { withRouteData } from 'react-static'

import NoSSR from 'docs/src/components/NoSSR'

const ExternalExampleLayout = (props) => {
  const exampleComponent = require(`docs/src/examples/${props.path}`).default

  return <NoSSR>{createElement(exampleComponent)}</NoSSR>
}

ExternalExampleLayout.propTypes = {
  path: PropTypes.string.isRequired,
}

export default withRouteData(ExternalExampleLayout)
