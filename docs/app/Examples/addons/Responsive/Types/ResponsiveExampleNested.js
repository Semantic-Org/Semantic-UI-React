import React from 'react'
import { Responsive, Segment } from 'semantic-ui-react'

const ResponsiveExampleNested = () => (
  <Segment.Group>
    <Responsive as={Segment} only='mobile tablet'>
      <Responsive only='mobile'>
        <p>Mobile</p>
      </Responsive>
      <Responsive only='tablet'>
        <p>Mobile</p>
      </Responsive>
    </Responsive>

    <Responsive as={Segment} only='computer'>
      <p>Computer</p>
      <Responsive only='large screen'>
        <p>Large Screen</p>
      </Responsive>
      <Responsive only='widescreen'>
        <p>Widescreen</p>
      </Responsive>
    </Responsive>
  </Segment.Group>
)

export default ResponsiveExampleNested
