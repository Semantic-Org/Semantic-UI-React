import hoistStatics from 'hoist-non-react-statics'
import React, { forwardRef } from 'react'

import Ref from '../../addons/Ref'
import { isStatelessComponent, supportsRef } from '../componentUtils'

/**
 * Use just a string for now (react 16.3), since react doesn't support Symbols in props yet
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
export const forwardFunctionFactory = Component => (props, ref) => {
  // eslint-disable-next-line react/prop-types
  if (isStatelessComponent(props.as)) {
    return (
      <Ref innerRef={ref}>
        <Component {...props} />
      </Ref>
    )
  }

  if (supportsRef(props.as)) {
    return <Component {...{ [forwardRefSymbol]: ref, ...props }} />
  }

  return Component
}

/**
 * Wraps passed component with react 'forwardRef' function, which produce new component with type 'object' and structure
 * like so: { $$type: Symbol(), render: function }. Assigns (hoists) static methods of passed component to result
 * forward component using 'hoist-non-react-statics' module.
 *
 * @param {Function|Component} Component A Component to wrap with forwardRef()
 * @return {Object}
 */
export const forwardRefFactory = (Component) => {
  const forwarder = forwardRef(forwardFunctionFactory(Component))

  hoistStatics(forwarder, Component, { $$typeof: true, render: true })
  return forwarder
}
