import React from 'react'
import { Segment, List } from 'stardust'

const ListExampleInverted = () => (
  <Segment inverted>
    <List className='inverted relaxed divided'>
      <List.Item header='Chicago' description='Located in the state of Illinois' />
      <List.Item header='Indianapolis' description='Located in the state of Indiana' />
      <List.Item header='Nashville' description='Located in the state of Tennessee' />
    </List>
  </Segment>
)

export default ListExampleInverted
