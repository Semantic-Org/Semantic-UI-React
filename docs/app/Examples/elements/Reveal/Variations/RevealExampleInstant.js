import React from 'react'
import { Image, Reveal } from 'semantic-ui-react'

const RevealExampleInstant = () => (
  <Reveal animated='move' instant>
    <Reveal.Content visible>
      <Image src='http://semantic-ui.com/images/wireframe/square-image.png' size='small' />
    </Reveal.Content>
    <Reveal.Content hidden>
      <Image src='http://semantic-ui.com/images/avatar/large/chris.jpg' size='small' />
    </Reveal.Content>
  </Reveal>
)

export default RevealExampleInstant
