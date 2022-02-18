import React from 'react'

import ModalDimmer from 'src/modules/Modal/ModalDimmer'
import * as common from 'test/specs/commonTests'

describe('ModalDimmer', () => {
  common.isConformant(ModalDimmer)
  common.forwardsRef(ModalDimmer)
  common.hasUIClassName(ModalDimmer)
  common.rendersChildren(ModalDimmer)

  common.propKeyOnlyToClassName(ModalDimmer, 'inverted')

  it('has required classes', () => {
    const wrapper = mount(<ModalDimmer mountNode={null} />)

    expect(wrapper).to.have.className('page')
    expect(wrapper).to.have.className('modals')
    expect(wrapper).to.have.className('dimmer')
    expect(wrapper).to.have.className('transition')
    expect(wrapper).to.have.className('visible')
    expect(wrapper).to.have.className('active')
  })

  describe('children', () => {
    it('adds classes to "mountNode"', () => {
      const element = document.createElement('div')
      mount(<ModalDimmer mountNode={element} />)

      element.className.should.contain('dimmable')
      element.className.should.contain('dimmed')
    })
  })

  describe('blurring', () => {
    it('adds nothing "mountNode" by default', () => {
      const element = document.createElement('div')
      mount(<ModalDimmer mountNode={element} />)

      element.className.should.not.contain('blurring')
    })

    it('adds a class to "MountNode" when is "true"', () => {
      const element = document.createElement('div')
      mount(<ModalDimmer blurring mountNode={element} />)

      element.className.should.contain('blurring')
    })
  })

  describe('centered', () => {
    it('adds "top aligned" to "className" by default', () => {
      shallow(<ModalDimmer />)
        .find('.dimmer')
        .should.have.className('top aligned')
    })

    it('adds nothing to "className" when is "true"', () => {
      shallow(<ModalDimmer centered />)
        .find('.dimmer')
        .should.have.not.className('top aligned')
    })
  })

  describe('scrolling', () => {
    it('adds nothing "MountNode" by default', () => {
      const element = document.createElement('div')
      mount(<ModalDimmer mountNode={element} />)

      element.className.should.not.contain('scrolling')
    })

    it('adds "className" to "MountNode"', () => {
      const element = document.createElement('div')
      mount(<ModalDimmer mountNode={element} scrolling />)

      element.className.should.contain('scrolling')
    })
  })

  describe('style', () => {
    it('adds "display: flex" with "important"', () => {
      const wrapper = mount(<ModalDimmer />)
      const style = wrapper.getDOMNode().style

      style.getPropertyValue('display').should.equal('flex')
      style.getPropertyPriority('display').should.equal('important')
    })
  })
})
