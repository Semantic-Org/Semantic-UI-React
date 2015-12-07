import React from 'react';
import {Progress} from 'stardust';

describe.only('Progress', () => {
  it('should be able to receive children', () => {
    render(
      <Progress>
        Child
      </Progress>
    ).assertText('Child');
  });

  it('should create a div with the class of bar', () => {
    render(<Progress />).findClass('bar');
  });

  it('should create two progress divs if un-attached', () => {
    render(<Progress />)
      .scryClass('progress')
      .should.have.a.lengthOf(2);
  });

  it('should not create extra progress div if attached', () => {
    render(<Progress className='attached' />)
      .scryClass('progress')
      .should.have.a.lengthOf(1);
  });
});
