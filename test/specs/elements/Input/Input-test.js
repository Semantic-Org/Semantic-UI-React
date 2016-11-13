import cx from 'classnames'
import _ from 'lodash'
import React from 'react'
import { sandbox } from 'test/utils'

import Input, { htmlInputPropNames } from 'src/elements/Input/Input'
import * as common from 'test/specs/commonTests'

describe('Input', () => {
  common.isConformant(Input, { eventTargets: { onChange: 'input' } })
  common.hasUIClassName(Input)

  common.implementsLabelProp(Input, {
    shorthandDefaultProps: elProps => ({
      className: cx({
        label: !_.includes(elProps.className, 'label'),
      }),
    }),
  })
  common.implementsButtonProp(Input, {
    propKey: 'action',
    shorthandDefaultProps: elProps => ({
      className: cx({
        button: !_.includes(elProps.className, 'button'),
      }),
    }),
  })

  common.implementsHTMLInputProp(Input, {
    alwaysPresent: true,
    shorthandDefaultProps: { type: 'text' },
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

  it('renders a text <input> by default', () => {
    shallow(<Input />)
      .find('input')
      .should.have.prop('type', 'text')
  })

  describe('input props', () => {
    htmlInputPropNames.forEach(propName => {
      it(`passes \`${propName}\` to the <input>`, () => {
        const propValue = propName === 'onChange' ? () => null : 'foo'
        const wrapper = shallow(<Input {...{ [propName]: propValue }} />)

        // account for overloading the onChange prop
        const expectedValue = propName === 'onChange'
          ? wrapper.instance().handleChange
          : propValue

        wrapper
          .find('input')
          .should.have.prop(propName, expectedValue)
      })
    })
  })

  describe('onChange', () => {
    it('is called with (event, props) on change', () => {
      const spy = sandbox.spy()
      const event = { fake: 'event' }
      const props = { 'data-foo': 'bar', onChange: spy }

      const wrapper = shallow(<Input {...props} />)

      wrapper.find('input').simulate('change', event)

      spy.should.have.been.calledOnce()
      spy.should.have.been.calledWithMatch(event, props)
    })
  })
})
