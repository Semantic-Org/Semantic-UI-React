import React from 'react'
import { Responsive, Segment } from 'semantic-ui-react'

const ResponsiveExampleMultiple = () => (
  <Segment.Group>
    <Responsive as={Segment} only='mobile tablet'>Mobile & Tablet</Responsive>
    <Responsive as={Segment} only='computer tablet'>Tablet & Computer</Responsive>
  </Segment.Group>
)

export default ResponsiveExampleMultiple
