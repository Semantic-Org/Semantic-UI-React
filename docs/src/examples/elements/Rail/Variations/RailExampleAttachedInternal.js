import React from 'react'
import { Image, Rail, Segment } from 'semantic-ui-react'

const RailExampleAttachedInternal = () => (
  <Segment>
    <Image src='/images/wireframe/paragraph.png' />

    <Rail attached internal position='left'>
      <Segment>Left Rail Content</Segment>
    </Rail>

    <Rail attached internal position='right'>
      <Segment>Right Rail Content</Segment>
    </Rail>
  </Segment>
)

export default RailExampleAttachedInternal
