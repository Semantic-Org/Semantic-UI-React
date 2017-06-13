import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import * as Layouts from '../Layouts'

export default class LayoutsRoot extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }),
    }),
  }

  render() {
    const name = _.get(this, 'props.match.params.name')
    const layoutName = `${_.startCase(name).replace(/ /g, '')}Layout`
    const Layout = Layouts[layoutName]

    return Layout ? <Layout /> : null
  }
}
