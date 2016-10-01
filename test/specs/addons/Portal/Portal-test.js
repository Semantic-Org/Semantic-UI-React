import _ from 'lodash'
import React from 'react'
import { unmountComponentAtNode } from 'react-dom'

import { domEvent, sandbox } from 'test/utils'
import { Portal } from 'src/addons'

let attachTo
let wrapper

const wrapperMount = (node, opts) => {
  wrapper = mount(node, opts)
  return wrapper
}

const nativeEvent = { nativeEvent: { stopImmediatePropagation: _.noop } }

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

  it('propTypes.children should be required', () => {
    Portal.propTypes.children.should.equal(React.PropTypes.node.isRequired)
  })

  it('Portal.node should be undefined if portal is not open', () => {
    wrapperMount(<Portal><p>Hi</p></Portal>)
    const instance = wrapper.instance()

    expect(instance.node).to.equal(undefined)
  })

  it('should append portal with children to the document.body', () => {
    wrapperMount(<Portal open><p>Hi</p></Portal>)
    const instance = wrapper.instance()

    instance.node.firstElementChild.tagName.should.equal('P')
    document.body.lastElementChild.should.equal(instance.node)
    document.body.childElementCount.should.equal(1)
  })

  it('when props.open is false and then set to true should open portal', () => {
    wrapperMount(<Portal open={false}><p>Hi</p></Portal>)
    const instance = wrapper.instance()

    document.body.childElementCount.should.equal(0)

    // Enzyme docs say it merges previous props but without children, react complains
    wrapper.setProps({ open: true, children: <p>Hi</p> })
    document.body.lastElementChild.should.equal(instance.node)
    document.body.childElementCount.should.equal(1)
  })

  it('when props.open is true and then set to false should close portal', () => {
    wrapperMount(<Portal open><p>Hi</p></Portal>)
    const instance = wrapper.instance()

    document.body.lastElementChild.should.equal(instance.node)
    document.body.childElementCount.should.equal(1)

    wrapper.setProps({ open: false, children: <p>Hi</p> })
    document.body.childElementCount.should.equal(0)
  })

  it('should add className to the portal\'s wrapping node', () => {
    wrapperMount(<Portal className='some-class' open><p>Hi</p></Portal>)

    document.body.lastElementChild.className.should.equal('some-class')
  })

  it('should update className on the portal\'s wrapping node when props.className changes', () => {
    wrapperMount(<Portal className='some-class' open><p>Hi</p></Portal>)

    wrapper.setProps({ className: 'some-other-class', children: <p>Hi</p> })
    document.body.lastElementChild.className.should.equal('some-other-class')
  })

  describe('callbacks', () => {
    it('should call props.onMount() when portal opens', () => {
      const props = { open: false, onMount: sandbox.spy() }
      wrapperMount(<Portal {...props}><p>Hi</p></Portal>)

      wrapper.setProps({ open: true, children: <p>Hi</p> })
      props.onMount.should.have.been.calledOnce()
    })

    it('should not call props.onMount() when portal receives props', () => {
      const props = { open: false, onMount: sandbox.spy() }
      wrapperMount(<Portal {...props}><p>Hi</p></Portal>)

      wrapper.setProps({ open: true, children: <p>Hi</p>, className: 'old' })
      props.onMount.should.have.been.calledOnce()

      wrapper.setProps({ open: true, children: <p>Hi</p>, className: 'new' })
      props.onMount.should.have.been.calledOnce()
    })

    it('should call props.onUnmount() when portal closes', () => {
      const props = { open: true, onUnmount: sandbox.spy() }
      wrapperMount(<Portal {...props}><p>Hi</p></Portal>)

      wrapper.setProps({ open: false, children: <p>Hi</p> })
      props.onUnmount.should.have.been.calledOnce()
    })

    it('should not call props.onUnmount() when portal receives props', () => {
      const props = { open: true, onUnmount: sandbox.spy() }
      wrapperMount(<Portal {...props}><p>Hi</p></Portal>)

      wrapper.setProps({ open: false, children: <p>Hi</p>, className: 'old' })
      props.onUnmount.should.have.been.calledOnce()

      wrapper.setProps({ open: false, children: <p>Hi</p>, className: 'new' })
      props.onUnmount.should.have.been.calledOnce()
    })

    it('should call props.onUnmount() only once when portal closes and then is unmounted', () => {
      const div = document.createElement('div')
      const props = { open: true, onUnmount: sandbox.spy() }
      wrapperMount(<Portal {...props}><p>Hi</p></Portal>, { attachTo: div })

      wrapper.setProps({ open: false, children: <p>Hi</p> })
      unmountComponentAtNode(div)
      props.onUnmount.should.have.been.calledOnce()
    })

    it('should call props.onUnmount() only once when directly unmounting', () => {
      const div = document.createElement('div')
      const props = { open: true, onUnmount: sandbox.spy() }

      wrapperMount(<Portal {...props}><p>Hi</p></Portal>, { attachTo: div })
      unmountComponentAtNode(div)
      props.onUnmount.should.have.been.calledOnce()
    })

    it('should not call this.setState() if portal is unmounted', () => {
      const div = document.createElement('div')
      const props = { open: true }
      wrapperMount(<Portal {...props}><p>Hi</p></Portal>, { attachTo: div })

      const spy = sandbox.spy(wrapper, 'setState')
      unmountComponentAtNode(div)
      spy.should.not.have.been.called()
    })
  })

  describe('trigger', () => {
    it('render should return null if no props.trigger', () => {
      wrapperMount(<Portal><p>Hi</p></Portal>)

      expect(wrapper.html()).to.equal(null)
    })

    it('should render the props.trigger element', () => {
      const text = 'open by click on me'
      const trigger = <button>{text}</button>
      wrapperMount(<Portal trigger={trigger}><p>Hi</p></Portal>)

      wrapper.text().should.equal(text)
    })
  })

  describe('mountNode', () => {
    it('render portal within mountNode', () => {
      const mountNode = document.createElement('div')
      document.body.appendChild(mountNode)

      wrapperMount(<Portal mountNode={mountNode} open><p>Hi</p></Portal>)
      const instance = wrapper.instance()

      mountNode.lastElementChild.should.equal(instance.node)
      mountNode.childElementCount.should.equal(1)
    })
  })

  describe('openOnTriggerClick', () => {
    it('should open portal on click by default', () => {
      const spy = sandbox.spy()
      const trigger = <button onClick={spy}>button</button>
      wrapperMount(<Portal trigger={trigger}><p>Hi</p></Portal>)

      wrapper.find('button').simulate('click', nativeEvent)
      document.body.lastElementChild.should.equal(wrapper.instance().node)
      spy.should.have.been.calledOnce()
    })

    it('should not open portal on click when false', () => {
      const spy = sandbox.spy()
      const trigger = <button onClick={spy}>button</button>
      wrapperMount(<Portal trigger={trigger} openOnTriggerClick={false}><p>Hi</p></Portal>)

      wrapper.find('button').simulate('click', nativeEvent)
      document.body.childElementCount.should.equal(0)
      spy.should.have.been.calledOnce()
    })

    it('should open portal on click when set', () => {
      const spy = sandbox.spy()
      const trigger = <button onClick={spy}>button</button>
      wrapperMount(<Portal trigger={trigger} openOnTriggerClick><p>Hi</p></Portal>)

      wrapper.find('button').simulate('click', nativeEvent)
      document.body.lastElementChild.should.equal(wrapper.instance().node)
      spy.should.have.been.calledOnce()
    })
  })

  describe('openOnTriggerMouseOver', () => {
    it('should not open portal on mouseover when not set', () => {
      const spy = sandbox.spy()
      const trigger = <button onMouseOver={spy}>button</button>
      wrapperMount(<Portal trigger={trigger}><p>Hi</p></Portal>)

      wrapper.find('button').simulate('mouseover')
      document.body.childElementCount.should.equal(0)
      spy.should.have.been.calledOnce()
    })

    it('should open portal on mouseover when set', () => {
      const spy = sandbox.spy()
      const trigger = <button onMouseOver={spy}>button</button>
      wrapperMount(<Portal trigger={trigger} openOnTriggerMouseOver><p>Hi</p></Portal>)

      wrapper.find('button').simulate('mouseover')
      document.body.lastElementChild.should.equal(wrapper.instance().node)
      spy.should.have.been.calledOnce()
    })
  })

  describe('closeOnTriggerMouseLeave', () => {
    it('should not close portal on mouseleave when not set', () => {
      const spy = sandbox.spy()
      const trigger = <button onMouseLeave={spy}>button</button>
      wrapperMount(<Portal trigger={trigger} defaultOpen><p>Hi</p></Portal>)

      wrapper.find('button').simulate('mouseleave')
      document.body.lastElementChild.should.equal(wrapper.instance().node)
      spy.should.have.been.calledOnce()
    })

    it('should close portal on mouseleave when set', () => {
      const spy = sandbox.spy()
      const trigger = <button onMouseLeave={spy}>button</button>
      wrapperMount(<Portal trigger={trigger} defaultOpen closeOnTriggerMouseLeave><p>Hi</p></Portal>)

      wrapper.find('button').simulate('mouseleave')
      document.body.childElementCount.should.equal(0)
      spy.should.have.been.calledOnce()
    })
  })

  describe('openOnTriggerFocus', () => {
    it('should not open portal on focus when not set', () => {
      const spy = sandbox.spy()
      const trigger = <button onFocus={spy}>button</button>
      wrapperMount(<Portal trigger={trigger}><p>Hi</p></Portal>)

      wrapper.find('button').simulate('focus')
      document.body.childElementCount.should.equal(0)
      spy.should.have.been.calledOnce()
    })

    it('should open portal on focus when set', () => {
      const spy = sandbox.spy()
      const trigger = <button onFocus={spy}>button</button>
      wrapperMount(<Portal trigger={trigger} openOnTriggerFocus><p>Hi</p></Portal>)

      wrapper.find('button').simulate('focus')
      document.body.lastElementChild.should.equal(wrapper.instance().node)
      spy.should.have.been.calledOnce()
    })
  })

  describe('closeOnTriggerBlur', () => {
    it('should not close portal on blur when not set', () => {
      const spy = sandbox.spy()
      const trigger = <button onBlur={spy}>button</button>
      wrapperMount(<Portal trigger={trigger} defaultOpen><p>Hi</p></Portal>)

      wrapper.find('button').simulate('blur')
      document.body.lastElementChild.should.equal(wrapper.instance().node)
      spy.should.have.been.calledOnce()
    })

    it('should close portal on blur when set', () => {
      const spy = sandbox.spy()
      const trigger = <button onBlur={spy}>button</button>
      wrapperMount(<Portal trigger={trigger} defaultOpen closeOnTriggerBlur><p>Hi</p></Portal>)

      wrapper.find('button').simulate('blur')
      document.body.childElementCount.should.equal(0)
      spy.should.have.been.calledOnce()
    })
  })

  describe('close actions', () => {
    it('closeOnEscape', () => {
      wrapperMount(<Portal closeOnEscape defaultOpen><p>Hi</p></Portal>)
      document.body.childElementCount.should.equal(1)

      domEvent.keyDown(document, { key: 'Escape' })
      document.body.childElementCount.should.equal(0)
    })

    it('closeOnDocumentClick', () => {
      wrapperMount(<Portal closeOnDocumentClick defaultOpen><p>Hi</p></Portal>)
      document.body.childElementCount.should.equal(1)

      // Should not close when inside
      domEvent.click(wrapper.instance().node.firstElementChild)
      document.body.childElementCount.should.equal(1)

      domEvent.click(document)
      document.body.childElementCount.should.equal(0)
    })
  })
})
