import React from 'react'

import MessageHeader from 'src/collections/Message/MessageHeader'
import * as common from 'test/specs/commonTests'

describe('MessageHeader', () => {
  common.isConformant(MessageHeader)
  common.implementsCreateMethod(MessageHeader)
  common.rendersChildren(MessageHeader)

  it('renders an div tag', () => {
    expect(shallow(<MessageHeader />)).have.tagName('div')
  })

  it('has className header', () => {
    expect(shallow(<MessageHeader />)).have.className('header')
  })
})
