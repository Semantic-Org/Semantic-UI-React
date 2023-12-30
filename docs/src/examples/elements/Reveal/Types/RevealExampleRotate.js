import React from 'react'
import { RevealContent, Image, Reveal } from 'semantic-ui-react'

const RevealExampleRotate = () => (
  <Reveal animated='rotate'>
    <RevealContent visible>
      <Image circular size='small' src='/images/wireframe/square-image.png' />
    </RevealContent>
    <RevealContent hidden>
      <Image circular size='small' src='/images/avatar/large/stevie.jpg' />
    </RevealContent>
  </Reveal>
)

export default RevealExampleRotate
