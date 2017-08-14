import React from 'react'
import { Breakpoint, Segment } from 'semantic-ui-react'

const BreakpointExampleNested = () => (
  <Segment.Group>
    <Breakpoint as={Segment} only='mobile tablet'>
      <Breakpoint only='mobile'>
        <p>Mobile</p>
      </Breakpoint>
      <Breakpoint only='tablet'>
        <p>Mobile</p>
      </Breakpoint>
    </Breakpoint>

    <Breakpoint as={Segment} only='computer'>
      <p>Computer</p>
      <Breakpoint only='large screen'>
        <p>Large Screen</p>
      </Breakpoint>
      <Breakpoint only='widescreen'>
        <p>Widescreen</p>
      </Breakpoint>
    </Breakpoint>
  </Segment.Group>
)

export default BreakpointExampleNested
