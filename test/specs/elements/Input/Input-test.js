import React from 'react'

import Input from 'src/elements/Input/Input'
import * as common from 'test/specs/commonTests'

describe('Input', () => {
  common.isConformant(Input)
  common.hasUIClassName(Input)
  // TODO: inputs do not render child text, only child components in special cases
  // see component and find solution
  // perhaps splitting rendersChildText() and rendersChildComponents()
  // common.rendersChildren(Input)

  it('has the input type of text by default', () => {
    shallow(<Input />)
      .find('input')
      .should.have.prop('type', 'text')
  })

  it('allows a defaultValue', () => {
    shallow(<Input defaultValue='John' />)
      .find('input')
      .should.have.value('John')
  })

  it('spreads type on the input element', () => {
    shallow(<Input type='phone' />)
      .find('input')
      .should.have.prop('type', 'phone')
  })

  it('spreads name on the input element', () => {
    shallow(<Input name='emailAddress' />)
      .find('input')
      .should.have.prop('name', 'emailAddress')
  })

  it('adds an Icon given an icon class and prop', () => {
    shallow(<Input className='icon' icon='linkedin' />)
      .should.have.descendants('Icon')
  })
})
