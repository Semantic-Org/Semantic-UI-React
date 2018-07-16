import React from 'react'

import TransitionablePortal from 'src/addons/TransitionablePortal/TransitionablePortal'
import * as common from 'test/specs/commonTests'
import { domEvent, assertWithTimeout } from 'test/utils'

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
      expect(
        wrapperShallow(<TransitionablePortal {...requiredProps} />).find('Portal'),
      ).toHaveLength(1)
    })

    it('renders a Transition', () => {
      expect(
        wrapperShallow(<TransitionablePortal {...requiredProps} />).find('Transition'),
      ).toHaveLength(1)
    })
  })

  describe('componentWillReceiveProps', () => {
    it('passes `open` prop to `portalOpen` when defined', () => {
      wrapperMount(<TransitionablePortal {...requiredProps} />)

      wrapper.setProps({ open: true })
      expect(wrapper.state('portalOpen')).toBe(true)
      wrapper.setProps({ open: false })
      expect(wrapper.state('portalOpen')).toBe(false)
    })

    it('does not pass `open` prop to `portalOpen` when not defined', () => {
      wrapperMount(<TransitionablePortal {...requiredProps} />)

      wrapper.setProps({ transition: {} })
      expect(wrapper.state('portalOpen')).toBeUndefined()
    })
  })

  describe('onClose', () => {
    it('is called with (null, data) when Portal closes', (done) => {
      const onClose = jest.fn()
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
        expect(onClose).toHaveBeenCalledTimes(1)
        expect(onClose).toHaveBeenCalledWith(null, expect.objectContaining({ portalOpen: false }))
      }, done)
    })

    it('changes `portalOpen` to false', () => {
      const trigger = <button />
      wrapperMount(
        <TransitionablePortal {...requiredProps} transition={quickTransition} trigger={trigger} />,
      )

      wrapper.find('button').simulate('click')
      domEvent.click(document.body)

      expect(wrapper.state('portalOpen')).toBe(false)
    })
  })

  describe('onHide', () => {
    it('is called with (null, data) when exiting transition finished', (done) => {
      const onHide = jest.fn()
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
        expect(onHide).toHaveBeenCalledTimes(1)
        expect(onHide).toHaveBeenCalledWith(
          null,
          expect.objectContaining({
            ...quickTransition,
            portalOpen: false,
            transitionVisible: false,
          }),
        )
      }, done)
    })
  })

  describe('onOpen', () => {
    it('is called with (null, data) when Portal opens', () => {
      const onOpen = jest.fn()
      const trigger = <button />

      wrapperMount(<TransitionablePortal {...requiredProps} onOpen={onOpen} trigger={trigger} />)
        .find('button')
        .simulate('click')

      expect(onOpen).toHaveBeenCalledTimes(1)
      expect(onOpen).toHaveBeenCalledWith(null, expect.objectContaining({ portalOpen: true }))
    })

    it('changes `portalOpen` to true', () => {
      const trigger = <button />
      wrapperMount(<TransitionablePortal {...requiredProps} trigger={trigger} />)

      wrapper.find('button').simulate('click')
      expect(wrapper.state('portalOpen')).toBe(true)
    })
  })

  describe('open', () => {
    it('does not block update of state on Portal close', () => {
      wrapperMount(<TransitionablePortal {...requiredProps} open />)
      expect(wrapper.state('portalOpen')).toBe(true)

      domEvent.click(document.body)
      expect(wrapper.state('portalOpen')).toBe(false)
    })
  })
})
