import _ from 'lodash/fp'
import PropTypes from 'prop-types'
import React from 'react'

import { exampleContext } from 'docs/app/utils'
import PageNotFound from '../Views/PageNotFound'

const exampleKeys = exampleContext.keys()

const ExternalExampleLayout = (props) => {
  const { kebabCaseName } = props.match.params
  const componentName = _.startCase(kebabCaseName).replace(/ /g, '')

  const componentKey = _.find(_.endsWith(`${componentName}.js`), exampleKeys)
  if (!componentKey) return <PageNotFound />

  const ExampleComponent = exampleContext(componentKey).default
  if (!ExampleComponent) return <PageNotFound />

  return <ExampleComponent />
}

ExternalExampleLayout.propTypes = {
  children: PropTypes.node,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      kebabCaseName: PropTypes.string.isRequired,
    }),
  }).isRequired,
}

export default ExternalExampleLayout
