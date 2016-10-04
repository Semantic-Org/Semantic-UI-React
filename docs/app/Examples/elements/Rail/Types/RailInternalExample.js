import React from 'react'
import { Image, Rail, Segment } from 'semantic-ui-react'

const RailInternalExample = () => (
  <Segment textAlign='center'>
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
