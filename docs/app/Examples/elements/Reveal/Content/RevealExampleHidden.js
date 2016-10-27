import React from 'react'
import { Image, Reveal } from 'semantic-ui-react'

const RevealExampleHidden = () => (
  <Reveal effect='small fade'>
    <Reveal.Content visible>
      <Image src='http://semantic-ui.com/images/wireframe/square-image.png' size='small' />
    </Reveal.Content>
    <Reveal.Content hidden>
      <Image src='http://semantic-ui.com/images/avatar/large/ade.jpg' size='small' />
    </Reveal.Content>
  </Reveal>
)

export default RevealExampleHidden
