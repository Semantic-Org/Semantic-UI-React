import React from 'react'
import { Breakpoint, Segment } from 'semantic-ui-react'

const points = {
  computer: 990,
  largeScreen: 1300,
  mobile: 300,
  tablet: 800,
  widescreen: 1900,
}

const BreakpointExamplePoints = () => (
  <Segment.Group>
    <Breakpoint as={Segment} only='mobile' points={points}>Mobile</Breakpoint>
    <Breakpoint as={Segment} only='tablet' points={points}>Tablet</Breakpoint>
    <Breakpoint as={Segment} only='computer' points={points}>Computer</Breakpoint>
    <Breakpoint as={Segment} only='large screen' points={points}>Large Screen</Breakpoint>
    <Breakpoint as={Segment} only='widescreen' points={points}>Widescreen</Breakpoint>
  </Segment.Group>
)

export default BreakpointExamplePoints
