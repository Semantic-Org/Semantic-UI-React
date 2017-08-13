import PropTypes from 'prop-types'
import React from 'react'
import { unmountComponentAtNode } from 'react-dom'

import * as common from 'test/specs/commonTests'
import { domEvent, sandbox } from 'test/utils'
import Portal from 'src/addons/Portal/Portal'

let attachTo
let wrapper

const wrapperMount = (node, opts) => {
  wrapper = mount(node, opts)
  return wrapper
}

describe('Portal', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
    attachTo = undefined
    wrapper = undefined
  })

  afterEach(() => {
    if (wrapper && wrapper.unmount) wrapper.unmount()
    if (attachTo) document.body.removeChild(attachTo)
  })

  common.hasValidTypings(Portal)

  it('propTypes.children should be required', () => {
    Portal.propTypes.children.should.equal(PropTypes.node.isRequired)
  })

  it('this.rootNode should be undefined if portal is not open', () => {
    wrapperMount(<Portal><p /></Portal>)
    const instance = wrapper.instance()

    expect(instance.rootNode).to.equal(undefined)
  })

  it('appends portal with children to the document.body', () => {
    wrapperMount(<Portal open><p /></Portal>)
    const instance = wrapper.instance()

    instance.rootNode.firstElementChild.tagName.should.equal('P')
    document.body.lastElementChild.should.equal(instance.rootNode)
    document.body.childElementCount.should.equal(1)
  })

  it('does not call this.setState() if portal is unmounted', () => {
    const div = document.createElement('div')
    const props = { open: true }
    wrapperMount(<Portal {...props}><p /></Portal>, { attachTo: div })

    const spy = sandbox.spy(wrapper, 'setState')
    unmountComponentAtNode(div)
    spy.should.not.have.been.called()
  })

  describe('open', () => {
    it('opens the portal when toggled from false to true', () => {
      wrapperMount(<Portal open={false}><p /></Portal>)
      const instance = wrapper.instance()

      document.body.childElementCount.should.equal(0)

      // Enzyme docs say it merges previous props but without children, react complains
      wrapper.setProps({ open: true, children: <p /> })
      document.body.lastElementChild.should.equal(instance.rootNode)
      document.body.childElementCount.should.equal(1)
    })

    it('closes the portal when toggled from true to false ', () => {
      wrapperMount(<Portal open><p /></Portal>)
      const instance = wrapper.instance()

      document.body.lastElementChild.should.equal(instance.rootNode)
      document.body.childElementCount.should.equal(1)

      wrapper.setProps({ open: false, children: <p /> })
      document.body.childElementCount.should.equal(0)
    })
  })

  describe('className', () => {
    it('is added to the portal\'s wrapping node', () => {
      wrapperMount(<Portal className='some-class' open><p /></Portal>)

      document.body.lastElementChild.className.should.equal('some-class')
    })

    it('updates the portal\'s wrapping node className when changed', () => {
      wrapperMount(<Portal className='some-class' open><p /></Portal>)

      wrapper.setProps({ className: 'some-other-class', children: <p /> })
      document.body.lastElementChild.className.should.equal('some-other-class')
    })
  })

  describe('prepend', () => {
    beforeEach(() => {
      document.body.innerHTML = '<div></div>'
    })

    it('appends portal by default', () => {
      wrapperMount(<Portal open><p /></Portal>)
      const instance = wrapper.instance()

      document.body.childElementCount.should.equal(2)
      document.body.lastElementChild.should.equal(instance.rootNode)
    })

    it('prepends portal by when passed', () => {
      wrapperMount(<Portal open prepend><p /></Portal>)
      const instance = wrapper.instance()

      document.body.childElementCount.should.equal(2)
      document.body.firstElementChild.should.equal(instance.rootNode)
    })
  })

  describe('onMount', () => {
    it('called when portal opens', () => {
      const props = { open: false, onMount: sandbox.spy() }
      wrapperMount(<Portal {...props}><p /></Portal>)

      wrapper.setProps({ open: true, children: <p /> })
      props.onMount.should.have.been.calledOnce()
    })

    it('is not called when portal receives props', () => {
      const props = { open: false, onMount: sandbox.spy() }
      wrapperMount(<Portal {...props}><p /></Portal>)

      wrapper.setProps({ open: true, children: <p />, className: 'old' })
      props.onMount.should.have.been.calledOnce()

      wrapper.setProps({ open: true, children: <p />, className: 'new' })
      props.onMount.should.have.been.calledOnce()
    })
  })

  describe('onUnmount', () => {
    it('is called when portal closes', () => {
      const props = { open: true, onUnmount: sandbox.spy() }
      wrapperMount(<Portal {...props}><p /></Portal>)

      wrapper.setProps({ open: false, children: <p /> })
      props.onUnmount.should.have.been.calledOnce()
    })

    it('is not called when portal receives props', () => {
      const props = { open: true, onUnmount: sandbox.spy() }
      wrapperMount(<Portal {...props}><p /></Portal>)

      wrapper.setProps({ open: false, children: <p />, className: 'old' })
      props.onUnmount.should.have.been.calledOnce()

      wrapper.setProps({ open: false, children: <p />, className: 'new' })
      props.onUnmount.should.have.been.calledOnce()
    })

    it('is called only once when portal closes and then is unmounted', () => {
      const div = document.createElement('div')
      const props = { open: true, onUnmount: sandbox.spy() }
      wrapperMount(<Portal {...props}><p /></Portal>, { attachTo: div })

      wrapper.setProps({ open: false, children: <p /> })
      unmountComponentAtNode(div)
      props.onUnmount.should.have.been.calledOnce()
    })

    it('is called only once when directly unmounting', () => {
      const div = document.createElement('div')
      const props = { open: true, onUnmount: sandbox.spy() }

      wrapperMount(<Portal {...props}><p /></Portal>, { attachTo: div })
      unmountComponentAtNode(div)
      props.onUnmount.should.have.been.calledOnce()
    })
  })

  describe('portal ref', () => {
    it('maintains ref to DOM node with host element', () => {
      wrapperMount(<Portal open><p /></Portal>)
      wrapper.instance().portalNode.tagName.should.equal('P')
    })

    it('maintains ref to DOM node with React component', () => {
      const Component = () => <p />

      wrapperMount(<Portal open><Component /></Portal>)
      wrapper.instance().portalNode.tagName.should.equal('P')
    })
  })

  describe('trigger', () => {
    it('renders null when not set', () => {
      wrapperMount(<Portal><p /></Portal>)

      expect(wrapper.html()).to.equal(null)
    })

    it('renders the trigger when set', () => {
      const text = 'open by click on me'
      const trigger = <button>{text}</button>
      wrapperMount(<Portal trigger={trigger}><p /></Portal>)

      wrapper.text().should.equal(text)
    })
  })

  describe('mountNode', () => {
    it('render portal within mountNode', () => {
      const mountNode = document.createElement('div')
      document.body.appendChild(mountNode)

      wrapperMount(<Portal mountNode={mountNode} open><p /></Portal>)
      const instance = wrapper.instance()

      mountNode.lastElementChild.should.equal(instance.rootNode)
      mountNode.childElementCount.should.equal(1)
    })
  })

  describe('openOnTriggerClick', () => {
    it('defaults to true', () => {
      Portal.defaultProps.openOnTriggerClick.should.equal(true)
    })

    it('does not open the portal on trigger click when false', () => {
      const spy = sandbox.spy()
      const trigger = <button onClick={spy}>button</button>
      wrapperMount(<Portal trigger={trigger} openOnTriggerClick={false}><p /></Portal>)

      wrapper.find('button').simulate('click')
      document.body.childElementCount.should.equal(0)
      spy.should.have.been.calledOnce()
    })

    it('opens the portal on trigger click when true', () => {
      const spy = sandbox.spy()
      const trigger = <button onClick={spy}>button</button>
      wrapperMount(<Portal trigger={trigger} openOnTriggerClick><p /></Portal>)

      wrapper.find('button').simulate('click')
      document.body.lastElementChild.should.equal(wrapper.instance().rootNode)
      spy.should.have.been.calledOnce()
    })
  })

  describe('closeOnTriggerClick', () => {
    it('does not close the portal on click', () => {
      wrapperMount(<Portal trigger={<button />} defaultOpen><p /></Portal>)

      wrapper.find('button').simulate('click')
      document.body.lastElementChild.should.equal(wrapper.instance().rootNode)
    })

    it('closes the portal on click when set', () => {
      wrapperMount(
        <Portal trigger={<button />} defaultOpen closeOnTriggerClick>
          <p />
        </Portal>,
      )

      wrapper.find('button').simulate('click')
      document.body.childElementCount.should.equal(0)
    })
  })

  describe('openOnTriggerMouseEnter', () => {
    it('does not open the portal on mouseenter when not set', () => {
      wrapperMount(<Portal trigger={<button />}><p /></Portal>)

      wrapper.find('button').simulate('mouseenter')
      document.body.childElementCount.should.equal(0)
    })

    it('opens the portal on mouseenter when set', (done) => {
      wrapperMount(<Portal trigger={<button />} openOnTriggerMouseEnter mouseEnterDelay={0}><p /></Portal>)

      document.body.childElementCount.should.equal(0)
      wrapper.find('button').simulate('mouseenter')

      setTimeout(() => {
        document.body.childElementCount.should.equal(1)
        document.body.lastElementChild.should.equal(wrapper.instance().rootNode)
        done()
      }, 1)
    })
  })

  describe('closeOnTriggerMouseLeave', () => {
    it('does not close the portal on mouseleave when not set', (done) => {
      wrapperMount(<Portal trigger={<button />} defaultOpen mouseLeaveDelay={0}><p /></Portal>)

      wrapper.find('button').simulate('mouseleave')

      setTimeout(() => {
        document.body.lastElementChild.should.equal(wrapper.instance().rootNode)
        done()
      }, 1)
    })

    it('closes the portal on mouseleave when set', (done) => {
      wrapperMount(
        <Portal trigger={<button />} defaultOpen closeOnTriggerMouseLeave mouseLeaveDelay={0}>
          <p />
        </Portal>,
      )

      document.body.lastElementChild.should.equal(wrapper.instance().rootNode)
      wrapper.find('button').simulate('mouseleave')

      setTimeout(() => {
        document.body.childElementCount.should.equal(0)
        done()
      }, 1)
    })
  })

  describe('closeOnPortalMouseLeave', () => {
    it('does not close the portal on mouseleave of portal when not set', (done) => {
      wrapperMount(<Portal trigger={<button />} defaultOpen mouseLeaveDelay={0}><p /></Portal>)

      domEvent.mouseLeave(wrapper.instance().rootNode.firstElementChild)

      setTimeout(() => {
        document.body.lastElementChild.should.equal(wrapper.instance().rootNode)
        done()
      }, 1)
    })

    it('closes the portal on mouseleave of portal when set', (done) => {
      wrapperMount(
        <Portal trigger={<button />} defaultOpen closeOnPortalMouseLeave mouseLeaveDelay={0}>
          <p />
        </Portal>,
      )

      document.body.lastElementChild.should.equal(wrapper.instance().rootNode)
      domEvent.mouseLeave(wrapper.instance().rootNode.firstElementChild)

      setTimeout(() => {
        document.body.childElementCount.should.equal(0)
        done()
      }, 1)
    })
  })

  describe('closeOnTriggerMouseLeave + closeOnPortalMouseLeave', () => {
    it('closes the portal on trigger mouseleave even when portal receives mouseenter within limit', (done) => {
      const delay = 10
      wrapperMount(
        <Portal trigger={<button />} defaultOpen closeOnTriggerMouseLeave mouseLeaveDelay={delay}><p /></Portal>,
      )

      wrapper.find('button').simulate('mouseleave')

      // Fire a mouseEnter on the portal within the time limit
      setTimeout(() => {
        domEvent.mouseEnter(wrapper.instance().rootNode.firstElementChild)
      }, delay - 1)

      // The portal should close because closeOnPortalMouseLeave not set
      setTimeout(() => {
        document.body.childElementCount.should.equal(0)
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
          <p />
        </Portal>,
      )

      wrapper.find('button').simulate('mouseleave')

      // Fire a mouseEnter on the portal within the time limit
      setTimeout(() => {
        domEvent.mouseEnter(wrapper.instance().rootNode.firstElementChild)
      }, delay - 1)

      // The portal should not have closed
      setTimeout(() => {
        document.body.lastElementChild.should.equal(wrapper.instance().rootNode)
        done()
      }, delay + 1)
    })
  })

  describe('openOnTriggerFocus', () => {
    it('does not open the portal on focus when not set', () => {
      wrapperMount(<Portal trigger={<button />}><p /></Portal>)
        .find('button')
        .simulate('focus')

      document.body.childElementCount.should.equal(0)
    })
    it('opens the portal on focus when set', () => {
      wrapperMount(<Portal trigger={<button />} openOnTriggerFocus><p /></Portal>)
        .find('button')
        .simulate('focus')

      document.body.lastElementChild.should.equal(wrapper.instance().rootNode)
    })
  })

  describe('closeOnTriggerBlur', () => {
    it('does not close the portal on blur when not set', () => {
      wrapperMount(<Portal trigger={<button />} defaultOpen><p /></Portal>)
        .find('button')
        .simulate('blur')

      document.body.lastElementChild.should.equal(wrapper.instance().rootNode)
    })

    it('closes the portal on blur when set', () => {
      wrapperMount(<Portal trigger={<button />} defaultOpen closeOnTriggerBlur><p /></Portal>)
        .find('button')
        .simulate('blur')

      document.body.childElementCount.should.equal(0)
    })
  })

  describe('closeOnEscape', () => {
    it('closes the portal on escape', () => {
      wrapperMount(<Portal closeOnEscape defaultOpen><p /></Portal>)
      document.body.childElementCount.should.equal(1)
      domEvent.keyDown(document, { key: 'Escape' })
      document.body.childElementCount.should.equal(0)
    })

    it('does not close the portal on escape when false', () => {
      wrapperMount(<Portal closeOnEscape={false} defaultOpen><p /></Portal>)
      document.body.childElementCount.should.equal(1)
      domEvent.keyDown(document, { key: 'Escape' })
      document.body.childElementCount.should.equal(1)
    })
  })

  describe('closeOnDocumentClick', () => {
    it('closes the portal on document click', () => {
      wrapperMount(<Portal closeOnDocumentClick defaultOpen><p /></Portal>)
      document.body.childElementCount.should.equal(1)

      domEvent.click(document)
      document.body.childElementCount.should.equal(0)
    })
    it('does not close on click inside', () => {
      wrapperMount(<Portal closeOnDocumentClick defaultOpen><p /></Portal>)

      domEvent.click(wrapper.instance().rootNode.firstElementChild)
      document.body.childElementCount.should.equal(1)
    })
  })

  // Heads Up!
  // Portals used to take focus on mount and restore focus to the original activeElement on unMount.
  // One by one, these auto set/remove focus features were removed and the assertions negated.
  // Leave these tests here to ensure we aren't ever stealing focus.
  describe('focus', () => {
    it('does not take focus onMount', (done) => {
      wrapperMount(<Portal defaultOpen><p /></Portal>)

      setTimeout(() => {
        const { portalNode } = wrapper.instance()
        document.activeElement.should.not.equal(portalNode)
        done()
      }, 0)
    })

    it('does not take focus on unMount', (done) => {
      const input = document.createElement('input')
      document.body.appendChild(input)

      input.focus()
      document.activeElement.should.equal(input)

      wrapperMount(<Portal open><p /></Portal>)
      document.activeElement.should.equal(input)

      setTimeout(() => {
        document.activeElement.should.equal(input)

        wrapper.setProps({ open: false })
        wrapper.unmount()

        document.activeElement.should.equal(input)

        document.body.removeChild(input)
        done()
      }, 0)
    })

    it('does not take focus on re-render', (done) => {
      const input = document.createElement('input')
      document.body.appendChild(input)

      input.focus()
      document.activeElement.should.equal(input)

      wrapperMount(<Portal defaultOpen><p /></Portal>)
      document.activeElement.should.equal(input)

      setTimeout(() => {
        document.activeElement.should.equal(input)

        wrapper.render()
        document.activeElement.should.equal(input)

        document.body.removeChild(input)
        done()
      }, 0)
    })
  })
})
