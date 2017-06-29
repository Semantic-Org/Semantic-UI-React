import React from 'react'
import { Embed } from 'semantic-ui-react'

const EmbedExampleIframe = () => (
  <Embed
    autoplay={false}
    brandedUI={false}
    color='white'
    hd={false}
    id='gJscrxxl_Bg'
    iframe={{
      allowFullScreen: true,
      style: {
        padding: 10,
      },
    }}
    placeholder='/assets/images/image-16by9.png'
    source='youtube'
  />
)

export default EmbedExampleIframe
