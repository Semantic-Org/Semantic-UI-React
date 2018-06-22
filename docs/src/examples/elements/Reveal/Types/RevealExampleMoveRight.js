import React from 'react'
import { Image, Reveal } from 'semantic-ui-react'

const RevealExampleMoveRight = () => (
  <Reveal animated='move right'>
    <Reveal.Content visible>
      <Image src='/images/wireframe/square-image.png' size='small' />
    </Reveal.Content>
    <Reveal.Content hidden>
      <Image src='/images/avatar/large/jenny.jpg' size='small' />
    </Reveal.Content>
  </Reveal>
)

export default RevealExampleMoveRight
