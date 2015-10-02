import React, {Component, PropTypes} from 'react';
import Promise from 'bluebird';
// Components
import Modal from 'components/Modal/Modal';
import ModalContent from 'components/Modal/ModalContent';
import ModalFooter from 'components/Modal/ModalFooter';
import ModalHeader from 'components/Modal/ModalHeader';

class ConfirmationModal extends Component {
  static propTypes = {
    abortLabel: PropTypes.string,
    confirmLabel: PropTypes.string,
    header: PropTypes.string,
    ref: PropTypes.string,
  };

  static defaultProps = {
    abortLabel: 'Cancel',
    confirmLabel: 'Yes',
    ref: 'modal',
  };

  state = {
    message: 'Are you sure?',
  }

  componentDidMount() {
    this.deferred = Promise.defer();
  }

  handleAbort = () => {
    // Promise is resolved, confirmation is false
    this.deferred.resolve(false);
    this.refs.modal.hideModal();
  };

  handleConfirm = () => {
    // Promise is resolved, confirmation is true
    this.deferred.resolve(true);
    this.refs.modal.hideModal();
  };

  show = (message) => {
    // Need to reset promise with every time show() is called to clear out the promise resolve
    // from the previous button that called show method:
    this.deferred = Promise.defer();
    this.setState({message: message});

    this.refs.modal.showModal();
    // Send back promise to be resolved
    return this.deferred.promise;
  };

  render() {
    return (
      <Modal actionRequired ref='modal'>
        <ModalHeader>
          {this.props.header}
        </ModalHeader>
        <ModalContent>
          {this.state.message}
        </ModalContent>
        <ModalFooter>
          <div className='sd-abort-button ui button' onClick={this.handleAbort}>{this.props.abortLabel}</div>
          <div className='sd-confirm-button ui blue button' onClick={this.handleConfirm}>{this.props.confirmLabel}</div>
        </ModalFooter>
      </Modal>
    );
  }
}

export default ConfirmationModal;
