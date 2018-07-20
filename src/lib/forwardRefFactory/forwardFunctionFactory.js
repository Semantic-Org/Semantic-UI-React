import React, { createElement } from 'react'

import Ref from '../../addons/Ref'
import { isStatelessComponent, supportsRef } from '../componentUtils'

/**
 * Use just a string for now (react 16.3), since react doesn't support Symbols in props yet.
 * https://github.com/facebook/react/issues/7552
 * @type {String}
 */
export const forwardRefSymbol = '__forwardRef__'

/**
 * Creates a function that will choose how to pass a ref.
 *
 * @param {Function|Component} Component A Component to wrap
 * @return {Function}
 */
const forwardFunctionFactory = Component => (props, ref) => {
  // eslint-disable-next-line react/prop-types
  if (isStatelessComponent(props.as)) {
    return (
      <Ref innerRef={ref}>
        <Component {...props} />
      </Ref>
    )
  }

  if (supportsRef(props.as)) {
    return createElement(Component, {
      ...props,
      [forwardRefSymbol]: ref,
    })
  }

  return Component
}

export default forwardFunctionFactory
