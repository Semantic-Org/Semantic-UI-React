import faker from 'faker'
import React from 'react'

import Message from 'src/collections/Message/Message'
import * as common from 'test/specs/commonTests'

describe('Message', () => {
  common.isConformant(Message)
  common.hasUIClassName(Message)
  common.rendersChildren(Message)

  describe('with header', () => {
    it('has a header', () => {
      const header = faker.hacker.phrase()
      const message = shallow(<Message header={header} />)

      message.should.have.descendants('.sd-message-header')
      message.should.contain.text(header)
    })
  })
  describe('without header', () => {
    it('has no header', () => {
      shallow(<Message />)
        .should.not.have.descendants('.sd-message-header')
    })
  })
  describe('with icon', () => {
    it('adds an Icon', () => {
      shallow(<Message icon='inbox' />)
        .should.have.descendants('Icon')
    })
    it('has a "content" wrapper', () => {
      shallow(<Message icon='inbox' />)
        .should.have.descendants('.sd-message-content')
    })
  })
  describe('without icon', () => {
    it('has no icon', () => {
      shallow(<Message />)
        .should.not.have.descendants('Icon')
    })
    it('has no "content" wrapper', () => {
      shallow(<Message />)
        .should.not.have.descendants('.sd-message-content')
    })
  })
  describe('dismissable', () => {
    it('adds a close icon', () => {
      shallow(<Message dismissable />)
        .should.have.descendants('.sd-message-close-icon')
    })

    it('calls transition "fade" when dismissed', () => {
      const wrapper = mount(<Message dismissable />)
      const instance = wrapper.instance()

      instance.messageElm.transition
        .should.not.have.been.called()


      wrapper
        .find('.sd-message-close-icon')
        .simulate('click')

      instance.messageElm.transition
        .should.have.been.calledWith('fade')
    })
  })
  describe('not dismissable', () => {
    it('has no close icon', () => {
      shallow(<Message />)
        .should.not.have.descendants('.sd-message-close-icon')
    })
  })
})
