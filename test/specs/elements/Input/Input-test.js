import React from 'react'

import Input from 'src/elements/Input/Input'
import { htmlInputProps } from 'src/lib'
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
  common.rendersChildren(Input, {
    rendersContent: false,
  })

  common.implementsButtonProp(Input, {
    autoGenerateKey: false,
    propKey: 'action',
  })
  common.implementsCreateMethod(Input)
  common.implementsIconProp(Input, { autoGenerateKey: false })
  common.implementsLabelProp(Input, {
    autoGenerateKey: false,
    shorthandDefaultProps: { className: 'label' },
  })
  common.implementsHTMLInputProp(Input, {
    alwaysPresent: true,
    assertExactMatch: false,
    autoGenerateKey: false,
    shorthandDefaultProps: { type: 'text' },
  })

  common.propKeyAndValueToClassName(Input, 'actionPosition', ['left'], { className: 'action' })
  common.propKeyAndValueToClassName(Input, 'iconPosition', ['left'], { className: 'icon' })
  common.propKeyAndValueToClassName(
    Input,
    'labelPosition',
    ['left', 'right', 'left corner', 'right corner'],
    {
      className: 'labeled',
    },
  )

  common.propKeyOnlyToClassName(Input, 'action')
  common.propKeyOnlyToClassName(Input, 'disabled')
  common.propKeyOnlyToClassName(Input, 'error')
  common.propKeyOnlyToClassName(Input, 'fluid')
  common.propKeyOnlyToClassName(Input, 'focus')
  common.propKeyOnlyToClassName(Input, 'inverted')
  common.propKeyOnlyToClassName(Input, 'label', { className: 'labeled' })
  common.propKeyOnlyToClassName(Input, 'loading')
  common.propKeyOnlyToClassName(Input, 'loading', { className: 'icon' })
  common.propKeyOnlyToClassName(Input, 'transparent')
  common.propKeyOnlyToClassName(Input, 'icon')

  common.propValueOnlyToClassName(Input, 'size', [
    'mini',
    'small',
    'large',
    'big',
    'huge',
    'massive',
  ])

  it('renders with conditional children', () => {
    shallow(
      <Input>
        {true && <span />}
        {false && <div />}
      </Input>,
    )
      .should.contain(<span />)
      .should.not.contain(<div />)
  })

  it('renders a text <input> by default', () => {
    shallow(<Input />)
      .find('input')
      .should.have.prop('type', 'text')
  })

  describe('input props', () => {
    htmlInputProps.forEach((propName) => {
      it(`passes \`${propName}\` to the <input>`, () => {
        const propValue = propName === 'onChange' ? () => null : 'foo'
        const wrapper = shallow(<Input {...{ [propName]: propValue }} />)

        // account for overloading the onChange prop
        const expectedValue = propName === 'onChange' ? wrapper.instance().handleChange : propValue

        wrapper.find('input').should.have.prop(propName, expectedValue)
      })

      it(`passes \`${propName}\` to the <input> when using children`, () => {
        const propValue = propName === 'onChange' ? () => null : 'foo'
        const wrapper = shallow(
          <Input {...{ [propName]: propValue }}>
            <input />
          </Input>,
        )

        // account for overloading the onChange prop
        const expectedValue = propName === 'onChange' ? wrapper.instance().handleChange : propValue

        wrapper.find('input').should.have.prop(propName, expectedValue)
      })
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

  describe('select', () => {
    it('can be set via a ref', () => {
      const mountNode = document.createElement('div')
      document.body.appendChild(mountNode)

      const value = 'expect this text to be selected'
      const wrapper = mount(<Input value={value} />, { attachTo: mountNode })
      wrapper.instance().select()

      window
        .getSelection()
        .toString()
        .should.equal(value)

      wrapper.detach()
      document.body.removeChild(mountNode)
    })
  })

  describe('loading', () => {
    it("don't add icon if it's defined", () => {
      shallow(<Input icon='user' loading />)
        .find('Icon')
        .should.have.prop('name', 'user')
    })

    it("adds icon if it's not defined", () => {
      shallow(<Input loading />)
        .find('Icon')
        .should.have.prop('name', 'spinner')
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
        </Input>,
      )

      wrapper.find('input').simulate('change', e)

      spy.should.have.been.calledOnce()
      spy.should.have.been.calledWithMatch(e, { ...props, value: e.target.value })
    })
  })

  describe('ref', () => {
    it('maintains ref on child node', () => {
      const ref = sandbox.spy()
      const mountNode = document.createElement('div')
      document.body.appendChild(mountNode)

      const wrapper = mount(
        <Input>
          <input ref={ref} />
        </Input>,
        { attachTo: mountNode },
      )
      const input = document.querySelector('.ui.input input')

      ref.should.have.been.calledOnce()
      ref.should.have.been.calledWithMatch(input)
      wrapper.instance().inputRef.current.should.equal(input)

      wrapper.detach()
      document.body.removeChild(mountNode)
    })
  })

  describe('disabled', () => {
    it('is applied to the underlying html input element', () => {
      shallow(<Input disabled />)
        .find('input')
        .should.have.prop('disabled', true)

      shallow(<Input disabled={false} />)
        .find('input')
        .should.have.prop('disabled', false)
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

  describe('icon', () => {
    it('is second child', () => {
      shallow(<Input icon='search' />)
        .children()
        .at(1)
        .is('Icon')
        .should.be.true()
    })

    it('is third child with action positioned left', () => {
      shallow(<Input icon='search' action='foo' actionPosition='left' />)
        .children()
        .at(2)
        .is('Icon')
        .should.be.true()
    })

    it('is third child with label', () => {
      shallow(<Input icon='search' label='foo' />)
        .children()
        .at(2)
        .is('Icon')
        .should.be.true()
    })

    it('is second child with action', () => {
      shallow(<Input icon='search' iconPosition='left' action='foo' />)
        .children()
        .at(1)
        .is('Icon')
        .should.be.true()
    })

    it('is second child with label positioned right', () => {
      shallow(<Input icon='search' iconPosition='left' label='foo' labelPosition='right' />)
        .children()
        .at(1)
        .is('Icon')
        .should.be.true()
    })
  })
})
