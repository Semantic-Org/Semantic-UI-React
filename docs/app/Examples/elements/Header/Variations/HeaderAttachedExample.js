import React from 'react'
import { Header, Segment } from 'stardust'

const HeaderAttachedExample = () => (
  <div>
    <Header as='h2' attached='top'>
      Attached Header
    </Header>
    <Segment className='attached'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.
    </Segment>
  </div>
)

export default HeaderAttachedExample
