import React from 'react'
import { Divider, Segment } from 'semantic-ui-react'

const DividerExampleInverted = () => (
  <Segment inverted>
    <Divider inverted />
    <Divider horizontal inverted>Horizontal</Divider>
  </Segment>
)

export default DividerExampleInverted
