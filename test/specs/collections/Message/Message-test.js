import faker from 'faker';
import React from 'react';
const Simulate = React.addons.TestUtils.Simulate;
import {Message} from 'stardust';

describe('Message', () => {
  describe('with header', () => {
    it('has a header', () => {
      let header = faker.hacker.phrase();
      let message = render(<Message header={header} />);

      message.findClass('sd-message-header');
      message.findText(header);
    });
  });
  describe('without header', () => {
    it('has no header', () => {
      render(<Message />).scryClass('sd-message-header')
        .should.have.a.lengthOf(0);
    });
  });
  describe('with icon', () => {
    it('has an icon', () => {
      render(<Message icon='inbox' />).findClass('sd-message-icon');
    });
    it('has a "content" wrapper', () => {
      render(<Message icon='inbox' />).findClass('sd-message-content');
    });
  });
  describe('without icon', () => {
    it('has no icon', () => {
      render(<Message />).scryClass('sd-message-icon')
        .should.have.a.lengthOf(0);
    });
    it('has no "content" wrapper', () => {
      render(<Message />).scryClass('sd-message-content')
        .should.have.a.lengthOf(0);
    });
  });
  describe('dismissable', () => {
    it('adds a close icon', () => {
      render(<Message dismissable />).findClass('sd-message-close-icon');
    });

    it('calls transition "fade" when dismissed', () => {
      let tree = render(<Message dismissable />);
      let message = tree.first();
      let closeIcon = tree.findClass('sd-message-close-icon');

      message.messageElm.transition.called.should.equal(false);
      Simulate.click(closeIcon);
      message.messageElm.transition.calledWith('fade').should.equal(true);
    });
  });
  describe('not dismissable', () => {
    it('has no close icon', () => {
      render(<Message />).scryClass('sd-message-close-icon')
        .should.have.a.lengthOf(0);
    });
  });
});
