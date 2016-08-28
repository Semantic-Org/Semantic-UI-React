import React from 'react'
import { Dimmer, Image, Segment } from 'stardust'

const paragraph = <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />

const Active = () => (
  <Segment>
    <Dimmer active />

    {paragraph}
    <br />
    {paragraph}
  </Segment>
)

export default Active
