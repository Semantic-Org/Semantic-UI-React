import React from 'react'

import Button from 'src/elements/Button/Button'
import * as common from 'test/specs/commonTests'
import sandbox from 'test/utils/Sandbox-util'

describe('Button', () => {
  common.isConformant(Button)
  common.hasUIClassName(Button)
  common.rendersChildren(Button)

  it('has type button by default', () => {
    shallow(<Button />)
      .find('button')
      .should.have.prop('type', 'button')
  })
  it('inherits type', () => {
    shallow(<Button type='submit' />)
      .find('button')
      .should.have.prop('type', 'submit')
  })
  it('calls onClick when clicked', () => {
    const handleClick = sandbox.spy()
    shallow(<Button type='submit' onClick={handleClick} />)
      .simulate('click')

    handleClick.should.have.been.calledOnce()
  })
})
