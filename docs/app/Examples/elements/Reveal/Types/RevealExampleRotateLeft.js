import React from 'react'
import { Image, Reveal } from 'semantic-ui-react'

const RevealExampleRotateLeft = () => (
  <Reveal effect='rotate left'>
    <Reveal.Content visible>
      <Image shape='circular' size='small' src='http://semantic-ui.com/images/wireframe/square-image.png' />
    </Reveal.Content>
    <Reveal.Content hidden>
      <Image shape='circular' size='small' src='http://semantic-ui.com/images/avatar/large/veronika.jpg' />
    </Reveal.Content>
  </Reveal>
)

export default RevealExampleRotateLeft
