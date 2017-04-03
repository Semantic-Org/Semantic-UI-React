import React from 'react'

import Input from 'src/elements/Input/Input'
import { htmlInputProps, SUI } from 'src/lib'
import * as common from 'test/specs/commonTests'
import { sandbox } from 'test/utils'

describe('Input', () => {
  common.isConformant(Input, {
    eventTargets: {
      // keyboard
      onKeyDown: 'input',
      onKeyPress: 'input',
      onKeyUp: 'input',

      // focus
      onFocus: 'input',
      onBlur: 'input',

      // form
      onChange: 'input',
      onInput: 'input',

      // mouse
      onClick: 'input',
      onContextMenu: 'input',
      onDrag: 'input',
      onDragEnd: 'input',
      onDragEnter: 'input',
      onDragExit: 'input',
      onDragLeave: 'input',
      onDragOver: 'input',
      onDragStart: 'input',
      onDrop: 'input',
      onMouseDown: 'input',
      onMouseEnter: 'input',
      onMouseLeave: 'input',
      onMouseMove: 'input',
      onMouseOut: 'input',
      onMouseOver: 'input',
      onMouseUp: 'input',

      // selection
      onSelect: 'input',

      // touch
      onTouchCancel: 'input',
      onTouchEnd: 'input',
      onTouchMove: 'input',
      onTouchStart: 'input',
    },
  })
  common.hasUIClassName(Input)
  common.rendersChildren(Input)

  common.implementsLabelProp(Input, {
    shorthandDefaultProps: { className: 'label' },
  })
  common.implementsButtonProp(Input, {
    propKey: 'action',
    shorthandDefaultProps: { className: 'button' },
  })
  common.implementsCreateMethod(Input)
  common.implementsHTMLInputProp(Input, {
    alwaysPresent: true,
    shorthandDefaultProps: { type: 'text' },
  })

  common.propKeyAndValueToClassName(Input, 'actionPosition', ['left'], { className: 'action' })
  common.propKeyAndValueToClassName(Input, 'iconPosition', ['left'], { className: 'icon' })
  common.propKeyAndValueToClassName(Input, 'labelPosition', ['left', 'right', 'left corner', 'right corner'], {
    className: 'labeled',
  })

  common.propKeyOnlyToClassName(Input, 'action')
  common.propKeyOnlyToClassName(Input, 'disabled')
  common.propKeyOnlyToClassName(Input, 'error')
  common.propKeyOnlyToClassName(Input, 'fluid')
  common.propKeyOnlyToClassName(Input, 'focus')
  common.propKeyOnlyToClassName(Input, 'inverted')
  common.propKeyOnlyToClassName(Input, 'label', { className: 'labeled' })
  common.propKeyOnlyToClassName(Input, 'loading')
  common.propKeyOnlyToClassName(Input, 'transparent')
  common.propKeyOnlyToClassName(Input, 'icon')

  common.propValueOnlyToClassName(Input, 'size', SUI.SIZES)

  it('renders with conditional children', () => {
    shallow(
      <Input>
        {true && <span></span>}
        {false && <div></div>}
      </Input>
    )
      .should.contain(<span></span>)
      .should.not.contain(<div></div>)
  })

  it('renders a text <input> by default', () => {
    shallow(<Input />)
      .find('input')
      .should.have.prop('type', 'text')
  })

  describe('input props', () => {
    htmlInputProps.forEach(propName => {
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

      it(`passes \`${propName}\` to the <input> when using children`, () => {
        const propValue = propName === 'onChange' ? () => null : 'foo'
        const wrapper = shallow(
          <Input {...{ [propName]: propValue }}>
            <input />
          </Input>
        )

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
    it('is called with (e, data) on change', () => {
      const spy = sandbox.spy()
      const e = { target: { value: 'name' } }
      const props = { 'data-foo': 'bar', onChange: spy }

      const wrapper = shallow(<Input {...props} />)

      wrapper.find('input').simulate('change', e)

      spy.should.have.been.calledOnce()
      spy.should.have.been.calledWithMatch(e, { ...props, value: e.target.value })
    })

    it('is called with (e, data) on change when using children', () => {
      const spy = sandbox.spy()
      const e = { target: { value: 'name' } }
      const props = { 'data-foo': 'bar', onChange: spy }

      const wrapper = shallow(
        <Input {...props}>
          <input />
        </Input>
      )

      wrapper.find('input').simulate('change', e)

      spy.should.have.been.calledOnce()
      spy.should.have.been.calledWithMatch(e, { ...props, value: e.target.value })
    })
  })

  describe('tabIndex', () => {
    it('is not set by default', () => {
      shallow(<Input />)
        .find('input')
        .should.not.have.prop('tabIndex')
    })
    it('defaults to -1 when disabled', () => {
      shallow(<Input disabled />)
        .find('input')
        .should.have.prop('tabIndex', -1)
    })
    it('can be set explicitly', () => {
      shallow(<Input tabIndex={123} />)
        .find('input')
        .should.have.prop('tabIndex', 123)
    })
    it('can be set explicitly when disabled', () => {
      shallow(<Input tabIndex={123} disabled />)
        .find('input')
        .should.have.prop('tabIndex', 123)
    })
  })

  describe('focus', () => {
    it('can be set via a ref', () => {
      const mountNode = document.createElement('div')
      document.body.appendChild(mountNode)

      const wrapper = mount(<Input />, { attachTo: mountNode })
      wrapper.instance().focus()

      const input = document.querySelector('.ui.input input')
      document.activeElement.should.equal(input)

      wrapper.detach()
      document.body.removeChild(mountNode)
    })
  })
})
