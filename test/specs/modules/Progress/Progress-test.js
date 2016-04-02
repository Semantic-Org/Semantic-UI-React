import React from 'react'

import Progress from 'src/modules/Progress/Progress'
import * as common from 'test/specs/commonTests'

describe('Progress', () => {
  common.isConformant(Progress)
  common.hasUIClassName(Progress)
  common.rendersChildren(Progress)

  it('is a div with className bar', () => {
    shallow(<Progress />)
      .childAt(0)
      .should.have.className('bar')
  })
})
