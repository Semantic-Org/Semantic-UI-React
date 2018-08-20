import React from 'react'
import { Responsive, Segment } from 'semantic-ui-react'

const ResponsiveExampleMaxWidth = () => (
  <Segment.Group>
    <Responsive as={Segment} maxWidth={767}>
      Visible only if display has <code>767px</code> width and lower
    </Responsive>
    <Responsive as={Segment} maxWidth={2569}>
      Visible only if display has <code>2569px</code> width
    </Responsive>
  </Segment.Group>
)

export default ResponsiveExampleMaxWidth
