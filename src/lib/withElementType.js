import React, { Component } from 'react'
import computeElementType from './computeElementType'

const withElementType = ChildComponent => {
  const wrapper = class ElementType extends Component {
    render() {
      const { innerRef, typeComputer, ...rest } = this.props
      const as = computeElementType({ defaultProps: { as: 'div' }}, rest, typeComputer)

      console.error(as)

      return <ChildComponent {...rest} as={as} ref={innerRef} />
    }
  }
  wrapper.originalComponent = ChildComponent

  return wrapper
}

export default withElementType
