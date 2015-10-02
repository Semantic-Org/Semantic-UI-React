import React from 'react';
import faker from 'faker';
import Modal from 'components/Modal/Modal';
import ModalHeader from 'components/Modal/ModalHeader';
import ModalContent from 'components/Modal/ModalContent';
import ModalFooter from 'components/Modal/ModalFooter';

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
    var renderedModal = render(
      <Modal>
        <span className='sd-test-span'>Hello</span>
      </Modal>
    ).findClass('sd-modal');
    renderedModal.props.children.should.be.ok;
    let childComponentClass;
    React.Children.forEach(renderedModal.props.children, (child, i) => {
      if (i === 0) {
        childComponentClass = child.props.className;
      }
    });
    childComponentClass.should.equal('sd-test-span');
  });
  it('inherits classes', () => {
    // generate crap classes like "system firewall protocol"
    let classes = _.times(_.random(3), faker.hacker.noun).join(' ');

    let renderedGridClasses = render(<Modal className={classes} />)
      .findClass('sd-modal')
      .getDOMNode()
      .getAttribute('class');
    renderedGridClasses.should.contain(classes);
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
      var renderedModal = render(
        <Modal>
          <ModalHeader>
            <h1 className='sd-test-h-tag'>Hello</h1>
          </ModalHeader>
        </Modal>
      ).findClass('sd-modal-heading');
      renderedModal.props.children.should.be.ok;
      let childComponentClass;
      React.Children.forEach(renderedModal.props.children, (child, i) => {
        if (i === 0) {
          childComponentClass = child.props.className;
        }
      });
      childComponentClass.should.equal('sd-test-h-tag');
    });
    it('inherits classes', () => {
      // generate crap classes like "system firewall protocol"
      let classes = _.times(_.random(3), faker.hacker.noun).join(' ');

      let renderedGridClasses = render(<ModalHeader className={classes} />)
        .findClass('sd-modal-heading')
        .getDOMNode()
        .getAttribute('class');
      renderedGridClasses.should.contain(classes);
    });
  });
  describe('ModalContent', () => {
    it('should render children', () => {
      var renderedModal = render(
        <Modal>
          <ModalContent>
            <h4 className='sd-test-h-tag'>Hello</h4>
          </ModalContent>
        </Modal>
      ).findClass('sd-modal-content');
      renderedModal.props.children.should.be.ok;
      let childComponentClass;
      React.Children.forEach(renderedModal.props.children, (child, i) => {
        if (i === 0) {
          childComponentClass = child.props.className;
        }
      });
      childComponentClass.should.equal('sd-test-h-tag');
    });
    it('inherits classes', () => {
      // generate crap classes like "system firewall protocol"
      let classes = _.times(_.random(3), faker.hacker.noun).join(' ');

      let renderedGridClasses = render(<ModalContent className={classes} />)
        .findClass('sd-modal-content')
        .getDOMNode()
        .getAttribute('class');
      renderedGridClasses.should.contain(classes);
    });
  });
  describe('ModalFooter', () => {
    it('should render children', () => {
      var renderedModal = render(
        <Modal>
          <ModalFooter>
            <h6 className='sd-test-h-tag'>Hey You</h6>
          </ModalFooter>
        </Modal>
      ).findClass('sd-modal-footer');
      renderedModal.props.children.should.be.ok;
      let childComponentClass;
      React.Children.forEach(renderedModal.props.children, (child, i) => {
        if (i === 0) {
          childComponentClass = child.props.className;
        }
      });
      childComponentClass.should.equal('sd-test-h-tag');
    });
    it('inherits classes', () => {
      // generate crap classes like "system firewall protocol"
      let classes = _.times(_.random(3), faker.hacker.noun).join(' ');

      let renderedGridClasses = render(<ModalFooter className={classes} />)
        .findClass('sd-modal-footer')
        .getDOMNode()
        .getAttribute('class');
      renderedGridClasses.should.contain(classes);
    });
  });
});
