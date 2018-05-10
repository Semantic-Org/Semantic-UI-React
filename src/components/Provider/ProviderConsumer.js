import { FelaTheme } from 'react-fela'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { META } from '../../lib'

class ProviderConsumer extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
  }

  static _meta = {
    name: 'ProviderConsumer',
    parent: 'Provider',
    type: META.TYPES.ADDON,
  }

  render() {
    const { children } = this.props

    return <FelaTheme render={children} />
  }
}

export default ProviderConsumer
