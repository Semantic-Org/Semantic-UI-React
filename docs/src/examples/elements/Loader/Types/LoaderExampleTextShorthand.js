import React from 'react'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

const LoaderExampleTextShorthand = () => (
  <div>
    <Segment>
      <Dimmer active>
        <Loader content='Loading' />
      </Dimmer>

      <Image src='/images/wireframe/short-paragraph.png' />
    </Segment>

    <Segment>
      <Dimmer active inverted>
        <Loader inverted content='Loading' />
      </Dimmer>

      <Image src='/images/wireframe/short-paragraph.png' />
    </Segment>
  </div>
)

export default LoaderExampleTextShorthand
