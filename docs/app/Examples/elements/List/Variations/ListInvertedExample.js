import React, { Component } from 'react'
import { Segment, List, ListItem } from 'stardust'

export default class ListInvertedExample extends Component {
  render() {
    return (
      <Segment className='inverted'>
        <List className='inverted relaxed divided'>
          <ListItem header='Chicago' description='Located in the state of Illinois' />
          <ListItem header='Indianapolis' description='Located in the state of Indiana' />
          <ListItem header='Nashville' description='Located in the state of Tennessee' />
        </List>
      </Segment>
    )
  }
}
