import React from 'react'

import MessageItem from 'src/collections/Message/MessageItem'
import * as common from 'test/specs/commonTests'

describe('MessageItem', () => {
  common.isConformant(MessageItem)
  common.implementsCreateMethod(MessageItem)
  common.rendersChildren(MessageItem)

  describe('as', () => {
    it('is "li" by default', () => {
      expect(shallow(<MessageItem />).type()).toBe('li')
    })
  })
})
