import 'semantic-ui-css/semantic.css'
import _ from 'lodash/fp'
import React, { Component, PropTypes } from 'react'

import ComponentDoc from '../Components/ComponentDoc/ComponentDoc'
import { META } from 'src/lib'
import * as semanticUIReact from 'src'

export default class Root extends Component {
  static propTypes = {
    children: PropTypes.node,
    match: PropTypes.shape({
      params: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }),
    }),
  }

  render() {
    const { name } = this.props.match.params
    const componentName = _.startCase(name).replace(/ /g, '')
    const component = semanticUIReact[componentName]
    if (!component || !component._meta || !META.isParent(component)) {
      return null
    }

    return (
      <ComponentDoc _meta={component._meta} />
    )
  }
}
