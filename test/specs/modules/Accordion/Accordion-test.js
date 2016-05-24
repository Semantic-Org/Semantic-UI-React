import React from 'react'

import Checkbox from 'src/modules/Checkbox/Checkbox'
import * as common from 'test/specs/commonTests'

describe('Checkbox', () => {
  common.isConformant(Checkbox)
  common.hasUIClassName(Checkbox)
  common.rendersChildren(Checkbox)

  it('can be checked by default', () => {
    shallow(<Checkbox defaultChecked name='firstName' />)
      .find('input')
      .should.be.checked()
  })
  it('should init the semantic ui plugin', () => {
    mount(<Checkbox />)
      .instance()
      // the component exposes the jQuery element as 'element'
      // 'checkbox' is the jQuery plugin
      .element.checkbox.called.should.equal(true)
  })
  it('should have a fitted class if no label is given', () => {
    shallow(<Checkbox name='firstName' />)
      .should.have.className('fitted')
  })
})
