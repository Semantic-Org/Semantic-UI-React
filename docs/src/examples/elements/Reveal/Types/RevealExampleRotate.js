import React from 'react'
import { Image, Reveal } from 'semantic-ui-react'

const RevealExampleRotate = () => (
  <Reveal animated='rotate'>
    <Reveal.Content visible>
      <Image circular size='small' src='/images/wireframe/square-image.png' />
    </Reveal.Content>
    <Reveal.Content hidden>
      <Image circular size='small' src='/images/avatar/large/stevie.jpg' />
    </Reveal.Content>
  </Reveal>
)

export default RevealExampleRotate
