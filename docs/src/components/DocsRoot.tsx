import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import ComponentDoc from '../components/ComponentDoc'
import PageNotFound from '../views/PageNotFound'
import componentInfoContext from '../utils/componentInfoContext'

class DocsRoot extends Component<any, any> {
  static propTypes = {
    children: PropTypes.node,
    match: PropTypes.shape({
      params: PropTypes.shape({
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
      }),
    }),
  }

  state = {}

  render() {
    const { match } = this.props
    const displayName = _.startCase(match.params.name).replace(/ /g, '')
    const info = componentInfoContext.byDisplayName[displayName]

    if (info) return <ComponentDoc info={info} />

    return <PageNotFound />
  }
}

export default DocsRoot
