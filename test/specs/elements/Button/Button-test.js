import React from 'react'
import { Simulate } from 'react-addons-test-utils'
import sandbox from '../../../utils/Sandbox-util'
import { Button } from 'stardust'

describe('Button', () => {
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
  it('renders its children', () => {
    deprecatedRender(<Button>Save Now</Button>).assertText('Save Now')
  })
  it('spreads callbacks on the button element', () => {
    const handleClick = sandbox.spy()
    const button = deprecatedRender(<Button type='submit' onClick={handleClick} />).findTag('button')
    Simulate.click(button)
    handleClick.called.should.equal(true)
  })
})
