import React, {Component} from 'react';
import {Header, Message, Segment, Segments} from 'stardust';

export default class SegmentAttachedComplexExample extends Component {
  render() {
    return (
      <Segments>
        <Header.H5 className='attached'>
          Dogs
        </Header.H5>
        <Segment className='attached segment'>
          Dogs are one type of animal
        </Segment>
        <Header.H5 className='attached header'>
          Cats
        </Header.H5>
        <Segment className='attached segment'>
          Cats are thought of as being related to dogs, but only humans think this.
        </Segment>
        <Header.H5 className='attached header'>
          Lions
        </Header.H5>
        <Segment className='attached segment'>
          Humans don't think of lions as being like cats, but they are.
        </Segment>
        <Message className='bottom attached warning'>
          <i className='warning icon'></i>
          You've reached the end of this content segment!
        </Message>
      </Segments>
    );
  }
}
