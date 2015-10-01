import React from 'react';
import ConfirmationModal from 'app/stardust/ConfirmationModal/ConfirmationModal';

describe('ConfirmationModal', () => {
  it('should have a default props', () => {
    let confirmationModal = render(<ConfirmationModal />).first();
    confirmationModal.props.abortLabel.should.equal('Cancel');
    confirmationModal.props.confirmLabel.should.equal('Yes');
    confirmationModal.props.ref.should.equal('modal');
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
