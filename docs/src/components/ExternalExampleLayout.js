import PropTypes from 'prop-types'
import React from 'react'
import { withRouteData } from 'react-static'

const ExternalExampleLayout = (props) => {
  const exampleComponent = require(`docs/src/examples/${props.path}`).default

  return React.createElement(exampleComponent)
}

ExternalExampleLayout.propTypes = {
  path: PropTypes.string.isRequired,
}

export default withRouteData(ExternalExampleLayout)
