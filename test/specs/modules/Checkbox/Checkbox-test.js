import React from 'react';
import {Checkbox} from 'stardust';

describe('Checkbox', () => {
  it('can be checked by default', () => {
    const renderedCheckbox = render(<Checkbox defaultChecked name='firstName' />).first();
    const isChecked = renderedCheckbox.refs.checkbox.state.initialChecked;
    renderedCheckbox.props.defaultChecked.should.equal(true);
    isChecked.should.equal(true);
  });
  it('should have a semantic ui plugin to handle the check action', () => {
    render(<Checkbox name='firstName' label='Include First' />)
      .first()
      .container.checkbox.called.should.equal(true);
  });
  it('should have a fitted class if no label is given', () => {
    render(<Checkbox name='firstName' />).findClass('fitted');
  });
});
