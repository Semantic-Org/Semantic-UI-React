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
      const message = mount(<Message header={header} />)

      message
        .should.have.descendants('Header')
        .and.contain.text(header)
    })
  })
  describe('without header', () => {
    it('has no header', () => {
      shallow(<Message />)
        .should.not.have.descendants('Header')
    })
  })
  describe('with icon', () => {
    it('adds an Icon', () => {
      shallow(<Message icon='inbox' />)
        .should.have.descendants('Icon')
    })
    it('has a "content" wrapper', () => {
      shallow(<Message icon='inbox' />)
        .should.have.descendants('.content')
    })
  })
  describe('without icon', () => {
    it('has no icon', () => {
      shallow(<Message />)
        .should.not.have.descendants('Icon')
    })
    it('has no "content" wrapper', () => {
      shallow(<Message />)
        .should.not.have.descendants('.content')
    })
  })
  describe('dismissable', () => {
    it('adds a close icon', () => {
      mount(<Message dismissable />)
        .should.have.descendants('.close.icon')
    })

    it('calls transition "fade" when dismissed', () => {
      const wrapper = mount(<Message dismissable />)
      const instance = wrapper.instance()

      instance.messageElm.transition
        .should.not.have.been.called()

      wrapper
        .find('.close.icon')
        .simulate('click')

      instance.messageElm.transition
        .should.have.been.calledWith('fade')
    })
  })
  describe('not dismissable', () => {
    it('has no close icon', () => {
      shallow(<Message />)
        .should.not.have.descendants('.close.icon')
    })
  })
})
