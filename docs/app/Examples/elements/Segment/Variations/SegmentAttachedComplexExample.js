import React, { Component } from 'react'
import { Header, Icon, Message, Segment } from 'stardust'

export default class SegmentAttachedComplexExample extends Component {
  render() {
    return (
      <div>
        <Header as='h5' className='attached'>
          Dogs
        </Header>
        <Segment className='attached segment'>
          Dogs are one type of animal
        </Segment>
        <Header as='h5' className='attached header'>
          Cats
        </Header>
        <Segment className='attached segment'>
          Cats are thought of as being related to dogs, but only humans think this.
        </Segment>
        <Header as='h5' className='attached header'>
          Lions
        </Header>
        <Segment className='attached segment'>
          Humans don't think of lions as being like cats, but they are.
        </Segment>
        <Message attached='bottom' warning>
          <Icon name='warning' />
          You've reached the end of this content segment!
        </Message>
      </div>
    )
  }
}
