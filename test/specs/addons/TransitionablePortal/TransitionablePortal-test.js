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
      wrapperShallow(<TransitionablePortal {...requiredProps} />).should.have.descendants('Portal')
    })

    it('renders a Transition', () => {
      wrapperShallow(<TransitionablePortal {...requiredProps} />).should.have.descendants(
        'Transition',
      )
    })
  })

  describe('getDerivedStateFromProps', () => {
    it('passes `open` prop to `portalOpen` when defined', () => {
      wrapperMount(<TransitionablePortal {...requiredProps} />)

      wrapper.setProps({ open: true })
      wrapper.should.have.state('portalOpen', true)
      wrapper.setProps({ open: false })
      wrapper.should.have.state('portalOpen', false)
    })

    it('does not pass `open` prop to `portalOpen` when not defined', () => {
      wrapperMount(<TransitionablePortal {...requiredProps} />)

      wrapper.setProps({ transition: {} })
      wrapper.should.have.not.state('portalOpen')
    })
  })

  describe('onClose', () => {
    it('is called with (null, data) when Portal closes', (done) => {
      const onClose = sandbox.spy()

      wrapperMount(
        <TransitionablePortal
          {...requiredProps}
          onClose={onClose}
          transition={quickTransition}
          trigger={<button />}
        />,
      )

      wrapper.find('button').simulate('click')
      domEvent.click(document.body)

      assertWithTimeout(() => {
        onClose.should.have.been.calledOnce()
        onClose.should.have.been.calledWithMatch(null, { portalOpen: false })
      }, done)
    })

    it('is not called if portal already closed ', () => {
      const onClose = sandbox.spy()

      wrapperMount(
        <TransitionablePortal {...requiredProps} onClose={onClose} transition={quickTransition} />,
      )

      wrapper.setProps({ open: false })
      onClose.should.not.have.been.called()
    })

    it('changes `portalOpen` to false', () => {
      wrapperMount(
        <TransitionablePortal
          {...requiredProps}
          transition={quickTransition}
          trigger={<button />}
        />,
      )

      wrapper.find('button').simulate('click')
      domEvent.click(document.body)

      wrapper.should.have.state('portalOpen', false)
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
        onHide.should.have.been.calledOnce()
        onHide.should.have.been.calledWithMatch(null, {
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

      wrapperMount(<TransitionablePortal {...requiredProps} onOpen={onOpen} trigger={<button />} />)
      wrapper.find('button').simulate('click')

      onOpen.should.have.been.calledOnce()
      onOpen.should.have.been.calledWithMatch(null, { portalOpen: true })
    })

    it('changes `portalOpen` to true', () => {
      wrapperMount(<TransitionablePortal {...requiredProps} trigger={<button />} />)

      wrapper.find('button').simulate('click')
      wrapper.should.have.state('portalOpen', true)
    })
  })

  describe('open', () => {
    it('does not block update of state on Portal close', () => {
      wrapperMount(<TransitionablePortal {...requiredProps} open />)
      wrapper.should.have.state('portalOpen', true)
      wrapper.update()

      domEvent.click(document.body)
      wrapper.should.have.state('portalOpen', false)
    })
  })
})
