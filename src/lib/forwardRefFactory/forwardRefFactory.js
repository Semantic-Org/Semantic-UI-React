import hoistStatics from 'hoist-non-react-statics'
import { forwardRef } from 'react'

import forwardFunctionFactory from './forwardFunctionFactory'

/**
 * Wraps passed component with react 'forwardRef' function, which produce new component with type 'object' and structure
 * like so: { $$type: Symbol(), render: function }. Assigns (hoists) static methods of passed component to result
 * forward component using 'hoist-non-react-statics' module.
 *
 * @param {Function|Component} Component A Component to wrap with forwardRef()
 * @return {Object}
 */
const forwardRefFactory = (Component) => {
  const forwarder = forwardRef(forwardFunctionFactory(Component))

  hoistStatics(forwarder, Component, { $$typeof: true, render: true })
  return forwarder
}

export default forwardRefFactory
