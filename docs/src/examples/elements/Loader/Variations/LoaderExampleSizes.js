import React from 'react'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

const LoaderExampleSizes = () => (
  <div>
    <Segment>
      <Dimmer active>
        <Loader size='mini'>Loading</Loader>
      </Dimmer>

      <Image src='/images/wireframe/short-paragraph.png' />
    </Segment>

    <Segment>
      <Dimmer active>
        <Loader size='tiny'>Loading</Loader>
      </Dimmer>

      <Image src='/images/wireframe/short-paragraph.png' />
    </Segment>

    <Segment>
      <Dimmer active>
        <Loader size='small'>Loading</Loader>
      </Dimmer>

      <Image src='/images/wireframe/short-paragraph.png' />
    </Segment>

    <Segment>
      <Dimmer active>
        <Loader size='medium'>Loading</Loader>
      </Dimmer>

      <Image src='/images/wireframe/short-paragraph.png' />
      <Image src='/images/wireframe/short-paragraph.png' />
    </Segment>

    <Segment>
      <Dimmer active>
        <Loader size='large'>Loading</Loader>
      </Dimmer>

      <Image src='/images/wireframe/short-paragraph.png' />
      <Image src='/images/wireframe/short-paragraph.png' />
      <Image src='/images/wireframe/short-paragraph.png' />
    </Segment>

    <Segment>
      <Dimmer active>
        <Loader size='big'>Loading</Loader>
      </Dimmer>

      <Image src='/images/wireframe/short-paragraph.png' />
      <Image src='/images/wireframe/short-paragraph.png' />
      <Image src='/images/wireframe/short-paragraph.png' />
    </Segment>

    <Segment>
      <Dimmer active>
        <Loader size='huge'>Loading</Loader>
      </Dimmer>

      <Image src='/images/wireframe/short-paragraph.png' />
      <Image src='/images/wireframe/short-paragraph.png' />
      <Image src='/images/wireframe/short-paragraph.png' />
    </Segment>

    <Segment>
      <Dimmer active>
        <Loader size='massive'>Loading</Loader>
      </Dimmer>

      <Image src='/images/wireframe/short-paragraph.png' />
      <Image src='/images/wireframe/short-paragraph.png' />
      <Image src='/images/wireframe/short-paragraph.png' />
    </Segment>
  </div>
)

export default LoaderExampleSizes
