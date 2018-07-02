import React from 'react'

import TransitionablePortal from 'src/addons/TransitionablePortal/TransitionablePortal'
import * as common from 'test/specs/commonTests'
import { domEvent, sandbox, assertWithTimeout } from 'test/utils'

// ----------------------------------------
// Wrapper
// ----------------------------------------
let wrapper

// we need to unmount the modal after every test to remove it from the document
// wrap the render methods to update a global wrapper that is unmounted after each test
const wrapperMount = (...args) => (wrapper = mount(...args))
const wrapperShallow = (...args) => (wrapper = shallow(...args))

const quickTransition = { duration: 0 }
const requiredProps = {
  children: <div />,
}

describe('TransitionablePortal', () => {
  beforeEach(() => {
    wrapper = undefined
    document.body.innerHTML = ''
  })

  afterEach(() => {
    if (wrapper && wrapper.unmount) wrapper.unmount()
  })

  common.isConformant(TransitionablePortal, { requiredProps })

  describe('children', () => {
    it('renders a Portal', () => {
      expect(wrapperShallow(<TransitionablePortal {...requiredProps} />)).have.descendants('Portal')
    })

    it('renders a Transition', () => {
      expect(wrapperShallow(<TransitionablePortal {...requiredProps} />)).have.descendants(
        'Transition',
      )
    })
  })

  describe('componentWillReceiveProps', () => {
    it('passes `open` prop to `portalOpen` when defined', () => {
      wrapperMount(<TransitionablePortal {...requiredProps} />)

      wrapper.setProps({ open: true })
      expect(wrapper).have.state('portalOpen', true)
      wrapper.setProps({ open: false })
      expect(wrapper).have.state('portalOpen', false)
    })

    it('does not pass `open` prop to `portalOpen` when not defined', () => {
      wrapperMount(<TransitionablePortal {...requiredProps} />)

      wrapper.setProps({ transition: {} })
      expect(wrapper).have.not.state('portalOpen')
    })
  })

  describe('onClose', () => {
    it('is called with (null, data) when Portal closes', (done) => {
      const onClose = sandbox.spy()
      const trigger = <button />
      wrapperMount(
        <TransitionablePortal
          {...requiredProps}
          onClose={onClose}
          transition={quickTransition}
          trigger={trigger}
        />,
      )

      wrapper.find('button').simulate('click')
      domEvent.click(document.body)

      assertWithTimeout(() => {
        expect(onClose).have.been.calledOnce()
        expect(onClose).have.been.calledWithMatch(null, { portalOpen: false })
      }, done)
    })

    it('changes `portalOpen` to false', () => {
      const trigger = <button />
      wrapperMount(
        <TransitionablePortal {...requiredProps} transition={quickTransition} trigger={trigger} />,
      )

      wrapper.find('button').simulate('click')
      domEvent.click(document.body)

      expect(wrapper).have.state('portalOpen', false)
    })
  })

  describe('onHide', () => {
    it('is called with (null, data) when exiting transition finished', (done) => {
      const onHide = sandbox.spy()
      const trigger = <button />
      wrapperMount(
        <TransitionablePortal
          {...requiredProps}
          onHide={onHide}
          open
          transition={quickTransition}
          trigger={trigger}
        />,
      )

      wrapper.setProps({ open: false })
      assertWithTimeout(() => {
        expect(onHide).have.been.calledOnce()
        expect(onHide).have.been.calledWithMatch(null, {
          ...quickTransition,
          portalOpen: false,
          transitionVisible: false,
        })
      }, done)
    })
  })

  describe('onOpen', () => {
    it('is called with (null, data) when Portal opens', () => {
      const onOpen = sandbox.spy()
      const trigger = <button />

      wrapperMount(<TransitionablePortal {...requiredProps} onOpen={onOpen} trigger={trigger} />)
        .find('button')
        .simulate('click')

      expect(onOpen).have.been.calledOnce()
      expect(onOpen).have.been.calledWithMatch(null, { portalOpen: true })
    })

    it('changes `portalOpen` to true', () => {
      const trigger = <button />
      wrapperMount(<TransitionablePortal {...requiredProps} trigger={trigger} />)

      wrapper.find('button').simulate('click', event)
      expect(wrapper).have.state('portalOpen', true)
    })
  })

  describe('open', () => {
    it('does not block update of state on Portal close', () => {
      wrapperMount(<TransitionablePortal {...requiredProps} open />)
      expect(wrapper).have.state('portalOpen', true)

      domEvent.click(document.body)
      expect(wrapper).have.state('portalOpen', false)
    })
  })
})
