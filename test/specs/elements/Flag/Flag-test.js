import React from 'react'

import Flag from 'src/elements/Flag/Flag'
import * as common from 'test/specs/commonTests'

describe('Flag', () => {
  common.isConformant(Flag)
  common.propValueOnlyToClassName(Flag, 'name')

  it('renders an <i /> element', () => {
    shallow(<Flag />)
      .should.have.tagName('i')
  })
})
