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

  common.isConformant(Confirm)

  common.implementsShorthandProp(Confirm, {
    propKey: 'header',
    ShorthandComponent: Modal.Header,
    mapValueToProps: content => ({ content }),
  })
  common.implementsShorthandProp(Confirm, {
    propKey: 'content',
    ShorthandComponent: Modal.Content,
    mapValueToProps: content => ({ content }),
  })

  describe('children', () => {
    it('renders a Modal', () => {
      expect(shallow(<Confirm />).type()).toBe(Modal)
    })
  })

  describe('size', () => {
    it('has "small" size by default', () => {
      expect(shallow(<Confirm />)).have.prop('size', 'small')
    })

    _.forEach(['fullscreen', 'large', 'mini', 'small', 'tiny'], (size) => {
      it(`applies ${size} size`, () => {
        expect(shallow(<Confirm size={size} />)).have.prop('size', size)
      })
    })
  })

  describe('cancelButton', () => {
    it('is "Cancel" by default', () => {
      expect(Confirm.defaultProps.cancelButton).toBe('Cancel')
    })
    it('sets the cancel button text', () => {
      expect(
        shallow(<Confirm cancelButton='foo' />)
          .find('Button')
          .first()
          .shallow(),
      ).have.text('foo')
    })
  })

  describe('confirmButton', () => {
    it('is "OK" by default', () => {
      expect(Confirm.defaultProps.confirmButton).toBe('OK')
    })
    it('sets the confirm button text', () => {
      expect(
        shallow(<Confirm confirmButton='foo' />)
          .find('Button[primary]')
          .shallow(),
      ).have.text('foo')
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

      expect(click).not.toThrowError()
    })

    it('is called on Cancel button click', () => {
      shallow(<Confirm onCancel={spy} />)
        .find('Button')
        .first()
        .simulate('click')

      expect(spy).have.been.calledOnce()
    })

    it('is passed to the Modal onClose prop', () => {
      const func = () => null

      shallow(<Confirm onCancel={func} />)
        .find('Modal')
        .prop('onClose', func)
    })

    it('is called on dimmer click', () => {
      domEvent.click('.ui.dimmer')
      expect(spy).have.been.calledOnce()
    })

    it('is called on click outside of the modal', () => {
      domEvent.click(document.querySelector('.ui.modal').parentNode)
      expect(spy).have.been.calledOnce()
    })

    it('is not called on click inside of the modal', () => {
      domEvent.click(document.querySelector('.ui.modal'))
      expect(spy).not.have.been.calledOnce()
    })

    it('is not called on body click', () => {
      domEvent.click('body')
      expect(spy).not.have.been.calledOnce()
    })

    it('is called when pressing escape', () => {
      domEvent.keyDown(document, { key: 'Escape' })
      expect(spy).have.been.calledOnce()
    })

    it('is not called when pressing a key other than "Escape"', () => {
      _.each(keyboardKey, (val, key) => {
        // skip Escape key
        if (val === keyboardKey.Escape) return

        domEvent.keyDown(document, { key })
        expect(spy).not.have.been.called(`onClose was called when pressing "${key}"`)
      })
    })

    it('is not called when the open prop changes to false', () => {
      wrapper.setProps({ open: false })
      expect(spy).not.have.been.called()
    })
  })

  describe('onConfirm', () => {
    it('omitted when not defined', () => {
      const click = () =>
        shallow(<Confirm />)
          .find('Button[primary]')
          .simulate('click')

      expect(click).not.toThrowError()
    })

    it('is called on OK button click', () => {
      const spy = sandbox.spy()
      shallow(<Confirm onConfirm={spy} />)
        .find('Button[primary]')
        .simulate('click')

      expect(spy).have.been.calledOnce()
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
