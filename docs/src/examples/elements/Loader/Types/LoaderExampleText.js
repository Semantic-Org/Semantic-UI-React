import React from 'react'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

const LoaderExampleText = () => (
  <div>
    <Segment>
      <Dimmer active>
        <Loader>Loading</Loader>
      </Dimmer>

      <Image src='/images/wireframe/short-paragraph.png' />
    </Segment>

    <Segment>
      <Dimmer active inverted>
        <Loader inverted>Loading</Loader>
      </Dimmer>

      <Image src='/images/wireframe/short-paragraph.png' />
    </Segment>
  </div>
)

export default LoaderExampleText
