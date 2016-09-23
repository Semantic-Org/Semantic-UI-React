import React from 'react'

import Input from 'src/elements/Input/Input'
import * as common from 'test/specs/commonTests'

describe.only('Input', () => {
  common.isConformant(Input)
  common.hasUIClassName(Input)

  common.implementsLabelProp(Input, {
    requiredShorthandProps: {
      className: 'label',
    },
  })
  common.implementsShorthandProp(Input, {
    propKey: 'input',
    ShorthandComponent: 'input',
    mapValueToProps: val => ({ type: 'text' }),
  })

  common.propKeyOnlyToClassName(Input, 'disabled')
  common.propKeyOnlyToClassName(Input, 'error')
  common.propKeyOnlyToClassName(Input, 'fluid')
  common.propKeyOnlyToClassName(Input, 'inverted')
  common.propKeyOnlyToClassName(Input, 'loading')
  common.propKeyOnlyToClassName(Input, 'transparent')
  common.propValueOnlyToClassName(Input, 'size')

  common.rendersChildren(Input)

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

  it('adds an Icon given prop, but no class', () => {
    shallow(<Input icon='linkedin' />)
      .should.have.descendants('Icon')
  })
})
