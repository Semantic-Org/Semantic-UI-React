import React from 'react'

import ModalDimmer from 'src/modules/Modal/ModalDimmer'
import * as common from 'test/specs/commonTests'

describe('ModalDimmer', () => {
  common.isConformant(ModalDimmer)
  common.hasUIClassName(ModalDimmer)
  common.rendersChildren(ModalDimmer)

  common.propKeyOnlyToClassName(ModalDimmer, 'inverted')

  describe('children', () => {
    it('adds classes to "MountNode"', () => {
      const wrapper = shallow(<ModalDimmer blurring />)

      wrapper.find('MountNode').should.have.className('dimmable')
      wrapper.find('MountNode').should.have.className('dimmable')
    })
  })

  describe('blurring', () => {
    it('adds nothing "MountNode" by default', () => {
      shallow(<ModalDimmer />)
        .find('MountNode')
        .should.have.not.className('blurring')
    })

    it('adds a class to "MountNode" when is "true"', () => {
      shallow(<ModalDimmer blurring />)
        .find('MountNode')
        .should.have.className('blurring')
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

  describe('mountNode', () => {
    it('is passed to "MountNode" as "node"', () => {
      const mountNode = document.createElement('div')

      shallow(<ModalDimmer mountNode={mountNode} />)
        .find('MountNode')
        .should.have.prop('node', mountNode)
    })
  })

  describe('scrolling', () => {
    it('adds nothing "MountNode" by default', () => {
      shallow(<ModalDimmer />)
        .find('MountNode')
        .should.have.not.className('scrolling')
    })

    it('adds "className" to "MountNode"', () => {
      shallow(<ModalDimmer scrolling />)
        .find('MountNode')
        .should.have.className('scrolling')
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
