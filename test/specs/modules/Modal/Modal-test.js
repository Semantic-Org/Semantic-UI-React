import React from 'react';
import {Modal, ModalHeader, ModalContent, ModalFooter} from 'stardust';

describe('Modal', () => {
  it('should default ref to be "modal"', () => {
    Modal.defaultProps.ref.should.equal('modal');
  });
  it('should initially have a state where `isShown` is false', () => {
    render(<Modal />).first().state.isShown.should.equal(false);
  });
  it('should render children', () => {
    render(<Modal>Hello</Modal>).assertText('Hello');
  });
  it('sets isShown true', () => {
    const modal = render(<Modal />).first();
    modal.showModal();
    modal.state.isShown.should.equal(true);
  });
  it('sets isShown false', () => {
    const modal = render(<Modal />).first();
    modal.hideModal();
    modal.state.isShown.should.equal(false);
  });
  describe('ModalHeader', () => {
    it('should render children', () => {
      render(<ModalHeader>Hello</ModalHeader>).assertText('Hello');
    });
  });
  describe('ModalContent', () => {
    it('should render children', () => {
      render(<ModalContent>Hello</ModalContent>).assertText('Hello');
    });
  });
  describe('ModalFooter', () => {
    it('should render children', () => {
      render(<ModalFooter>Hey You</ModalFooter>).assertText('Hey You');
    });
  });
});
