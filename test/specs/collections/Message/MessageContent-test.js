import React from 'react'
import MessageContent from 'src/collections/Message/MessageContent'
import * as common from 'test/specs/commonTests'

describe('MessageContent', () => {
  common.isConformant(MessageContent)
  common.forwardsRef(MessageContent)
  common.rendersChildren(MessageContent)

  it('renders an div tag', () => {
    shallow(<MessageContent />).should.have.tagName('div')
  })

  it('has className content', () => {
    shallow(<MessageContent />).should.have.className('content')
  })
})
