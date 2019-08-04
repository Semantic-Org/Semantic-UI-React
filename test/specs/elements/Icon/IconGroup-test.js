import React from 'react'
import IconGroup from 'src/elements/Icon/IconGroup'
import * as common from 'test/specs/commonTests'

describe('IconGroup', () => {
  common.isConformant(IconGroup)
  common.rendersChildren(IconGroup)

  it('renders as an <i> by default', () => {
    shallow(<IconGroup />).should.have.tagName('i')
  })
})
