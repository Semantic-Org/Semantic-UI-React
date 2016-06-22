import React from 'react'

import Divider from 'src/elements/Divider/Divider'
import * as common from 'test/specs/commonTests'

describe('Divider', () => {
  common.isConformant(Divider)

  it('renders a <div /> element', () => {
    shallow(<Divider />)
      .should.have.tagName('div')
  })

  it('adds the "divider" class', () => {
    shallow(<Divider />)
      .should.have.className('divider')
  })
})
