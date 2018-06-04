import React from 'react'
import { Responsive, Segment } from 'semantic-ui-react'

const ResponsiveExampleMixed = () => (
  <Responsive as={Segment} minWidth={320} maxWidth={2559}>
      Visible only if display has width between <code>320px</code> and <code>2559px</code>
  </Responsive>
)

export default ResponsiveExampleMixed
