import React from 'react'

import Input from 'src/elements/Input/Input'
import * as common from 'test/specs/commonTests'

describe('Input', () => {
  common.isConformant(Input)
  common.hasUIClassName(Input)
  // TODO: inputs do not render child text, only child components in special cases
  // see component and find solution
  // common.rendersChildren(Input)

  it('has the input type of text by default', () => {
    deprecatedRender(<Input />)
      .findTag('input')
      .getAttribute('type')
      .should.equal('text')
  })

  it('allows a defaultValue', () => {
    deprecatedRender(<Input defaultValue='John' />)
      .findTag('input')
      .value.should.equal('John')
  })

  it('spreads type on the input element', () => {
    deprecatedRender(<Input type='phone' />)
      .findTag('input')
      .getAttribute('type')
      .should.equal('phone')
  })

  it('spreads name on the input element', () => {
    deprecatedRender(<Input name='emailAddress' />)
      .findTag('input')
      .getAttribute('name')
      .should.equal('emailAddress')
  })

  it('adds an icon element given an icon class and prop', () => {
    deprecatedRender(<Input className='icon' icon='linkedin' />)
      .findTag('i')
  })
})
