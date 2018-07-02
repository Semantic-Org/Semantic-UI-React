import React from 'react'
import MessageList from 'src/collections/Message/MessageList'
import * as common from 'test/specs/commonTests'

describe('MessageList', () => {
  common.isConformant(MessageList)
  common.implementsCreateMethod(MessageList)
  common.rendersChildren(MessageList, {
    rendersContent: false,
  })

  it('renders an ul tag', () => {
    expect(shallow(<MessageList />)).have.tagName('ul')
  })

  it('has className list', () => {
    expect(shallow(<MessageList />)).have.className('list')
  })

  describe('items', () => {
    it('creates MessageItem children', () => {
      const items = ['foo', 'bar', 'baz']
      const wrapper = shallow(<MessageList items={items} />)

      expect(wrapper)
        .have.exactly(3)
        .descendants('MessageItem')

      expect(wrapper.childAt(0).shallow()).have.text(items[0])

      expect(wrapper.childAt(1).shallow()).have.text(items[1])

      expect(wrapper.childAt(2).shallow()).have.text(items[2])
    })
  })
})
