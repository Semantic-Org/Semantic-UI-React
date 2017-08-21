import React from 'react'
import { Responsive, Segment } from 'semantic-ui-react'

const ResponsiveExampleResponsive = () => (
  <Segment.Group>
    <Responsive as={Segment} only='mobile'>Mobile</Responsive>
    <Responsive as={Segment} only='tablet'>Tablet</Responsive>
    <Responsive as={Segment} only='computer'>Computer</Responsive>
    <Responsive as={Segment} only='large screen'>Large Screen</Responsive>
    <Responsive as={Segment} only='widescreen'>Widescreen</Responsive>
  </Segment.Group>
)

export default ResponsiveExampleResponsive
