import React, { Component } from 'react'
import { Header, Icon, Message, Segment } from 'stardust'

export default class SegmentAttachedComplexExample extends Component {
  render() {
    return (
      <div>
        <Header.H5 attached>
          Dogs
        </Header.H5>
        <Segment attached>
          Dogs are one type of animal
        </Segment>
        <Header.H5 attached>
          Cats
        </Header.H5>
        <Segment attached>
          Cats are thought of as being related to dogs, but only humans think this.
        </Segment>
        <Header.H5 attached>
          Lions
        </Header.H5>
        <Segment attached>
          Humans don't think of lions as being like cats, but they are.
        </Segment>
        <Message attached='bottom' className='warning'>
          <Icon className='warning' />
          You've reached the end of this content segment!
        </Message>
      </div>
    )
  }
}
