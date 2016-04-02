import React from 'react'
import { Simulate } from 'react-addons-test-utils'

import Button from 'src/elements/Button/Button'
import * as common from 'test/specs/commonTests'
import sandbox from 'test/utils/Sandbox-util'

describe('Button', () => {
  common.isConformant(Button)
  common.hasUIClassName(Button)
  common.rendersChildren(Button)

  it('has type button by default', () => {
    deprecatedRender(<Button />)
      .findTag('button')
      .getAttribute('type')
      .should.equal('button')
  })
  it('renders "Click Here" by default', () => {
    deprecatedRender(<Button />).assertText('Click Here')
  })
  it('inherits type', () => {
    deprecatedRender(<Button type='submit' />)
      .findTag('button')
      .getAttribute('type')
      .should.equal('submit')
  })
  it('spreads callbacks on the button element', () => {
    const handleClick = sandbox.spy()
    const button = deprecatedRender(<Button type='submit' onClick={handleClick} />).findTag('button')
    Simulate.click(button)
    handleClick.called.should.equal(true)
  })
})
