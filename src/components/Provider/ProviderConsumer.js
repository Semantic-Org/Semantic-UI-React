import { FelaTheme } from 'react-fela'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

/**
 * The Provider's Consumer is for accessing the theme.
 */
class ProviderConsumer extends Component {
  static propTypes = {
    /**
     * Uses the function children pattern to access the theme.
     * @param {object} theme
     * @param {object} theme.siteVariables - The siteVariables passed from the nearest Provider.
     */
    children: PropTypes.func.isRequired,
  }

  static _meta = {
    name: 'ProviderConsumer',
    parent: 'Provider',
    type: 'component',
  }

  render() {
    const { children } = this.props

    return <FelaTheme render={children} />
  }
}

export default ProviderConsumer
