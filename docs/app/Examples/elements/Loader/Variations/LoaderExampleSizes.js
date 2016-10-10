import React from 'react'
import { Loader, Image, Segment } from 'semantic-ui-react'

// TODO: Update <Dimmer> usage after its update to v1 API

const LoaderExampleSizes = () => (
  <div>
    <Segment>
      <div className='ui active dimmer'>
        <Loader size='mini'>Loading</Loader>
      </div>

      <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
    </Segment>

    <Segment>
      <div className='ui active dimmer'>
        <Loader size='tiny'>Loading</Loader>
      </div>

      <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
    </Segment>

    <Segment>
      <div className='ui active dimmer'>
        <Loader size='small'>Loading</Loader>
      </div>

      <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
    </Segment>

    <Segment>
      <div className='ui active dimmer'>
        <Loader size='medium'>Loading</Loader>
      </div>

      <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
      <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
    </Segment>

    <Segment>
      <div className='ui active dimmer'>
        <Loader size='large'>Loading</Loader>
      </div>

      <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
      <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
      <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
    </Segment>

    <Segment>
      <div className='ui active dimmer'>
        <Loader size='big'>Loading</Loader>
      </div>

      <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
      <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
      <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
    </Segment>

    <Segment>
      <div className='ui active dimmer'>
        <Loader size='huge'>Loading</Loader>
      </div>

      <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
      <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
      <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
    </Segment>

    <Segment>
      <div className='ui active dimmer'>
        <Loader size='massive'>Loading</Loader>
      </div>

      <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
      <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
      <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
    </Segment>
  </div>
)

export default LoaderExampleSizes
