import React from 'react'
import { RevealContent, Image, Reveal } from 'semantic-ui-react'

const RevealExampleMove = () => (
  <Reveal animated='move'>
    <RevealContent visible>
      <Image src='/images/wireframe/square-image.png' size='small' />
    </RevealContent>
    <RevealContent hidden>
      <Image src='/images/avatar/large/chris.jpg' size='small' />
    </RevealContent>
  </Reveal>
)

export default RevealExampleMove
