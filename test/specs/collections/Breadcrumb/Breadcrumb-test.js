import React from 'react'

import Breadcrumb from 'src/collections/Breadcrumb/Breadcrumb'
import * as common from 'test/specs/commonTests'

describe('Breadcrumb', () => {
  common.isConformant(Breadcrumb)
  common.hasUIClassName(Breadcrumb)
  common.rendersChildren(Breadcrumb)

  it('renders a <div /> element', () => {
    shallow(<Breadcrumb />)
      .should.have.tagName('div')
  })
})
