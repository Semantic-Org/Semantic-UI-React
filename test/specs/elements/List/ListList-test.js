import React from 'react'

import ListList from 'src/elements/List/ListList'
import * as common from 'test/specs/commonTests'

describe('ListList', () => {
  common.isConformant(ListList)
  common.rendersChildren(ListList)

  describe('list', () => {
    it('defined by default', () => {
      shallow(<ListList />)
        .dive()
        .should.have.className('list')
    })

    it('omitted when rendered as `ol`', () => {
      shallow(<ListList as='ol' />)
        .dive()
        .should.not.have.className('list')
    })

    it('omitted when rendered as `ul`', () => {
      shallow(<ListList as='ul' />)
        .dive()
        .should.not.have.className('list')
    })
  })
})
