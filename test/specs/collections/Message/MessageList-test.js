import React from 'react'
import MessageList from 'src/collections/Message/MessageList'
import * as common from 'test/specs/commonTests'

describe('MessageList', () => {
  common.isConformant(MessageList)
  common.forwardsRef(MessageList, { tagName: 'ul' })
  common.implementsCreateMethod(MessageList)
  common.rendersChildren(MessageList, {
    rendersContent: false,
  })

  it('renders an ul tag', () => {
    shallow(<MessageList />).should.have.tagName('ul')
  })

  it('has className list', () => {
    shallow(<MessageList />).should.have.className('list')
  })

  describe('items', () => {
    it('creates MessageItem children', () => {
      const items = ['foo', 'bar', 'baz']
      const wrapper = shallow(<MessageList items={items} />)

      wrapper.should.have.exactly(3).descendants('MessageItem')

      wrapper.childAt(0).shallow().should.have.text(items[0])

      wrapper.childAt(1).shallow().should.have.text(items[1])

      wrapper.childAt(2).shallow().should.have.text(items[2])
    })
  })
})
