import React from 'react'

import Container from 'src/elements/Container/Container'
import * as common from 'test/specs/commonTests'

describe('Container', () => {
  common.isConformant(Container)
  common.rendersChildren(Container)
  common.hasUIClassName(Container)

  common.propKeyOnlyToClassName(Container, 'text')
  common.propKeyOnlyToClassName(Container, 'left', {className: "aligned"})
  common.propKeyOnlyToClassName(Container, 'center', {className: "aligned"})
  common.propKeyOnlyToClassName(Container, 'right', {className: "aligned"})
  common.propKeyOnlyToClassName(Container, 'justified')
  common.propKeyOnlyToClassName(Container, 'fluid')

  it('renders a <div /> element', () => {
    shallow(<Container />)
      .should.have.tagName('div')
  })

  it('adds the "Container" class', () => {
    shallow(<Container />)
      .should.have.className('container')
  })
})
