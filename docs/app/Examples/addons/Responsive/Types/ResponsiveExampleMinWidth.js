import React from 'react'
import { Responsive, Segment } from 'semantic-ui-react'

const ResponsiveExampleMinWidth = () => (
  <Segment.Group>
    <Responsive as={Segment} minWidth={768}>
      Visible only if display has <code>768px</code> width and higher
    </Responsive>
    <Responsive as={Segment} minWidth={992}>
      Visible only if display has <code>992px</code> width and higher
    </Responsive>
  </Segment.Group>
)

export default ResponsiveExampleMinWidth
