import React from 'react'

import Input from 'src/elements/Input/Input'
import { htmlInputProps, SUI } from 'src/lib'
import * as common from 'test/specs/commonTests'

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
    propKey: 'action',
  })
  common.implementsCreateMethod(Input)
  common.implementsIconProp(Input)
  common.implementsLabelProp(Input, {
    shorthandDefaultProps: { className: 'label' },
  })
  common.implementsHTMLInputProp(Input, {
    alwaysPresent: true,
    assertExactMatch: false,
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

  common.propValueOnlyToClassName(Input, 'size', SUI.SIZES)

  describe('children', () => {
    it('renders with conditional children', () => {
      const wrapper = shallow(
        <Input>
          {true && <span />}
          {false && <div />}
        </Input>,
      )

      expect(wrapper.contains(<span />)).toBe(true)
      expect(wrapper.contains(<div />)).toBe(false)
    })
  })

  describe('input props', () => {
    htmlInputProps.forEach((propName) => {
      it(`passes \`${propName}\` to the <input>`, () => {
        const propValue = propName === 'onChange' ? () => null : 'foo'
        const wrapper = shallow(<Input {...{ [propName]: propValue }} />)

        // account for overloading the onChange prop
        const expectedValue = propName === 'onChange' ? wrapper.instance().handleChange : propValue

        expect(wrapper.find('input').prop(propName)).toBe(expectedValue)
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

        expect(wrapper.find('input').prop(propName)).toBe(expectedValue)
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
      expect(document.activeElement).toBe(input)

      wrapper.detach()
      document.body.removeChild(mountNode)
    })
  })

  describe('loading', () => {
    it("don't add icon if it's defined", () => {
      expect(
        shallow(<Input icon='user' loading />)
          .find('Icon')
          .prop('name'),
      ).toBe('user')
    })

    it("adds icon if it's not defined", () => {
      expect(
        shallow(<Input loading />)
          .find('Icon')
          .prop('name'),
      ).toBe('spinner')
    })
  })

  describe('onChange', () => {
    it('is called with (e, data) on change', () => {
      const onChange = jest.fn()
      const e = { target: { value: 'name' } }
      const props = { 'data-foo': 'bar', onChange }

      const wrapper = shallow(<Input {...props} />)

      wrapper.find('input').simulate('change', e)

      expect(onChange).toHaveBeenCalledTimes(1)
      expect(onChange).toHaveBeenCalledWith(
        expect.objectContaining(e),
        expect.objectContaining({ ...props, value: e.target.value }),
      )
    })

    it('is called with (e, data) on change when using children', () => {
      const onChange = jest.fn()
      const e = { target: { value: 'name' } }
      const props = { 'data-foo': 'bar', onChange }

      const wrapper = shallow(
        <Input {...props}>
          <input />
        </Input>,
      )

      wrapper.find('input').simulate('change', e)

      expect(onChange).toHaveBeenCalledTimes(1)
      expect(onChange).toHaveBeenCalledWith(
        expect.objectContaining(e),
        expect.objectContaining({ ...props, value: e.target.value }),
      )
    })
  })

  describe('ref', () => {
    it('maintains ref on child node', () => {
      const ref = jest.fn()
      const mountNode = document.createElement('div')
      document.body.appendChild(mountNode)

      const wrapper = mount(
        <Input>
          <input id='ref' ref={ref} />
        </Input>,
        { attachTo: mountNode },
      )

      const input = document.getElementById('ref')

      expect(ref).toHaveBeenCalledTimes(1)
      expect(ref).toHaveBeenCalledWith(input)

      wrapper.detach()
      document.body.removeChild(mountNode)
    })
  })

  describe('disabled', () => {
    it('is applied to the underlying html input element', () => {
      expect(
        shallow(<Input disabled />)
          .find('input')
          .prop('disabled'),
      ).toBe(true)

      expect(
        shallow(<Input disabled={false} />)
          .find('input')
          .prop('disabled'),
      ).toBe(false)
    })
  })

  describe('tabIndex', () => {
    it('is not set by default', () => {
      expect(
        shallow(<Input />)
          .find('input')
          .prop('tabIndex'),
      ).toBeUndefined()
    })

    it('defaults to -1 when disabled', () => {
      expect(
        shallow(<Input disabled />)
          .find('input')
          .prop('tabIndex'),
      ).toBe(-1)
    })

    it('can be set explicitly', () => {
      expect(
        shallow(<Input tabIndex={123} />)
          .find('input')
          .prop('tabIndex'),
      ).toBe(123)
    })

    it('can be set explicitly when disabled', () => {
      expect(
        shallow(<Input tabIndex={123} disabled />)
          .find('input')
          .prop('tabIndex'),
      ).toBe(123)
    })
  })

  describe('type', () => {
    it('is "text" by default', () => {
      expect(
        shallow(<Input />)
          .find('input')
          .prop('type'),
      ).toBe('text')
    })
  })

  describe('icon', () => {
    it('is second child', () => {
      expect(
        shallow(<Input icon='search' />)
          .children()
          .at(1)
          .is('Icon'),
      ).toBe(true)
    })

    it('is third child with action positioned left', () => {
      expect(
        shallow(<Input icon='search' action='foo' actionPosition='left' />)
          .children()
          .at(2)
          .is('Icon'),
      ).toBe(true)
    })

    it('is third child with label', () => {
      expect(
        shallow(<Input icon='search' label='foo' />)
          .children()
          .at(2)
          .is('Icon'),
      ).toBe(true)
    })

    it('is second child with action', () => {
      expect(
        shallow(<Input icon='search' iconPosition='left' action='foo' />)
          .children()
          .at(1)
          .is('Icon'),
      ).toBe(true)
    })

    it('is second child with label positioned right', () => {
      expect(
        shallow(<Input icon='search' iconPosition='left' label='foo' labelPosition='right' />)
          .children()
          .at(1)
          .is('Icon'),
      ).toBe(true)
    })
  })
})
