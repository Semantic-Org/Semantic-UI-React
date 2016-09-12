import _ from 'lodash'
import React from 'react'

/**
 * Show a deprecated warning for component props.
 * @param {object} context A reference to the component instance (`this`).
 * @param {object} deprecated Keys/values are deprecated props/warning messages.
 *   The component name and "is deprecated" is automatically added.
 *   Only add help messages as values.
 */
export const deprecateProps = (context, deprecated) => {
  if (process.env.NODE_ENV === 'production') return
  const warnings = _.pick(deprecated, _.keys(context.props))
  _.each(warnings, (val, key) => {
    console.warn( // eslint-disable-line no-console
      `Stardust \`${context.constructor.name}\` prop \`${key}\` is deprecated. ${val}`
    )
  })
}

/**
 * Show a deprecated warning for Stardust components.
 * @param {String} name Name of the component being deprecated.
 * @param {String} warning Message to display to the user.
 * @param {String} Replacement Component to be returned in its place.
 * @returns {DeprecatedComponent}
 */
export const deprecateComponent = (name, warning, Replacement) => {
  return function DeprecatedComponent(props) {
    console.warn( // eslint-disable-line no-console
      `Stardust component \`${name}\` is deprecated and will be removed in future versions. ${warning}`
    )

    return <Replacement {...props} />
  }
}
