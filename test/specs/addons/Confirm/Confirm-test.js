import keyboardKey from 'keyboard-key'
import _ from 'lodash'
import React from 'react'

import Confirm from 'src/addons/Confirm/Confirm'
import Modal from 'src/modules/Modal/Modal'
import { assertBodyContains, domEvent, sandbox } from 'test/utils'
import * as common from 'test/specs/commonTests'

// ----------------------------------------
// Wrapper
// ----------------------------------------
let wrapper

// we need to unmount the modal after every test to remove it from the document
// wrap the render methods to update a global wrapper that is unmounted after each test
const wrapperMount = (...args) => (wrapper = mount(...args))

describe('Confirm', () => {
  beforeEach(() => {
    wrapper = undefined
    document.body.innerHTML = ''
  })

  afterEach(() => {
    if (wrapper && wrapper.unmount) wrapper.unmount()
  })

  common.isConformant(Confirm, { rendersPortal: true })

  common.implementsShorthandProp(Confirm, {
    autoGenerateKey: false,
    propKey: 'header',
    ShorthandComponent: Modal.Header,
    rendersPortal: true,
    mapValueToProps: (content) => ({ content }),
    requiredProps: { open: true },
  })
  common.implementsShorthandProp(Confirm, {
    autoGenerateKey: false,
    propKey: 'content',
    ShorthandComponent: Modal.Content,
    rendersPortal: true,
    mapValueToProps: (content) => ({ content }),
    requiredProps: { open: true },
  })

  describe('children', () => {
    it('renders a Modal', () => {
      shallow(<Confirm />)
        .type()
        .should.equal(Modal)
    })
  })

  describe('size', () => {
    it('has "small" size by default', () => {
      shallow(<Confirm />).should.have.prop('size', 'small')
    })

    _.forEach(['mini', 'tiny', 'small', 'large', 'fullscreen'], (size) => {
      it(`applies ${size} size`, () => {
        shallow(<Confirm size={size} />).should.have.prop('size', size)
      })
    })
  })

  describe('cancelButton', () => {
    it('is "Cancel" by default', () => {
      Confirm.defaultProps.cancelButton.should.equal('Cancel')
    })
    it('sets the cancel button text', () => {
      shallow(<Confirm cancelButton='foo' />)
        .find('Button')
        .first()
        .shallow()
        .childAt(0)
        .should.have.text('foo')
    })
  })

  describe('confirmButton', () => {
    it('is "OK" by default', () => {
      Confirm.defaultProps.confirmButton.should.equal('OK')
    })
    it('sets the confirm button text', () => {
      shallow(<Confirm confirmButton='foo' />)
        .find('Button[primary]')
        .shallow()
        .childAt(0)
        .should.have.text('foo')
    })
  })

  describe('onCancel', () => {
    let spy

    beforeEach(() => {
      spy = sandbox.spy()
      wrapperMount(<Confirm onCancel={spy} defaultOpen />)
    })

    it('omitted when not defined', () => {
      const click = () =>
        shallow(<Confirm />)
          .find('Button')
          .first()
          .simulate('click')

      expect(click).to.not.throw()
    })

    it('is called on Cancel button click', () => {
      shallow(<Confirm onCancel={spy} />)
        .find('Button')
        .first()
        .simulate('click')

      spy.should.have.been.calledOnce()
    })

    it('is passed to the Modal onClose prop', () => {
      const func = () => null

      shallow(<Confirm onCancel={func} />)
        .find('Modal')
        .prop('onClose', func)
    })

    it('is called on dimmer click', () => {
      domEvent.click('.ui.dimmer')
      spy.should.have.been.calledOnce()
    })

    it('is called on click outside of the modal', () => {
      domEvent.click(document.querySelector('.ui.modal').parentNode)
      spy.should.have.been.calledOnce()
    })

    it('is not called on click inside of the modal', () => {
      domEvent.click(document.querySelector('.ui.modal'))
      spy.should.not.have.been.calledOnce()
    })

    it('is not called on body click', () => {
      domEvent.click('body')
      spy.should.not.have.been.calledOnce()
    })

    it('is called when pressing escape', () => {
      domEvent.keyDown(document, { key: 'Escape' })
      spy.should.have.been.calledOnce()
    })

    it('is not called when pressing a key other than "Escape"', () => {
      _.each(keyboardKey, (val, key) => {
        // skip Escape key
        if (val === keyboardKey.Escape) return

        domEvent.keyDown(document, { key })
        spy.should.not.have.been.called(`onClose was called when pressing "${key}"`)
      })
    })

    it('is not called when the open prop changes to false', () => {
      wrapper.setProps({ open: false })
      spy.should.not.have.been.called()
    })
  })

  describe('onConfirm', () => {
    it('omitted when not defined', () => {
      const click = () =>
        shallow(<Confirm />)
          .find('Button[primary]')
          .simulate('click')

      expect(click).to.not.throw()
    })

    it('is called on OK button click', () => {
      const spy = sandbox.spy()
      shallow(<Confirm onConfirm={spy} />)
        .find('Button[primary]')
        .simulate('click')

      spy.should.have.been.calledOnce()
    })
  })

  describe('open', () => {
    it('is not open by default', () => {
      wrapperMount(<Confirm />)
      assertBodyContains('.ui.modal.open', false)
    })

    it('does not show the modal when false', () => {
      wrapperMount(<Confirm open={false} />)
      assertBodyContains('.ui.modal', false)
    })

    it('shows the modal when true', () => {
      wrapperMount(<Confirm open />)
      assertBodyContains('.ui.modal')
    })

    it('shows the modal on changing from false to true', () => {
      wrapperMount(<Confirm open={false} />)
      assertBodyContains('.ui.modal', false)

      wrapper.setProps({ open: true })
      assertBodyContains('.ui.modal')
    })

    it('hides the modal on changing from true to false', () => {
      wrapperMount(<Confirm open />)
      assertBodyContains('.ui.modal')

      wrapper.setProps({ open: false })
      assertBodyContains('.ui.modal', false)
    })
  })
})
