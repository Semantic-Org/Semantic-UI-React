import React from 'react'
import { RevealContent, Image, Reveal } from 'semantic-ui-react'

const RevealExampleMoveDown = () => (
  <Reveal animated='move down'>
    <RevealContent visible>
      <Image src='/images/wireframe/square-image.png' size='small' />
    </RevealContent>
    <RevealContent hidden>
      <Image src='/images/avatar/large/nan.jpg' size='small' />
    </RevealContent>
  </Reveal>
)

export default RevealExampleMoveDown
