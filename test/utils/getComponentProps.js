import * as ReactIs from 'react-is'

/**
 * Gets proper props for a component.
 *
 * @param {React.ElementType} Component
 * @return {Object}
 */
export default function getComponentProps(Component) {
  if (Component.$$typeof === ReactIs.Memo) {
    return getComponentProps(Component.type)
  }

  return {
    autoControlledProps: Component.autoControlledProps,
    defaultProps: Component.defaultProps,
    handledProps: Component.handledProps,
    propTypes: Component.propTypes,
  }
}
