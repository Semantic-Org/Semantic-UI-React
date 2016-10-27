import React from 'react'
import { Image, Reveal } from 'semantic-ui-react'

const RevealExampleRotate = () => (
  <Reveal effect='rotate'>
    <Reveal.Content visible>
      <Image shape='circular' size='small' src='http://semantic-ui.com/images/wireframe/square-image.png' />
    </Reveal.Content>
    <Reveal.Content hidden>
      <Image shape='circular' size='small' src='http://semantic-ui.com/images/avatar/large/stevie.jpg' />
    </Reveal.Content>
  </Reveal>
)

export default RevealExampleRotate
