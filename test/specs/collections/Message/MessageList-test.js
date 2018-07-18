import React from 'react'

import MessageList from 'src/collections/Message/MessageList'
import * as common from 'test/specs/commonTests'

describe('MessageList', () => {
  common.isConformant(MessageList)
  common.implementsCreateMethod(MessageList)
  common.rendersChildren(MessageList, {
    rendersContent: false,
  })

  describe('as', () => {
    it('is "ul" by default', () => {
      expect(shallow(<MessageList />).type()).toBe('ul')
    })
  })

  describe('items', () => {
    it('creates MessageItem children', () => {
      const items = ['foo', 'bar', 'baz']
      const wrapper = shallow(<MessageList items={items} />)

      expect(wrapper.find('MessageItem')).toHaveLength(3)
      expect(
        wrapper
          .childAt(0)
          .shallow()
          .text(),
      ).toBe(items[0])
      expect(
        wrapper
          .childAt(1)
          .shallow()
          .text(),
      ).toBe(items[1])
      expect(
        wrapper
          .childAt(2)
          .shallow()
          .text(),
      ).toBe(items[2])
    })
  })
})
