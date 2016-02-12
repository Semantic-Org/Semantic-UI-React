/* eslint-disable no-console */
import _ from 'lodash'

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
    console.warn(`Stardust ${context.constructor.name} prop "${key}" is deprecated. ${val}`)
  })
}

/**
 * Show a deprecated warning for sub components.
 * @param {object} stardust A reference to Stardust.
 * @param {React.Component[]} subComponents The components to deprecate.
 */
export const deprecateSubComponents = (stardust, subComponents) => {
  subComponents.forEach(SubComponent => {
    const name = SubComponent.prototype.constructor.name
    const newName = _.words(name).join('.')
    Object.defineProperty(stardust, name, {
      get() {
        console.warn(`Stardust component "${name}" is deprecated. Use "${newName}" instead.`)
        return SubComponent
      },
    })
  })
}
