import React from 'react'
import { Responsive, Segment } from 'semantic-ui-react'

const breakpoints = {
  computer: 990,
  largeScreen: 1300,
  mobile: 300,
  tablet: 800,
  widescreen: 1900,
}

const ResponsiveExamplePoints = () => (
  <Segment.Group>
    <Responsive as={Segment} only='mobile' breakpoints={breakpoints}>Mobile</Responsive>
    <Responsive as={Segment} only='tablet' breakpoints={breakpoints}>Tablet</Responsive>
    <Responsive as={Segment} only='computer' breakpoints={breakpoints}>Computer</Responsive>
    <Responsive as={Segment} only='large screen' breakpoints={breakpoints}>Large Screen</Responsive>
    <Responsive as={Segment} only='widescreen' breakpoints={breakpoints}>Widescreen</Responsive>
  </Segment.Group>
)

export default ResponsiveExamplePoints
