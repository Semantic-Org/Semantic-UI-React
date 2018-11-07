import React, { createElement } from 'react'

import Ref from '../../addons/Ref'
import { isBasic, isForwardRef } from '../componentUtils'

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
  console.log('forwardFunctionFactory()', {
    element: props.as,
    isBasic: isBasic(props.as),
    isForwardRef: isForwardRef(props.as),
  })

  // The most simple case when `as='div'`
  // This component supports ref forwarding!
  // Magic happens there!
  if (!props.as || isBasic(props.as) || isForwardRef(props.as)) {
    return createElement(Component, {
      ...props,
      [forwardRefSymbol]: ref,
    })
  }

  // Need to get ref manually
  return (
    <Ref innerRef={ref}>
      <Component {...props} />
    </Ref>
  )
}

export default forwardFunctionFactory
