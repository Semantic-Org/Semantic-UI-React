import React from 'react'

import MessageHeader from 'src/collections/Message/MessageHeader'
import * as common from 'test/specs/commonTests'

describe('MessageHeader', () => {
  common.isConformant(MessageHeader)
  common.rendersChildren(MessageHeader)

  it('renders an div tag', () => {
    shallow(<MessageHeader />)
      .should.have.tagName('div')
  })

  it('has className header', () => {
    shallow(<MessageHeader />)
      .should.have.className('header')
  })
})
