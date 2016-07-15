import React from 'react'

import Rail from 'src/elements/Rail/Rail'
import * as common from 'test/specs/commonTests'

describe('Rail', () => {
  common.isConformant(Rail)
  common.hasUIClassName(Rail)
  common.propValueOnlyToClassName(Rail, 'position')
  common.propKeyOnlyToClassName(Rail, 'attached')
  common.propKeyOrValueToClassName(Rail, 'close')
  common.propKeyOnlyToClassName(Rail, 'dividing')
  common.propKeyOnlyToClassName(Rail, 'internal')
  common.propValueOnlyToClassName(Rail, 'size')
  common.rendersChildren(Rail)

  it('renders an div element', () => {
    shallow(<Rail />)
      .should.have.tagName('div')
  })
})
