import React from 'react'
import { Embed } from 'semantic-ui-react'

const EmbedExampleSettings = () => (
  <Embed
    placeholder='http://semantic-ui.com/images/image-16by9.png'
    source='youtube'
    sourceId='D0WnZyxp_Wo'
    sourceSettings={{
      autoPlay: false,
      brandedUI: false,
      color: 'white',
      hd: false,
    }}
  />
)

export default EmbedExampleSettings
