import React from 'react'
import { Loader, Image, Segment } from 'stardust'

// TODO: Update <Dimmer> usage after its update to v1 API

const Indeterminate = () => (
  <div>
    <Segment>
      <div className='ui active dimmer'>
        <Loader indeterminate>Preparing Files</Loader>
      </div>

      <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
    </Segment>
  </div>
)

export default Indeterminate
