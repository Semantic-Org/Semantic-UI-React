import React, {Component} from 'react';
import {Button} from 'stardust';

export default class FloatedExample extends Component {
  render() {
    return (
      <div>
        <Button className='right floated'>Right Floated</Button>
        <Button className='left floated'>Left Floated</Button>
      </div>
    );
  }
}
