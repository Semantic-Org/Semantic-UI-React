import React from 'react'
import computeElementType from './computeElementType'

const withComputedType = (computeType = null) => (ChildComponent) => {
  const WithComputedType = props => (
    <ChildComponent
      {...props}
      as={computeElementType(props, ChildComponent.defaultProps, computeType)}
    />
  )
  WithComputedType.originalComponent = ChildComponent

  return WithComputedType
}


export default withComputedType
