import React from 'react'
import { Image, Reveal } from 'semantic-ui-react'

const RevealExampleMoveDown = () => (
  <Reveal animated='move down'>
    <Reveal.Content visible>
      <Image src='/images/wireframe/square-image.png' size='small' />
    </Reveal.Content>
    <Reveal.Content hidden>
      <Image src='/images/avatar/large/nan.jpg' size='small' />
    </Reveal.Content>
  </Reveal>
)

export default RevealExampleMoveDown
