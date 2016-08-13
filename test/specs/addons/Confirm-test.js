import React from 'react'

import { Confirm } from 'src/addons'
import { Modal } from 'src/modules'
import { sandbox } from 'test/utils'
import * as common from 'test/specs/commonTests'

describe('Confirm', () => {
  common.isConformant(Confirm)

  it('renders a small Modal', () => {
    const wrapper = shallow(<Confirm />)
    wrapper
      .type()
      .should.equal(Modal)
    wrapper
      .should.have.prop('size', 'small')
  })

  describe('cancelButton', () => {
    it('is "Cancel" by default', () => {
      Confirm.defaultProps.cancelButton
        .should.equal('Cancel')
    })
    it('sets the cancel button text', () => {
      shallow(<Confirm cancelButton='foo' />)
        .find('Button')
        .first()
        .shallow()
        .should.have.text('foo')
    })
  })

  describe('confirmButton', () => {
    it('is "OK" by default', () => {
      Confirm.defaultProps.confirmButton
        .should.equal('OK')
    })
    it('sets the confirm button text', () => {
      shallow(<Confirm confirmButton='foo' />)
        .find('Button.primary')
        .shallow()
        .should.have.text('foo')
    })
  })

  describe('header', () => {
    it('is not present by default', () => {
      shallow(<Confirm />)
        .should.not.have.descendants('ModalHeader')
    })
    it('sets the header text', () => {
      const wrapper = shallow(<Confirm header='foo' />)
      wrapper
        .should.have.descendants('ModalHeader')
      wrapper
        .find('ModalHeader')
        .shallow()
        .should.have.text('foo')
    })
  })

  describe('content', () => {
    it('is "Are you sure?" by default', () => {
      const wrapper = shallow(<Confirm />)
      wrapper
        .should.have.descendants('ModalContent')
      wrapper
        .find('ModalContent')
        .shallow()
        .should.have.text('Are you sure?')
    })
    it('sets the content text', () => {
      const wrapper = shallow(<Confirm content='foo' />)
      wrapper
        .should.have.descendants('ModalContent')
      wrapper
        .find('ModalContent')
        .shallow()
        .should.have.text('foo')
    })
  })

  describe('onCancel', () => {
    it('is called on Cancel button click', () => {
      const spy = sandbox.spy()
      shallow(<Confirm onCancel={spy} />)
        .find('Button')
        .first()
        .simulate('click')

      spy.should.have.been.calledOnce()
    })

    it('is passed to the Modal onHide prop', () => {
      const func = () => null

      shallow(<Confirm onCancel={func} />)
        .find('Modal')
        .prop('onHide', func)
    })
  })

  describe('onConfirm', () => {
    it('is called on OK button click', () => {
      const spy = sandbox.spy()
      shallow(<Confirm onConfirm={spy} />)
        .find('Button.primary')
        .simulate('click')

      spy.should.have.been.calledOnce()
    })
  })
})
