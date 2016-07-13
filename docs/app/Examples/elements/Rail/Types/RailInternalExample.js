import React from 'react'
import { Image, Rail, Segment } from 'stardust'

const RailInternalExample = () => (
  <Segment className='center aligned'>
    <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' />

    <Rail internal position='left'>
      <Segment>Left Rail Content</Segment>
    </Rail>

    <Rail internal position='right'>
      <Segment>Right Rail Content</Segment>
    </Rail>
  </Segment>
)

export default RailInternalExample
