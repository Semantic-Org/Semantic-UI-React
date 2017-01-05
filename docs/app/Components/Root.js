import 'semantic-ui-css/semantic.css'
import _ from 'lodash/fp'
import React, { Component, PropTypes } from 'react'

import ComponentDoc from '../Components/ComponentDoc/ComponentDoc'
import PageNotFound from '../Views/PageNotFound'
import { META } from 'src/lib'
import * as semanticUIReact from 'src'

export default class Root extends Component {
  static propTypes = {
    children: PropTypes.node,
    params: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  }

  render() {
    const { name } = this.props.params
    const componentName = _.startCase(name).replace(/ /g, '')
    const component = semanticUIReact[componentName]
    if (!component || !component._meta || !META.isParent(component)) {
      return <PageNotFound />
    }

    return (
      <ComponentDoc _meta={component._meta} />
    )
  }
}
