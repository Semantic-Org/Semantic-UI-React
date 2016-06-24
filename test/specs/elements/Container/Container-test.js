import React from 'react'

import Container from 'src/elements/Container/Container'
import * as common from 'test/specs/commonTests'

describe('Container', () => {
  common.isConformant(Container)
  common.rendersChildren(Container)
  common.hasUIClassName(Container)

  common.propKeyOnlyToClassName(Container, 'text')
  common.propKeyAndValueToClassName(Container, 'aligned')
  common.propKeyOnlyToClassName(Container, 'fluid')

  it('renders a <div /> element', () => {
    shallow(<Container />)
      .should.have.tagName('div')
  })

  it('does not have aligned class when justified', () => {
    shallow(<Container aligned='justified' />)
      .should.not.have.className('aligned')
  })
})
