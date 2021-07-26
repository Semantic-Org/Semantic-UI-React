import React from 'react'

import Container from 'src/elements/Container/Container'
import * as common from 'test/specs/commonTests'

describe('Container', () => {
  common.isConformant(Container)
  common.forwardsRef(Container)
  common.rendersChildren(Container)
  common.hasUIClassName(Container)

  common.propKeyOnlyToClassName(Container, 'text')
  common.propKeyOnlyToClassName(Container, 'fluid')

  common.implementsTextAlignProp(Container)

  it('renders a <div /> element', () => {
    shallow(<Container />).should.have.tagName('div')
  })
})
