import React from 'react'
import { RevealContent, Image, Reveal } from 'semantic-ui-react'

const RevealExampleMoveUp = () => (
  <Reveal animated='move up'>
    <RevealContent visible>
      <Image src='/images/wireframe/square-image.png' size='small' />
    </RevealContent>
    <RevealContent hidden>
      <Image src='/images/avatar/large/justen.jpg' size='small' />
    </RevealContent>
  </Reveal>
)

export default RevealExampleMoveUp
