import React from 'react';
import faker from 'faker';
import Modal from '../../../src/components/Modal/Modal';
import ModalHeader from '../../../src/components/Modal/ModalHeader';
import ModalContent from '../../../src/components/Modal/ModalContent';
import ModalFooter from '../../../src/components/Modal/ModalFooter';

describe('Modal', () => {
  it('should default actionRequired to be `false`', () => {
    let modal = render(<Modal />).first();
    modal.props.actionRequired.should.be.false;
    modal.props.ref.should.equal('modal');
  });
  it('should default ref to be "modal"', () => {
    let modal = render(<Modal />).first();
    modal.props.ref.should.equal('modal');
  });
  it('should initialize semantic modal on render', () => {
    render(<Modal />).first().elm.modal.called.should.equal(true);
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
  it('takes size prop', () => {
    let renderedModal = render(<Modal size='small' />);
    renderedModal.first().props.size.should.equal('small');
    renderedModal.findClass('sd-modal').getDOMNode().getAttribute('class').should.contain('small');
  });
  it('should show modal', () => {
    var renderedModal = render(<Modal />).first();
    renderedModal.showModal();
    renderedModal.elm.modal.called.should.equal(true);
  });
  it('should hide modal', () => {
    var renderedModal = render(<Modal />).first();
    renderedModal.hideModal();
    renderedModal.elm.modal.called.should.equal(true);
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
