import React from 'react'

import Checkbox from 'src/modules/Checkbox/Checkbox'
import * as common from 'test/specs/commonTests'

describe('Checkbox', () => {
  common.isConformant(Checkbox)
  common.hasUIClassName(Checkbox)
  common.rendersChildren(Checkbox)

  it('can be checked by default', () => {
    deprecatedRender(<Checkbox defaultChecked name='firstName' />)
      .findTag('input')
      .checked.should.equal(true)
  })
  it('should have a semantic ui plugin to handle the check action', () => {
    deprecatedRender(<Checkbox name='firstName' label='Include First' />)
      .first()
      .element.checkbox.called.should.equal(true)
  })
  it('should have a fitted class if no label is given', () => {
    deprecatedRender(<Checkbox name='firstName' />).findClass('fitted')
  })
})
