import React from 'react'
import { Loader, Image, Segment } from 'semantic-ui-react'

// TODO: Update <Dimmer> usage after its update to v1 API

const LoaderExampleTextShorthand = () => (
  <div>
    <Segment>
      <div className='ui active dimmer'>
        <Loader content='Loading' />
      </div>

      <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
    </Segment>

    <Segment>
      <div className='ui active inverted dimmer'>
        <Loader inverted content='Loading' />
      </div>

      <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
    </Segment>
  </div>
)

export default LoaderExampleTextShorthand
