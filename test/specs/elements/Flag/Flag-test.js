import React from 'react'

import Flag from 'src/elements/Flag/Flag'
import * as common from 'test/specs/commonTests'

describe('Flag', () => {
  common.isConformant(Flag)

  it('renders an <i /> element', () => {
    shallow(<Flag />)
      .should.have.tagName('i')
  })

  it('adds the "flag" class', () => {
    shallow(<Flag />)
      .should.have.className('flag')
  })

  it('passes property "name" to class', () => {
    shallow(<Flag name='ru' />)
      .should.have.className('ru')
  })
})
