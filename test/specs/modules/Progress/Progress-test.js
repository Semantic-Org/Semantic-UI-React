import React from 'react';
import {Progress} from 'stardust';

describe('Progress', () => {
  it('should be able to receive children', () => {
    render(
      <Progress>
        <div className='new-child' />
      </Progress>
    ).scryClass('new-child');
  });
  it('should create a div with the class of bar', () => {
    render(<Progress />).scryClass('bar');
  });
  it('should create a div with the class of progress', () => {
    render(<Progress />).scryClass('progress');
  });
});
