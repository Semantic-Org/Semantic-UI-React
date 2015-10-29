import React, {Component} from 'react';
import {Button, Divider} from 'stardust';

export default class DividerVerticalExample extends Component {
  render() {
    return (
      <div className='ui three column grid'>
        <div className='column'>
          <Button className='primary'>Button Left</Button>
        </div>
        <Divider className='vertical' />
        <div className='column'>
          <Button className='primary'>Button Middle</Button>
        </div>
        <Divider className='vertical' />
        <div className='column'>
          <Button className='primary'>Button Right</Button>
        </div>
      </div>
    );
  }
}
