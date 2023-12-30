import React from 'react'
import { RevealContent, Image, Reveal } from 'semantic-ui-react'

const RevealExampleRotateLeft = () => (
  <Reveal animated='rotate left'>
    <RevealContent visible>
      <Image circular size='small' src='/images/wireframe/square-image.png' />
    </RevealContent>
    <RevealContent hidden>
      <Image circular size='small' src='/images/avatar/large/veronika.jpg' />
    </RevealContent>
  </Reveal>
)

export default RevealExampleRotateLeft
