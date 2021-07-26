import _ from 'lodash'
import React from 'react'

import Message from 'src/collections/Message/Message'
import MessageContent from 'src/collections/Message/MessageContent'
import MessageHeader from 'src/collections/Message/MessageHeader'
import MessageList from 'src/collections/Message/MessageList'
import { SUI } from 'src/lib'
import * as common from 'test/specs/commonTests'
import { sandbox } from 'test/utils'

describe('Message', () => {
  common.isConformant(Message)
  common.forwardsRef(Message)
  common.forwardsRef(Message, { requiredProps: { children: <span /> } })
  common.hasSubcomponents(Message, [MessageContent, MessageHeader, MessageList])
  common.hasUIClassName(Message)
  common.rendersChildren(Message, {
    rendersContent: false,
  })

  common.implementsIconProp(Message, { autoGenerateKey: false })
  common.implementsShorthandProp(Message, {
    autoGenerateKey: false,
    propKey: 'content',
    ShorthandComponent: 'p',
    mapValueToProps: (val) => ({ children: val }),
  })
  common.implementsShorthandProp(Message, {
    autoGenerateKey: false,
    propKey: 'header',
    ShorthandComponent: MessageHeader,
    mapValueToProps: (val) => ({ content: val }),
  })
  common.implementsShorthandProp(Message, {
    autoGenerateKey: false,
    propKey: 'list',
    ShorthandComponent: MessageList,
    mapValueToProps: (val) => ({ items: val }),
  })

  common.propKeyOnlyToClassName(Message, 'compact')
  common.propKeyOnlyToClassName(Message, 'error')
  common.propKeyOnlyToClassName(Message, 'floating')
  common.propKeyOnlyToClassName(Message, 'hidden')
  common.propKeyOnlyToClassName(Message, 'icon')
  common.propKeyOnlyToClassName(Message, 'info')
  common.propKeyOnlyToClassName(Message, 'negative')
  common.propKeyOnlyToClassName(Message, 'positive')
  common.propKeyOnlyToClassName(Message, 'success')
  common.propKeyOnlyToClassName(Message, 'visible')
  common.propKeyOnlyToClassName(Message, 'warning')

  common.propKeyOrValueAndKeyToClassName(Message, 'attached', ['bottom', 'top'])

  common.propValueOnlyToClassName(Message, 'color', SUI.COLORS)
  common.propValueOnlyToClassName(Message, 'size', _.without(SUI.SIZES, 'medium'))

  describe('header', () => {
    it('adds MessageContent when defined', () => {
      shallow(<Message header='This is a message' />).should.have.descendants('MessageContent')
    })
  })

  describe('icon', () => {
    it('does not have MessageContent by default', () => {
      shallow(<Message />).should.not.have.descendants('.content')
    })
    it('renders children when "true"', () => {
      const text = 'child text'
      const node = <div id='foo' />

      shallow(<Message icon>{text}</Message>).should.have.text(text)

      shallow(<Message icon>{node}</Message>).should.contain(node)
    })
  })

  describe('list', () => {
    it('adds MessageContent when defined', () => {
      shallow(<Message list={[]} />).should.have.descendants('MessageContent')
    })
  })

  describe('onDismiss', () => {
    it('has no close icon by default', () => {
      shallow(<Message />).should.not.have.descendants('.close.icon')
    })

    it('adds a close icon when defined', () => {
      render(<Message onDismiss={() => undefined} />).should.have.descendants('.close.icon')
    })

    it('is called with (event) on close icon click', () => {
      const event = { fake: 'event data' }
      const props = { icon: true }

      const spy = sandbox.spy()
      const wrapper = mount(<Message {...props} onDismiss={spy} />)

      wrapper.should.have.descendants('.close.icon')
      wrapper.find('.close.icon').simulate('click', event)

      spy.should.have.been.calledOnce()
      spy.should.have.been.calledWithMatch(event, props)
    })
  })
})
