import PropTypes from 'prop-types'
import React, { createElement } from 'react'

import { exampleContext } from 'docs/app/utils'
import PageNotFound from '../Views/PageNotFound'

const ExternalExampleLayout = (props) => {
  const { kebabCaseName } = props.match.params
  const examplePath = kebabCaseName.replace(/\$\|\$/g, '/')
  try {
    return createElement(exampleContext(`./${examplePath}.js`).default)
  } catch (e) {
    return <PageNotFound />
  }
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
