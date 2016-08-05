import React from 'react'

import Rail from 'src/elements/Rail/Rail'
import * as common from 'test/specs/commonTests'

const requiredProps = { position: 'left' }

describe('Rail', () => {
  common.isConformant(Rail, requiredProps)
  common.hasUIClassName(Rail, requiredProps)
  common.propValueOnlyToClassName(Rail, 'position', requiredProps)
  common.propKeyOnlyToClassName(Rail, 'attached', requiredProps)
  common.propKeyOrValueToClassName(Rail, 'close', requiredProps)
  common.propKeyOnlyToClassName(Rail, 'dividing', requiredProps)
  common.propKeyOnlyToClassName(Rail, 'internal', requiredProps)
  common.propValueOnlyToClassName(Rail, 'size', requiredProps)
  common.rendersChildren(Rail, requiredProps)

  it('renders an div element', () => {
    shallow(<Rail position='left' />)
      .should.have.tagName('div')
  })
})
