import React, {Component} from 'react';
import {Segment, List, Item} from 'stardust';

export default class ListInvertedExample extends Component {
  render() {
    return (
      <Segment className='inverted'>
        <List className='inverted relaxed divided'>
          <Item>
            <div className='content'>
              <div className='header'>Chicago</div>
              <div className='description'>Located in the state of Illinois</div>
            </div>
          </Item>
          <Item>
            <div className='content'>
              <div className='header'>Indianapolis</div>
              <div className='description'>Located in the state of Indiana</div>
            </div>
          </Item>
          <Item>
            <div className='content'>
              <div className='header'>Nashville</div>
              <div className='description'>Located in the state of Tennessee</div>
            </div>
          </Item>
        </List>
      </Segment>
    );
  }
}
