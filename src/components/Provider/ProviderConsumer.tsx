const { FelaTheme } = require('react-fela')
import PropTypes from 'prop-types'
import React from 'react'

/**
 * The Provider's Consumer is for accessing the theme.
 */
const ProviderConsumer: any = props => {
  const { children } = props

  return <FelaTheme render={children} />
}

ProviderConsumer.propTypes = {
  /**
   * Uses the function children pattern to access the theme.
   * @param {object} theme
   * @param {object} theme.siteVariables - The siteVariables passed from the nearest Provider.
   */
  children: PropTypes.func.isRequired,
}

export default ProviderConsumer
