import _ from 'lodash'
import React from 'react'

import Message from 'src/collections/Message/Message'
import MessageContent from 'src/collections/Message/MessageContent'
import MessageHeader from 'src/collections/Message/MessageHeader'
import MessageList from 'src/collections/Message/MessageList'
import { SUI } from 'src/lib'
import * as common from 'test/specs/commonTests'

describe('Message', () => {
  common.isConformant(Message)
  common.hasSubcomponents(Message, [MessageContent, MessageHeader, MessageList])
  common.hasUIClassName(Message)
  common.rendersChildren(Message, {
    rendersContent: false,
  })

  common.implementsIconProp(Message)
  common.implementsShorthandProp(Message, {
    propKey: 'content',
    ShorthandComponent: 'p',
    mapValueToProps: val => ({ children: val }),
  })
  common.implementsShorthandProp(Message, {
    propKey: 'header',
    ShorthandComponent: MessageHeader,
    mapValueToProps: val => ({ content: val }),
  })
  common.implementsShorthandProp(Message, {
    propKey: 'list',
    ShorthandComponent: MessageList,
    mapValueToProps: val => ({ items: val }),
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
      expect(shallow(<Message header='This is a message' />).find('MessageContent')).toHaveLength(1)
    })
  })

  describe('icon', () => {
    it('does not have MessageContent by default', () => {
      expect(shallow(<Message />).find('.content')).toHaveLength(0)
    })

    it('renders children when "true"', () => {
      const text = 'child text'
      const node = <div id='foo' />

      expect(shallow(<Message icon>{text}</Message>).text()).toContain(text)
      expect(shallow(<Message icon>{node}</Message>).contains(node)).toBe(true)
    })
  })

  describe('list', () => {
    it('adds MessageContent when defined', () => {
      expect(shallow(<Message list={[]} />).find('MessageContent')).toHaveLength(1)
    })
  })

  describe('onDismiss', () => {
    it('has no close icon by default', () => {
      expect(shallow(<Message />).find('.close.icon')).toHaveLength(0)
    })

    it('adds a close icon when defined', () => {
      expect(mount(<Message onDismiss={() => undefined} />).find('.close.icon')).toHaveLength(1)
    })

    it('is called with (event, data) on close icon click', () => {
      const event = { fake: 'event data' }
      const props = { icon: true }

      const onDismiss = jest.fn()
      const wrapper = mount(<Message {...props} onDismiss={onDismiss} />)

      expect(wrapper.find('.close.icon')).toHaveLength(1)
      wrapper.find('.close.icon').simulate('click', event)

      expect(onDismiss).toHaveBeenCalledTimes(1)
      expect(onDismiss).toHaveBeenCalledWith(
        expect.objectContaining(event),
        expect.objectContaining(props),
      )
    })
  })
})
