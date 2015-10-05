import React from 'react';
import faker from 'faker';
import Modal from 'src/components/Modal/Modal';
import ModalHeader from 'src/components/Modal/ModalHeader';
import ModalContent from 'src/components/Modal/ModalContent';
import ModalFooter from 'src/components/Modal/ModalFooter';

describe('Modal', () => {
  it('should default ref to be "modal"', () => {
    let modal = render(<Modal />).first();
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
    let classes = _.times(_.random(3), faker.hacker.noun).join(' ');
    let renderedGridClasses = render(<Modal className={classes} />).findClass('sd-modal');
    renderedGridClasses.props.className.should.contain(classes);
  });
  it('sets isShown true', () => {
    var renderedModal = render(<Modal />).first();
    renderedModal.showModal();
    renderedModal.state.isShown.should.equal(true);
  });
  it('sets isShown false', () => {
    var renderedModal = render(<Modal />).first();
    renderedModal.hideModal();
    renderedModal.state.isShown.should.equal(false);
  });
  describe('ModalHeader', () => {
    it('should render children', () => {
      render(<Modal><ModalHeader>Hello</ModalHeader></Modal>).findText('Hello');
    });
    it('inherits classes', () => {
      let classes = _.times(_.random(3), faker.hacker.noun).join(' ');
      let renderedGridClasses = render(<ModalHeader className={classes} />).findClass('sd-modal-header');
      renderedGridClasses.props.className.should.contain(classes);
    });
  });
  describe('ModalContent', () => {
    it('should render children', () => {
      render(<Modal><ModalContent>Hello</ModalContent></Modal>).findText('Hello');
    });
    it('inherits classes', () => {
      let classes = _.times(_.random(3), faker.hacker.noun).join(' ');
      let renderedGridClasses = render(<ModalContent className={classes} />).findClass('sd-modal-content');
      renderedGridClasses.props.className.should.contain(classes);
    });
  });
  describe('ModalFooter', () => {
    it('should render children', () => {
      render(<Modal><ModalFooter>Hey You</ModalFooter></Modal>).findText('Hey You');
    });
    it('inherits classes', () => {
      let classes = _.times(_.random(3), faker.hacker.noun).join(' ');
      let renderedGridClasses = render(<ModalFooter className={classes} />).findClass('sd-modal-footer');
      renderedGridClasses.props.className.should.contain(classes);
    });
  });
});
