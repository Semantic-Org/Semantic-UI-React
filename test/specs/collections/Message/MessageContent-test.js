import React from 'react'
import MessageContent from 'src/collections/Message/MessageContent'
import * as common from 'test/specs/commonTests'

describe('MessageContent', () => {
  common.isConformant(MessageContent)
  common.rendersChildren(MessageContent)

  it('renders an div tag', () => {
    expect(shallow(<MessageContent />)).have.tagName('div')
  })

  it('has className content', () => {
    expect(shallow(<MessageContent />)).have.className('content')
  })
})
