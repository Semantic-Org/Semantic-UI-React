import React from 'react';
import ConfirmationModal from 'components/ConfirmationModal/ConfirmationModal';

describe('ConfirmationModal', () => {
  it('default prop abortLabel should be "Cancel"', () => {
    render(<ConfirmationModal />).first().props.abortLabel.should.equal('Cancel');
  });
  it('default prop confirmLabel should be "Yes"', () => {
    render(<ConfirmationModal />).first().props.confirmLabel.should.equal('Yes');
  });
  it('default prop ref should be "modal"', () => {
    render(<ConfirmationModal />).first().props.ref.should.equal('modal');
  });
  it('should return true on confirm', () => {
    let confirmationModal = render(<ConfirmationModal />);
    let confirmationButton = confirmationModal.findClass('sd-confirm-button');
    var confirmButtonNode = confirmationButton.getDOMNode();
    confirmationModal.first().show('Delete item?')
      .then((isConfirmed) => {
        isConfirmed.should.be.true;
      });
    React.addons.TestUtils.Simulate.click(confirmButtonNode );
  });
  it('should return false on abort', () => {
    let confirmationModal = render(<ConfirmationModal />);
    let abortButton = confirmationModal.findClass('sd-abort-button');
    var abortButtonNode = abortButton.getDOMNode();
    confirmationModal.first().show('Delete item?')
      .then((isConfirmed) => {
        isConfirmed.should.be.false;
      });
    React.addons.TestUtils.Simulate.click(abortButtonNode );
  });
});
