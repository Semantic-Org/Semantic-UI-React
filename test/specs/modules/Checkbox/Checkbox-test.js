import React from 'react';
import {Checkbox} from 'stardust';

describe('Checkbox', () => {
  it('can be checked by default', () => {
    render(<Checkbox defaultChecked name='firstName' />)
      .first()
      .refs.checkbox.checked.should.equal(true);
  });
  it('should have a semantic ui plugin to handle the check action', () => {
    render(<Checkbox name='firstName' label='Include First' />)
      .first()
      .element.checkbox.called.should.equal(true);
  });
  it('should have a fitted class if no label is given', () => {
    render(<Checkbox name='firstName' />).findClass('fitted');
  });
});
