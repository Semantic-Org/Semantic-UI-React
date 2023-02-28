import React from 'react'

import TransitionablePortal from 'src/addons/TransitionablePortal/TransitionablePortal'
import * as common from 'test/specs/commonTests'
import { domEvent, sandbox, assertWithTimeout } from 'test/utils'

const quickTransition = { duration: 0 }
const requiredProps = {
  children: <div id='children' />,
}

describe('TransitionablePortal', () => {
  common.isConformant(TransitionablePortal, {
    rendersPortal: true,
    requiredProps,
  })

  describe('children', () => {
    it('renders a Transition', () => {
      const wrapper = mount(<TransitionablePortal {...requiredProps} open />)

      wrapper.should.have.descendants('.transition')
    })
  })

  describe('onClose', () => {
    it('is called with (null, data) on a click outside', (done) => {
      const onClose = sandbox.spy()
      const wrapper = mount(
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

        wrapper.unmount()
      }, done)
    })

    it('hides contents on a click outside', () => {
      const wrapper = mount(<TransitionablePortal {...requiredProps} trigger={<button />} />)

      wrapper.find('button').simulate('click')
      wrapper.should.have.descendants('.in#children')

      domEvent.click(document.body)
      wrapper.update()
      wrapper.should.have.descendants('.out#children')
    })
  })

  describe('onHide', () => {
    it('is called with (null, data) when exiting transition finished', (done) => {
      const onHide = sandbox.spy()
      const wrapper = mount(
        <TransitionablePortal
          {...requiredProps}
          onHide={onHide}
          open
          transition={quickTransition}
          trigger={<button />}
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

        wrapper.unmount()
      }, done)
    })
  })

  describe('onOpen', () => {
    it('is called with (null, data) when opens', () => {
      const onOpen = sandbox.spy()
      const wrapper = mount(
        <TransitionablePortal {...requiredProps} onOpen={onOpen} trigger={<button />} />,
      )

      wrapper.find('button').simulate('click')
      onOpen.should.have.been.calledOnce()
      onOpen.should.have.been.calledWithMatch(null, { portalOpen: true })
    })

    it('renders contents', () => {
      const wrapper = mount(<TransitionablePortal {...requiredProps} trigger={<button />} />)

      wrapper.find('button').simulate('click')
      wrapper.should.have.descendants('.in#children')
    })
  })

  describe('open', () => {
    it('blocks update of state on a portal close', () => {
      const wrapper = mount(<TransitionablePortal {...requiredProps} open />)
      wrapper.find('#children').should.have.className('in')

      domEvent.click(document.body)
      wrapper.find('#children').should.have.className('in')
    })

    it('passes `open` prop to Transition when defined', () => {
      const wrapper = mount(<TransitionablePortal {...requiredProps} />)

      wrapper.setProps({ open: true })
      wrapper.find('#children').should.have.className('in')

      wrapper.setProps({ open: false })
      wrapper.find('#children').should.have.className('out')
    })

    it('does not pass `open` prop to Transition when not defined', () => {
      const wrapper = mount(<TransitionablePortal {...requiredProps} />)
      wrapper.should.have.not.descendants('#children')

      wrapper.setProps({ transition: {} })
      wrapper.should.have.not.descendants('#children')
    })
  })
})
