import _ from 'lodash'
import React from 'react'

import Input, { htmlInputPropNames } from 'src/elements/Input/Input'
import * as common from 'test/specs/commonTests'

describe.only('Input', () => {
  common.isConformant(Input)
  common.hasUIClassName(Input)

  common.implementsLabelProp(Input, {
    requiredShorthandProps: { className: 'label' },
  })
  common.implementsButtonProp(Input, {
    propKey: 'action',
    requiredShorthandProps: { className: 'button' },
  })
  common.implementsShorthandProp(Input, {
    propKey: 'input',
    ShorthandComponent: 'input',
    mapValueToProps: val => ({ type: val }),
  })

  common.propValueOnlyToClassName(Input, 'size')
  common.propKeyAndValueToClassName(Input, 'actionPosition', { className: 'action' })
  common.propKeyOnlyToClassName(Input, 'action')
  common.propKeyOnlyToClassName(Input, 'disabled')
  common.propKeyOnlyToClassName(Input, 'error')
  common.propKeyOnlyToClassName(Input, 'focus')
  common.propKeyOnlyToClassName(Input, 'fluid')
  common.propKeyOnlyToClassName(Input, 'inverted')
  common.propKeyAndValueToClassName(Input, 'labelPosition', { className: 'labeled' })
  common.propKeyOnlyToClassName(Input, 'label', { className: 'labeled' })
  common.propKeyOnlyToClassName(Input, 'loading')
  common.propKeyOnlyToClassName(Input, 'transparent')
  common.propKeyAndValueToClassName(Input, 'iconPosition', { className: 'icon' })
  common.propKeyOnlyToClassName(Input, 'icon')

  common.rendersChildren(Input)

  it('is type text by default', () => {
    Input.defaultProps.input.should.equal('text')
  })

  describe('input props', () => {
    htmlInputPropNames.forEach(propName => {
      it(`passes \`${propName}\` to the <input>`, () => {
        shallow(<Input {...{ [propName]: 'foo' }} />)
          .find('input')
          .should.have.prop(propName, 'foo')
      })
    })
  })
})
