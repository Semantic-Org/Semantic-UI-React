import React from 'react'

import Icon from 'src/elements/Icon/Icon'
import * as common from 'test/specs/commonTests'

describe('Icon', () => {
  common.isConformant(Icon)

  it('renders an <i /> element', () => {
    shallow(<Icon />)
      .should.have.tagName('i')
  })

  it('adds the "icon" class', () => {
    shallow(<Icon />)
      .should.have.className('icon')
  })
})
