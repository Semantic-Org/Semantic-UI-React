import React, {Component} from 'react';
import {Form, Checkbox, Segment} from 'stardust';

export default class extends Component {
  render() {
    return (
      <div>
        <Segment className='compact'>
          <Form>
            <Checkbox className='fitted' />
          </Form>
        </Segment>
        <Segment className='compact'>
          <Form>
            <Checkbox className='fitted slider' />
          </Form>
        </Segment>
        <Segment className='compact'>
          <Form>
            <Checkbox className='fitted toggle' />
          </Form>
        </Segment>
      </div>
    );
  }
}
