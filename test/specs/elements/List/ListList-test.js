import React from 'react'
import * as common from 'test/specs/commonTests'

import ListList from 'src/elements/List/ListList'

describe('ListList', () => {
  common.isConformant(ListList)
  common.rendersChildren(ListList)

  describe('list', () => {
    it('omitted when rendered as `ol`', () => {
      shallow(<ListList as='ol' />)
        .should.not.have.className('list')
    })

    it('omitted when rendered as `ul`', () => {
      shallow(<ListList as='ul' />)
        .should.not.have.className('list')
    })
  })
})
