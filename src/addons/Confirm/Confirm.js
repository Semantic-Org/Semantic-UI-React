import React, {Component, PropTypes} from 'react';
import Promise from 'bluebird';
import classNames from 'classnames';

import META from '../../utils/Meta.js';
import Modal from '../../modules/Modal/Modal';
import ModalContent from '../../modules/Modal/ModalContent';
import ModalFooter from '../../modules/Modal/ModalFooter';
import ModalHeader from '../../modules/Modal/ModalHeader';

export default class Confirm extends Component {
  static propTypes = {
    abortLabel: PropTypes.string,
    className: PropTypes.string,
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
  };

  componentDidMount() {
    this.deferred = Promise.defer();
  }

  handleAbort = () => {
    // Promise is resolved, confirmation is false
    this.deferred.resolve(false);
    // TODO: as of React 0.14, refs returns the DOM node, not the component, his may not work anymore
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
    this.setState({message});

    this.refs.modal.showModal();
    // Send back promise to be resolved
    return this.deferred.promise;
  };

  static _meta = {
    library: META.library.stardust,
    name: 'Confirm',
    type: META.type.addon,
  };

  render() {
    const classes = classNames(
      'sd-confirm',
      this.props.className
    );
    return (
      <Modal {...this.props} className={classes} ref='modal'>
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
