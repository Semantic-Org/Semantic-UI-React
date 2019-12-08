import React from 'react'
import { Header, Icon, Message, Segment } from 'semantic-ui-react'

const SegmentExampleAttachedComplex = () => (
  <div>
    <Header as='h5' attached='top'>
      Dogs
    </Header>
    <Segment attached>Dogs are one type of animal.</Segment>
    <Header as='h5' attached>
      Cats
    </Header>
    <Segment attached>
      Cats are thought of as being related to dogs, but only humans think this.
    </Segment>
    <Header as='h5' attached>
      Lions
    </Header>
    <Segment attached>
      Humans don't think of lions as being like cats, but they are.
    </Segment>
    <Message warning attached='bottom'>
      <Icon name='warning' />
      You've reached the end of this content segment!
    </Message>
  </div>
)

export default SegmentExampleAttachedComplex
