import React from 'react'
import { Image, Reveal } from 'semantic-ui-react'

const RevealExampleHidden = () => (
  <Reveal animated='small fade'>
    <Reveal.Content visible>
      <Image src='/images/wireframe/square-image.png' size='small' />
    </Reveal.Content>
    <Reveal.Content hidden>
      <Image src='/images/avatar/large/ade.jpg' size='small' />
    </Reveal.Content>
  </Reveal>
)

export default RevealExampleHidden
