import React from 'react'
import { Breakpoint, Segment } from 'semantic-ui-react'

const BreakpointExampleBreakpoint = () => (
  <Segment.Group>
    <Breakpoint as={Segment} only='mobile'>Mobile</Breakpoint>
    <Breakpoint as={Segment} only='tablet'>Tablet</Breakpoint>
    <Breakpoint as={Segment} only='computer'>Computer</Breakpoint>
    <Breakpoint as={Segment} only='large screen'>Large Screen</Breakpoint>
    <Breakpoint as={Segment} only='widescreen'>Widescreen</Breakpoint>
  </Segment.Group>
)

export default BreakpointExampleBreakpoint
