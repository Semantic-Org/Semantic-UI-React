import 'semantic-ui-css/semantic.css'
import _ from 'lodash/fp'
import React, { Component, PropTypes } from 'react'

// import ComponentExample from '../Components/ComponentDoc/ComponentExample'
import PageNotFound from '../Views/PageNotFound'
import { exampleContext } from 'docs/app/utils'

const exampleKeys = exampleContext.keys()

export default class ExternalExampleLayout extends Component {
  static propTypes = {
    children: PropTypes.node,
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        kebabCaseName: PropTypes.string.isRequired,
      }),
    }).isRequired,
  }

  render() {
    const { kebabCaseName } = this.props.match.params
    const componentName = _.startCase(kebabCaseName).replace(/ /g, '')
    const componentKey = _.find(_.endsWith(`${componentName}.js`), exampleKeys)
    const ExampleComponent = exampleContext(componentKey).default

    if (!ExampleComponent) return <PageNotFound />

    return <ExampleComponent />
  }
}
