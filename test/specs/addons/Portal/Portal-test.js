import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import * as common from 'test/specs/commonTests'
import { domEvent } from 'test/utils'
import Portal from 'src/addons/Portal/Portal'
import PortalInner from 'src/addons/Portal/PortalInner'

let wrapper

const createHandlingComponent = eventName =>
  class HandlingComponent extends Component {
    static propTypes = {
      handler: PropTypes.func,
    }

    handleEvent = e => this.props.handler(e, this.props)

    render() {
      const buttonProps = { [eventName]: this.handleEvent }

      return <button {...buttonProps} />
    }
  }

const wrapperMount = (node, opts) => {
  wrapper = mount(node, opts)
  return wrapper
}

describe('Portal', () => {
  afterEach(() => {
    if (wrapper && wrapper.unmount) wrapper.unmount()
  })

  common.hasSubcomponents(Portal, [PortalInner])
  common.hasValidTypings(Portal)

  it('propTypes.children should be required', () => {
    expect(Portal.propTypes.children).toBe(PropTypes.node.isRequired)
  })

  it('does not call this.setState() if portal is unmounted', () => {
    wrapperMount(
      <Portal open>
        <p />
      </Portal>,
    )

    const setState = jest.fn(wrapper, 'setState')
    wrapper.unmount()
    expect(setState).not.toHaveBeenCalled()
  })

  describe('open', () => {
    it('opens the portal when toggled from false to true', () => {
      wrapperMount(
        <Portal open={false}>
          <p />
        </Portal>,
      )
      expect(wrapper.find(PortalInner)).toHaveLength(0)

      // Enzyme docs say it merges previous props but without children, react complains
      wrapper.setProps({ open: true, children: <p /> })
      expect(wrapper.find(PortalInner)).toHaveLength(1)
    })

    it('closes the portal when toggled from true to false ', () => {
      wrapperMount(
        <Portal open>
          <p />
        </Portal>,
      )
      expect(wrapper.find(PortalInner)).toHaveLength(1)

      wrapper.setProps({ open: false, children: <p /> })
      expect(wrapper.find(PortalInner)).toHaveLength(0)
    })
  })

  describe('onMount', () => {
    it('called when portal opens', () => {
      const props = { open: false, onMount: jest.fn() }
      wrapperMount(
        <Portal {...props}>
          <p />
        </Portal>,
      )

      wrapper.setProps({ open: true, children: <p /> })
      expect(props.onMount).toHaveBeenCalledTimes(1)
    })

    it('is not called when portal receives props', () => {
      const props = { open: false, onMount: jest.fn() }
      wrapperMount(
        <Portal {...props}>
          <p />
        </Portal>,
      )

      wrapper.setProps({ open: true, children: <p />, className: 'old' })
      expect(props.onMount).toHaveBeenCalledTimes(1)

      wrapper.setProps({ open: true, children: <p />, className: 'new' })
      expect(props.onMount).toHaveBeenCalledTimes(1)
    })
  })

  describe('onUnmount', () => {
    it('is called when portal closes', () => {
      const props = { open: true, onUnmount: jest.fn() }
      wrapperMount(
        <Portal {...props}>
          <p />
        </Portal>,
      )

      wrapper.setProps({ open: false, children: <p /> })
      expect(props.onUnmount).toHaveBeenCalledTimes(1)
    })

    it('is not called when portal receives props', () => {
      const props = { open: true, onUnmount: jest.fn() }
      wrapperMount(
        <Portal {...props}>
          <p />
        </Portal>,
      )

      wrapper.setProps({ open: false, children: <p />, className: 'old' })
      expect(props.onUnmount).toHaveBeenCalledTimes(1)

      wrapper.setProps({ open: false, children: <p />, className: 'new' })
      expect(props.onUnmount).toHaveBeenCalledTimes(1)
    })

    it('is called only once when portal closes and then is unmounted', () => {
      const onUnmount = jest.fn()
      wrapperMount(
        <Portal onUnmount={onUnmount} open>
          <p />
        </Portal>,
      )

      wrapper.setProps({ open: false, children: <p /> })
      wrapper.unmount()
      expect(onUnmount).toHaveBeenCalledTimes(1)
    })

    it('is called only once when directly unmounting', () => {
      const onUnmount = jest.fn()
      wrapperMount(
        <Portal onUnmount={onUnmount} open>
          <p />
        </Portal>,
      )

      wrapper.unmount()
      expect(onUnmount).toHaveBeenCalledTimes(1)
    })
  })

  describe('portalNode', () => {
    it('maintains ref to DOM node with host element', () => {
      wrapperMount(
        <Portal open>
          <p />
        </Portal>,
      )
      expect(wrapper.instance().portalNode.tagName).toBe('P')
    })

    it('maintains ref to DOM node with React component', () => {
      const EmptyComponent = () => <p />

      wrapperMount(
        <Portal open>
          <EmptyComponent />
        </Portal>,
      )
      expect(wrapper.instance().portalNode.tagName).toBe('P')
    })
  })

  describe('trigger', () => {
    it('renders null when not set', () => {
      wrapperMount(
        <Portal>
          <p />
        </Portal>,
      )

      expect(wrapper.html()).toBe(null)
    })

    it('renders the trigger when set', () => {
      const text = 'open by click on me'
      const trigger = <button>{text}</button>
      wrapperMount(
        <Portal trigger={trigger}>
          <p />
        </Portal>,
      )

      expect(wrapper.text()).toBe(text)
    })

    _.forEach(['onBlur', 'onClick', 'onFocus', 'onMouseLeave', 'onMouseEnter'], (handlerName) => {
      it(`handles ${handlerName} on trigger and passes all arguments`, () => {
        const event = { target: null }
        const handler = jest.fn()
        const Trigger = createHandlingComponent(handlerName)
        const trigger = <Trigger color='blue' handler={handler} />

        wrapperMount(
          <Portal trigger={trigger}>
            <p />
          </Portal>,
        )
          .find('button')
          .simulate(_.toLower(handlerName.substring(2)), event)

        expect(handler).toHaveBeenCalledTimes(1)
        expect(handler).toHaveBeenCalledWith(
          expect.objectContaining(event),
          expect.objectContaining({
            handler,
            color: 'blue',
          }),
        )
      })
    })
  })

  describe('mountNode', () => {
    it('passed to PortalInner', () => {
      const mountNode = document.createElement('div')
      wrapperMount(
        <Portal mountNode={mountNode} open>
          <p />
        </Portal>,
      )

      expect(wrapper.find(PortalInner).prop('mountNode')).toBe(mountNode)
    })
  })

  describe('openOnTriggerClick', () => {
    it('defaults to true', () => {
      expect(Portal.defaultProps.openOnTriggerClick).toBe(true)
    })

    it('does not open the portal on trigger click when false', () => {
      const spy = jest.fn()
      const trigger = <button onClick={spy}>button</button>

      wrapperMount(
        <Portal trigger={trigger} openOnTriggerClick={false}>
          <p />
        </Portal>,
      )
      expect(wrapper.find(PortalInner)).toHaveLength(0)

      wrapper.find('button').simulate('click')
      expect(wrapper.find(PortalInner)).toHaveLength(0)
      expect(spy).toHaveBeenCalledTimes(1)
    })

    it('opens the portal on trigger click when true', () => {
      const spy = jest.fn()
      const trigger = <button onClick={spy}>button</button>

      wrapperMount(
        <Portal trigger={trigger} openOnTriggerClick>
          <p />
        </Portal>,
      )
      expect(wrapper.find(PortalInner)).toHaveLength(0)

      wrapper.find('button').simulate('click')
      expect(wrapper.find(PortalInner)).toHaveLength(1)
      expect(spy).toHaveBeenCalledTimes(1)
    })
  })

  describe('closeOnTriggerClick', () => {
    it('does not close the portal on click', () => {
      wrapperMount(
        <Portal trigger={<button />} defaultOpen>
          <p />
        </Portal>,
      )
      expect(wrapper.find(PortalInner)).toHaveLength(1)

      wrapper.find('button').simulate('click')
      expect(wrapper.find(PortalInner)).toHaveLength(1)
    })

    it('closes the portal on click when set', () => {
      wrapperMount(
        <Portal trigger={<button />} defaultOpen closeOnTriggerClick>
          <p />
        </Portal>,
      )
      expect(wrapper.find(PortalInner)).toHaveLength(1)

      wrapper.find('button').simulate('click')
      expect(wrapper.find(PortalInner)).toHaveLength(0)
    })
  })

  describe('openOnTriggerMouseEnter', () => {
    it('does not open the portal on mouseenter when not set', () => {
      wrapperMount(
        <Portal trigger={<button />}>
          <p />
        </Portal>,
      )
      expect(wrapper.find(PortalInner)).toHaveLength(0)

      wrapper.find('button').simulate('mouseenter')
      expect(wrapper.find(PortalInner)).toHaveLength(0)
    })

    it('opens the portal on mouseenter when set', (done) => {
      wrapperMount(
        <Portal trigger={<button />} openOnTriggerMouseEnter mouseEnterDelay={0}>
          <p />
        </Portal>,
      )
      expect(wrapper.find(PortalInner)).toHaveLength(0)

      wrapper.find('button').simulate('mouseenter')
      setTimeout(() => {
        wrapper.update()
        expect(wrapper.find(PortalInner)).toHaveLength(1)

        done()
      }, 1)
    })
  })

  describe('closeOnTriggerMouseLeave', () => {
    it('does not close the portal on mouseleave when not set', (done) => {
      wrapperMount(
        <Portal trigger={<button />} defaultOpen mouseLeaveDelay={0}>
          <p />
        </Portal>,
      )
      expect(wrapper.find(PortalInner)).toHaveLength(1)

      wrapper.find('button').simulate('mouseleave')
      setTimeout(() => {
        wrapper.update()
        expect(wrapper.find(PortalInner)).toHaveLength(1)

        done()
      }, 1)
    })

    it('closes the portal on mouseleave when set', (done) => {
      wrapperMount(
        <Portal trigger={<button />} defaultOpen closeOnTriggerMouseLeave mouseLeaveDelay={0}>
          <p />
        </Portal>,
      )
      expect(wrapper.find(PortalInner)).toHaveLength(1)

      wrapper.find('button').simulate('mouseleave')
      setTimeout(() => {
        wrapper.update()
        expect(wrapper.find(PortalInner)).toHaveLength(0)

        done()
      }, 1)
    })
  })

  describe('closeOnPortalMouseLeave', () => {
    it('does not close the portal on mouseleave of portal when not set', (done) => {
      wrapperMount(
        <Portal trigger={<button />} defaultOpen mouseLeaveDelay={0}>
          <p id='inner' />
        </Portal>,
      )
      expect(wrapper.find(PortalInner)).toHaveLength(1)

      domEvent.mouseLeave('#inner')
      setTimeout(() => {
        wrapper.update()
        expect(wrapper.find(PortalInner)).toHaveLength(1)

        done()
      }, 1)
    })

    it('closes the portal on mouseleave of portal when set', (done) => {
      wrapperMount(
        <Portal closeOnPortalMouseLeave defaultOpen mouseLeaveDelay={0} trigger={<button />}>
          <p id='inner' />
        </Portal>,
      )
      expect(wrapper.find(PortalInner)).toHaveLength(1)

      domEvent.mouseLeave('#inner')
      setTimeout(() => {
        wrapper.update()
        expect(wrapper.find(PortalInner)).toHaveLength(0)

        done()
      }, 1)
    })
  })

  describe('closeOnTriggerMouseLeave + closeOnPortalMouseLeave', () => {
    it('closes the portal on trigger mouseleave even when portal receives mouseenter within limit', (done) => {
      const delay = 10
      wrapperMount(
        <Portal trigger={<button />} defaultOpen closeOnTriggerMouseLeave mouseLeaveDelay={delay}>
          <p id='inner' />
        </Portal>,
      )
      expect(wrapper.find(PortalInner)).toHaveLength(1)

      wrapper.find('button').simulate('mouseleave')

      // Fire a mouseEnter on the portal within the time limit
      setTimeout(() => {
        domEvent.mouseEnter('#inner')
      }, delay - 1)

      // The portal should close because closeOnPortalMouseLeave not set
      setTimeout(() => {
        wrapper.update()
        expect(wrapper.find(PortalInner)).toHaveLength(0)

        done()
      }, delay + 1)
    })

    it('does not close the portal on trigger mouseleave when portal receives mouseenter within limit', (done) => {
      const delay = 10
      wrapperMount(
        <Portal
          trigger={<button />}
          defaultOpen
          closeOnTriggerMouseLeave
          closeOnPortalMouseLeave
          mouseLeaveDelay={delay}
        >
          <p id='inner' />
        </Portal>,
      )
      expect(wrapper.find(PortalInner)).toHaveLength(1)

      wrapper.find('button').simulate('mouseleave')

      // Fire a mouseEnter on the portal within the time limit
      setTimeout(() => {
        domEvent.mouseEnter('#inner')
      }, delay - 1)

      // The portal should not have closed
      setTimeout(() => {
        wrapper.update()
        expect(wrapper.find(PortalInner)).toHaveLength(1)

        done()
      }, delay + 1)
    })
  })

  describe('openOnTriggerFocus', () => {
    it('does not open the portal on focus when not set', () => {
      wrapperMount(
        <Portal trigger={<button />}>
          <p />
        </Portal>,
      )
      expect(wrapper.find(PortalInner)).toHaveLength(0)

      wrapper.find('button').simulate('focus')
      expect(wrapper.find(PortalInner)).toHaveLength(0)
    })

    it('opens the portal on focus when set', () => {
      wrapperMount(
        <Portal trigger={<button />} openOnTriggerFocus>
          <p id='inner' />
        </Portal>,
      )
      expect(wrapper.find(PortalInner)).toHaveLength(0)

      wrapper.find('button').simulate('focus')
      expect(wrapper.find(PortalInner)).toHaveLength(1)
    })
  })

  describe('closeOnTriggerBlur', () => {
    it('does not close the portal on blur when not set', () => {
      wrapperMount(
        <Portal trigger={<button />} defaultOpen>
          <p id='inner' />
        </Portal>,
      )
      expect(wrapper.find(PortalInner)).toHaveLength(1)

      wrapper.find('button').simulate('blur')
      expect(wrapper.find(PortalInner)).toHaveLength(1)
    })

    it('closes the portal on blur when set', () => {
      wrapperMount(
        <Portal trigger={<button />} defaultOpen closeOnTriggerBlur>
          <p />
        </Portal>,
      )
      expect(wrapper.find(PortalInner)).toHaveLength(1)

      wrapper.find('button').simulate('blur')
      expect(wrapper.find(PortalInner)).toHaveLength(0)
    })
  })

  describe('closeOnEscape', () => {
    it('closes the portal on escape', () => {
      wrapperMount(
        <Portal closeOnEscape defaultOpen>
          <p />
        </Portal>,
      )
      expect(wrapper.find(PortalInner)).toHaveLength(1)

      domEvent.keyDown(document, { key: 'Escape' })
      wrapper.update()
      expect(wrapper.find(PortalInner)).toHaveLength(0)
    })

    it('does not close the portal on escape when false', () => {
      wrapperMount(
        <Portal closeOnEscape={false} defaultOpen>
          <p />
        </Portal>,
      )
      expect(wrapper.find(PortalInner)).toHaveLength(1)

      domEvent.keyDown(document, { key: 'Escape' })
      wrapper.update()
      expect(wrapper.find(PortalInner)).toHaveLength(1)
    })
  })

  describe('closeOnDocumentClick', () => {
    it('closes the portal on document click', () => {
      wrapperMount(
        <Portal closeOnDocumentClick defaultOpen>
          <p />
        </Portal>,
      )
      expect(wrapper.find(PortalInner)).toHaveLength(1)

      domEvent.click(document)
      wrapper.update()
      expect(wrapper.find(PortalInner)).toHaveLength(0)
    })

    it('does not close on click inside', () => {
      wrapperMount(
        <Portal closeOnDocumentClick defaultOpen>
          <p id='inner' />
        </Portal>,
      )
      expect(wrapper.find(PortalInner)).toHaveLength(1)

      domEvent.click('#inner')
      wrapper.update()
      expect(wrapper.find(PortalInner)).toHaveLength(1)
    })
  })

  // Heads Up!
  // Portals used to take focus on mount and restore focus to the original activeElement on unMount.
  // One by one, these auto set/remove focus features were removed and the assertions negated.
  // Leave these tests here to ensure we aren't ever stealing focus.
  describe('focus', () => {
    it('does not take focus onMount', (done) => {
      wrapperMount(
        <Portal defaultOpen>
          <p id='inner' />
        </Portal>,
      )

      setTimeout(() => {
        expect(document.activeElement).not.toBe(document.getElementById('inner'))
        done()
      }, 0)
    })

    it('does not take focus on unMount', (done) => {
      const input = document.createElement('input')
      document.body.appendChild(input)

      input.focus()
      expect(document.activeElement).toBe(input)

      wrapperMount(
        <Portal open>
          <p />
        </Portal>,
      )
      expect(document.activeElement).toBe(input)

      setTimeout(() => {
        expect(document.activeElement).toBe(input)

        wrapper.setProps({ open: false })
        wrapper.unmount()

        expect(document.activeElement).toBe(input)

        document.body.removeChild(input)
        done()
      }, 0)
    })

    it('does not take focus on re-render', (done) => {
      const input = document.createElement('input')
      document.body.appendChild(input)

      input.focus()
      expect(document.activeElement).toBe(input)

      wrapperMount(
        <Portal defaultOpen>
          <p />
        </Portal>,
      )
      expect(document.activeElement).toBe(input)

      setTimeout(() => {
        expect(document.activeElement).toBe(input)

        wrapper.render()
        expect(document.activeElement).toBe(input)

        document.body.removeChild(input)
        done()
      }, 0)
    })
  })

  describe('triggerRef', () => {
    it('maintains ref on the trigger', () => {
      const triggerRef = jest.fn()
      const mountNode = document.createElement('div')
      document.body.appendChild(mountNode)

      wrapperMount(
        <Portal trigger={<button id='trigger' />} triggerRef={triggerRef}>
          <p />
        </Portal>,
        { attachTo: mountNode },
      )
      const trigger = document.querySelector('#trigger')

      expect(triggerRef).toHaveBeenCalledTimes(1)
      expect(triggerRef).toHaveBeenCalledWith(trigger)

      wrapper.detach()
      document.body.removeChild(mountNode)
    })
  })
})
