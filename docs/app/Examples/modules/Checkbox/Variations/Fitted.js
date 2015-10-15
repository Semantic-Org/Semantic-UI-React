import React, {Component} from 'react';
import {Checkbox, Segment} from 'stardust';

export default class extends Component {
  render() {
    return (
      <div>
        <Segment className='compact'>
          <Checkbox className='fitted' />
        </Segment>
        <Segment className='compact'>
          <Checkbox className='fitted slider' />
        </Segment>
        <Segment className='compact'>
          <Checkbox className='fitted toggle' />
        </Segment>
      </div>
    );
  }
}
