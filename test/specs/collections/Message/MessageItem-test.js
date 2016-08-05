import React from 'react'
import MessageItem from 'src/collections/Message/MessageItem'
import * as common from 'test/specs/commonTests'

describe('MessageList', () => {
  common.isConformant(MessageItem)
  common.rendersChildren(MessageItem)

  it('renders an li tag', () => {
    shallow(<MessageItem />)
      .should.have.tagName('li')
  })
})
