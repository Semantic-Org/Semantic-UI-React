import React from 'react'
import { Rail, Segment } from 'stardust'

const RailAttachedInternalExample = () => (
  <Segment>
    <Rail attached internal position='left'>
      <Segment>Left Rail Content</Segment>
    </Rail>

    <Rail attached internal position='right'>
      <Segment>Right Rail Content</Segment>
    </Rail>
  </Segment>
)

export default RailAttachedInternalExample
