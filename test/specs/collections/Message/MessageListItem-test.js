import React from 'react'
import MessageListItem from 'src/collections/Message/MessageListItem'
import * as common from 'test/specs/commonTests'

describe('MessageList', () => {
  common.isConformant(MessageListItem)
  common.rendersChildren(MessageListItem)

  it('renders an li tag', () => {
    shallow(<MessageListItem />)
      .should.have.tagName('li')
  })
})
