import React from 'react'
import { Image, Reveal } from 'semantic-ui-react'

const RevealExampleActive = () => (
  <Reveal active effect='move'>
    <Reveal.Content visible>
      <Image src='http://semantic-ui.com/images/wireframe/square-image.png' size='small' />
    </Reveal.Content>
    <Reveal.Content hidden>
      <Image src='http://semantic-ui.com/images/avatar/large/nan.jpg' size='small' />
    </Reveal.Content>
  </Reveal>
)

export default RevealExampleActive
