import React from 'react'
import MessageList from 'src/collections/Message/MessageList'
import MessageListItem from 'src/collections/Message/MessageListItem'
import * as common from 'test/specs/commonTests'

describe('MessageList', () => {
  common.isConformant(MessageList)
  common.rendersChildren(MessageList)
  common.hasSubComponents(MessageList, [MessageListItem])

  it('renders an ul tag', () => {
    shallow(<MessageList />)
      .should.have.tagName('ul')
  })

  it('has className list', () => {
    shallow(<MessageList />)
      .should.have.className('list')
  })
})
