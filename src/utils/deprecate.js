import _ from 'lodash'

/**
 *
 * @param {object} context A reference to the component instance (`this`).
 * @param {object} deprecated Keys/values are deprecated props/warning messages.
 *   The component name and "is deprecated" is automatically added.
 *   Only add help messages as values.
 */
export const props = (context, deprecated) => {
  if (process.env.NODE_ENV === 'production') return
  const warnings = _.pick(deprecated, _.keys(context.props))
  _.each(warnings, (val, key) => {
    /* eslint-disable no-console */
    console.warn(`Stardust ${context.constructor.name} prop "${key}" is deprecated. ${val}`)
    /* eslint-enable no-console */
  })
}
