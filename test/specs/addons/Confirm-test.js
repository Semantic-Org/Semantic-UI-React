import React from 'react';
import {Confirm} from 'stardust';

describe('Confirm', () => {
  it('default prop abortLabel should be "Cancel"', () => {
    render(<Confirm />).first().props.abortLabel.should.equal('Cancel');
  });
  it('default prop confirmLabel should be "Yes"', () => {
    render(<Confirm />).first().props.confirmLabel.should.equal('Yes');
  });
  it('default prop ref should be "modal"', () => {
    render(<Confirm />).first().props.ref.should.equal('modal');
  });
  it('should return true on confirm', () => {
    const confirm = render(<Confirm />);
    const confirmationButton = confirm.findClass('sd-confirm-button');
    const confirmButtonNode = confirmationButton.getDOMNode();
    confirm.first().show('Delete item?')
      .then((isConfirmed) => {
        isConfirmed.should.be.true;
      });
    React.addons.TestUtils.Simulate.click(confirmButtonNode );
  });
  it('should return false on abort', () => {
    const confirm = render(<Confirm />);
    const abortButton = confirm.findClass('sd-abort-button');
    const abortButtonNode = abortButton.getDOMNode();
    confirm.first().show('Delete item?')
      .then((isConfirmed) => {
        isConfirmed.should.be.false;
      });
    React.addons.TestUtils.Simulate.click(abortButtonNode );
  });
});
