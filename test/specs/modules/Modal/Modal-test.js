import _ from 'lodash';
import React from 'react';
import faker from 'faker';
import {Modal, ModalHeader, ModalContent, ModalFooter} from 'stardust';

describe('Modal', () => {
  it('should default ref to be "modal"', () => {
    const modal = render(<Modal />).first();
    modal.props.ref.should.equal('modal');
  });
  it('should initially have a state where `isShown` is false', () => {
    render(<Modal />).first().state.isShown.should.equal(false);
  });
  it('should render children', () => {
    render(<Modal>Hello</Modal>).findText('Hello');
  });
  it('inherits classes', () => {
    // generate crap classes like "system firewall protocol"
    const classes = _.times(_.random(3), faker.hacker.noun).join(' ');
    const renderedGridClasses = render(<Modal className={classes} />).findClass('sd-modal');
    renderedGridClasses.props.className.should.contain(classes);
  });
  it('sets isShown true', () => {
    const renderedModal = render(<Modal />).first();
    renderedModal.showModal();
    renderedModal.state.isShown.should.equal(true);
  });
  it('sets isShown false', () => {
    const renderedModal = render(<Modal />).first();
    renderedModal.hideModal();
    renderedModal.state.isShown.should.equal(false);
  });
  describe('ModalHeader', () => {
    it('should render children', () => {
      render(<Modal><ModalHeader>Hello</ModalHeader></Modal>).findText('Hello');
    });
    it('inherits classes', () => {
      const classes = _.times(_.random(3), faker.hacker.noun).join(' ');
      const renderedGridClasses = render(<ModalHeader className={classes} />).findClass('sd-modal-header');
      renderedGridClasses.props.className.should.contain(classes);
    });
  });
  describe('ModalContent', () => {
    it('should render children', () => {
      render(<Modal><ModalContent>Hello</ModalContent></Modal>).findText('Hello');
    });
    it('inherits classes', () => {
      const classes = _.times(_.random(3), faker.hacker.noun).join(' ');
      const renderedGridClasses = render(<ModalContent className={classes} />).findClass('sd-modal-content');
      renderedGridClasses.props.className.should.contain(classes);
    });
  });
  describe('ModalFooter', () => {
    it('should render children', () => {
      render(<Modal><ModalFooter>Hey You</ModalFooter></Modal>).findText('Hey You');
    });
    it('inherits classes', () => {
      const classes = _.times(_.random(3), faker.hacker.noun).join(' ');
      const renderedGridClasses = render(<ModalFooter className={classes} />).findClass('sd-modal-footer');
      renderedGridClasses.props.className.should.contain(classes);
    });
  });
});
