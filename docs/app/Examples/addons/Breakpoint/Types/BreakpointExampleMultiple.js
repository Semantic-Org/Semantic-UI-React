import React from 'react'
import { Breakpoint, Segment } from 'semantic-ui-react'

const BreakpointExampleMultiple = () => (
  <Segment.Group>
    <Breakpoint as={Segment} only='mobile tablet'>Mobile & Tablet</Breakpoint>
    <Breakpoint as={Segment} only='computer tablet'>Tablet & Computer</Breakpoint>
  </Segment.Group>
)

export default BreakpointExampleMultiple
