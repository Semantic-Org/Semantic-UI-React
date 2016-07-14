import React from 'react'
import { Rail, Segment } from 'stardust'

const RailInternalExample = () => (
  <Segment className='center aligned'>
    <Rail internal position='left'>
      <Segment>Left Rail Content</Segment>
    </Rail>

    <Rail internal position='right'>
      <Segment>Right Rail Content</Segment>
    </Rail>

    Segment content
  </Segment>
)

export default RailInternalExample
