import _ from 'lodash'
import React from 'react'

import { htmlInputAttrs } from 'src/lib'
import Checkbox from 'src/modules/Checkbox/Checkbox'
import * as common from 'test/specs/commonTests'
import { domEvent, sandbox } from 'test/utils'

// ----------------------------------------
// Wrapper
// ----------------------------------------
// we need to unmount the dropdown after every test to ensure all event listeners are cleaned up
// wrap the render methods to update a global wrapper that is unmounted after each test
let attachTo
let wrapper
const wrapperMount = (element, opts) => {
  attachTo = document.createElement('div')
  document.body.appendChild(attachTo)

  wrapper = mount(element, { ...opts, attachTo })
  return wrapper
}
const wrapperShallow = (...args) => (wrapper = shallow(...args))

describe.only('Checkbox', () => {
  common.isConformant(Checkbox)
  common.hasUIClassName(Checkbox)

  common.propKeyOnlyToClassName(Checkbox, 'checked')
  common.propKeyOnlyToClassName(Checkbox, 'disabled')
  common.propKeyOnlyToClassName(Checkbox, 'readOnly', {
    className: 'read-only',
  })
  common.propKeyOnlyToClassName(Checkbox, 'slider')
  common.propKeyOnlyToClassName(Checkbox, 'toggle')

  common.implementsHTMLLabelProp(Checkbox, {
    alwaysPresent: true,
    autoGenerateKey: false,
  })

  beforeEach(() => {
    attachTo = undefined
    wrapper = undefined
  })

  afterEach(() => {
    if (wrapper) {
      if (wrapper.unmount) wrapper.unmount()
      if (wrapper.detach) wrapper.detach()
    }
    if (attachTo) document.body.removeChild(attachTo)
  })

  describe('aria', () => {
    ['aria-label', 'role'].forEach((propName) => {
      it(`passes "${propName}" to the <input>`, () => {
        shallow(<Checkbox {...{ [propName]: 'foo' }} />)
          .find('input')
          .should.have.prop(propName)
      })
    })
  })

  describe('checking', () => {
    it('can be checked and unchecked', () => {
      const event = { target: { tagName: 'LABEL' } }
      wrapperShallow(<Checkbox />)

      wrapper.find('input').should.not.be.checked()

      wrapper.find('label').simulate('click', event)
      wrapper.find('input').should.be.checked()

      wrapper.find('label').simulate('click', event)
      wrapper.find('input').should.not.be.checked()
    })
    it('can be checked but not unchecked when radio', () => {
      const event = { target: { tagName: 'LABEL' } }
      wrapperShallow(<Checkbox radio />)

      wrapper.find('input').should.not.be.checked()

      wrapper.find('label').simulate('click', event)
      wrapper.find('input').should.be.checked()

      wrapper.find('label').simulate('click', event)
      wrapper.find('input').should.be.checked()
    })
  })

  describe('defaultChecked', () => {
    it('sets the initial checked state', () => {
      shallow(<Checkbox defaultChecked />)
        .find('input')
        .should.be.checked()
    })
  })

  describe('indeterminate', () => {
    it('can be indeterminate', () => {
      wrapperMount(<Checkbox indeterminate />)
      const input = document.querySelector('.ui.checkbox input')

      input.indeterminate.should.be.true()

      domEvent.click(input)
      input.indeterminate.should.be.true()
    })
    it('can not be indeterminate', () => {
      wrapperMount(<Checkbox indeterminate={false} />)
      const input = document.querySelector('.ui.checkbox input')

      input.indeterminate.should.be.false()

      domEvent.click(input)
      input.indeterminate.should.be.false()
    })
  })

  describe('defaultIndeterminate', () => {
    it('sets the initial indeterminate state', () => {
      wrapperMount(<Checkbox defaultIndeterminate />)
      const input = document.querySelector('.ui.checkbox input')

      input.indeterminate.should.be.true()
    })

    it('unsets indeterminate state on any click', () => {
      wrapperMount(<Checkbox defaultIndeterminate />)
      const input = document.querySelector('.ui.checkbox input')

      input.indeterminate.should.be.true()

      domEvent.click(input)
      input.indeterminate.should.be.false()

      domEvent.click(input)
      input.indeterminate.should.be.false()
    })
  })

  describe('disabled', () => {
    it('cannot be checked', () => {
      wrapperShallow(<Checkbox disabled />)

      wrapper.simulate('click')
      wrapper.find('input').should.not.be.checked()
    })

    it('cannot be unchecked', () => {
      wrapperShallow(<Checkbox defaultChecked disabled />)

      wrapper.simulate('click')
      wrapper.find('input').should.be.checked()
    })

    it('is applied to the underlying html input element', () => {
      wrapperShallow(<Checkbox disabled />)
        .find('input')
        .should.have.prop('disabled', true)

      wrapperShallow(<Checkbox disabled={false} />)
        .find('input')
        .should.have.prop('disabled', false)
    })
  })

  describe('id', () => {
    it('passes value to the input', () => {
      shallow(<Checkbox id='foo' />)
        .find('input')
        .should.have.prop('id', 'foo')
    })

    it('adds htmlFor prop to the label', () => {
      shallow(<Checkbox id='foo' />)
        .find('label')
        .should.have.prop('htmlFor', 'foo')
    })

    it('adds htmlFor prop to the label when it is empty', () => {
      shallow(<Checkbox id='foo' label={null} />)
        .find('label')
        .should.have.prop('htmlFor', 'foo')
    })
  })

  describe('input', () => {
    // Heads up! Input handles some of html props
    const props = _.without(htmlInputAttrs, 'defaultChecked', 'disabled')

    _.forEach(props, (propName) => {
      it(`passes "${propName}" to the input`, () => {
        shallow(<Checkbox {...{ [propName]: 'radio' }} />)
          .find('input')
          .should.have.prop(propName)
      })
    })
  })

  describe('label', () => {
    it('adds the "fitted" class when not present', () => {
      shallow(<Checkbox name='firstName' />).should.have.className('fitted')
    })

    it('adds the "fitted" class when is null', () => {
      shallow(<Checkbox name='firstName' />).should.have.className('fitted')
    })

    it('does not add the "fitted" class when is not nil', () => {
      shallow(<Checkbox name='firstName' label='' />).should.not.have.className('fitted')

      shallow(<Checkbox name='firstName' label={0} />).should.not.have.className('fitted')
    })
  })

  describe('onChange', () => {
    it('is called with (e, data) on label click', () => {
      const onChange = sandbox.spy()
      const props = { name: 'foo', value: 'bar', checked: false, indeterminate: true }
      mount(<Checkbox onChange={onChange} {...props} />)
        .find('label')
        .simulate('click')

      onChange.should.have.been.calledOnce()
      onChange.should.have.been.calledWithMatch(
        {},
        {
          ...props,
          checked: true,
          indeterminate: false,
        },
      )
    })

    it('is not called when on change when "id" is passed', () => {
      const onChange = sandbox.spy()
      mount(<Checkbox id='foo' onChange={onChange} />)
        .find('label')
        .simulate('click')

      onChange.should.have.not.been.called()
    })
  })

  describe('onClick', () => {
    it('is called with (event, data) on mouseup', () => {
      const onClick = sandbox.spy()
      const props = { name: 'foo', value: 'bar', checked: false, indeterminate: true }
      mount(<Checkbox onClick={onClick} {...props} />).simulate('mouseup')

      onClick.should.have.been.calledOnce()
      onClick.should.have.been.calledWithMatch(
        {},
        {
          ...props,
          checked: true,
        },
      )
    })

    it('is not called when "id" is passed', () => {
      const onClick = sandbox.spy()
      mount(<Checkbox id='foo' onClick={onClick} />).simulate('mouseup')

      onClick.should.have.not.been.called()
    })
  })

  describe('onMouseDown', () => {
    it('is called with (event, data) on mouse down', () => {
      const onMousedDown = sandbox.spy()
      const props = { name: 'foo', value: 'bar', checked: false, indeterminate: true }
      mount(<Checkbox onMouseDown={onMousedDown} {...props} />).simulate('mousedown')

      onMousedDown.should.have.been.calledOnce()
      onMousedDown.should.have.been.calledWithMatch({}, props)
    })
    it('sets focus to container', () => {
      wrapperMount(<Checkbox />)
      const input = document.querySelector('.ui.checkbox input')

      domEvent.fire(input, 'mousedown')
      document.activeElement.should.equal(input)
    })
  })

  describe('onMouseUp', () => {
    it('is called with (event, data) on mouse up', () => {
      const onMouseUp = sandbox.spy()
      const props = { name: 'foo', value: 'bar', checked: false, indeterminate: true }
      mount(<Checkbox onMouseUp={onMouseUp} {...props} />).simulate('mouseup')

      onMouseUp.should.have.been.calledOnce()
      onMouseUp.should.have.been.calledWithMatch({}, props)
    })
  })

  describe('readOnly', () => {
    it('cannot be checked', () => {
      wrapperShallow(<Checkbox readOnly />)

      wrapper.simulate('click')
      wrapper.find('input').should.not.be.checked()
    })
    it('cannot be unchecked', () => {
      wrapperShallow(<Checkbox defaultChecked readOnly />)

      wrapper.simulate('click')
      wrapper.find('input').should.be.checked()
    })
  })

  describe('tabIndex', () => {
    it('defaults to 0', () => {
      shallow(<Checkbox />)
        .find('input')
        .should.have.prop('tabIndex', 0)
    })
    it('defaults to -1 when disabled', () => {
      shallow(<Checkbox disabled />)
        .find('input')
        .should.have.prop('tabIndex', -1)
    })
    it('can be set explicitly', () => {
      shallow(<Checkbox tabIndex={123} />)
        .find('input')
        .should.have.prop('tabIndex', 123)
    })
    it('can be set explicitly when disabled', () => {
      shallow(<Checkbox tabIndex={123} disabled />)
        .find('input')
        .should.have.prop('tabIndex', 123)
    })
  })

  describe('type', () => {
    it('renders an input of type checkbox when not set', () => {
      shallow(<Checkbox />)
        .find('input')
        .should.have.prop('type', 'checkbox')
    })
    it('sets the input type ', () => {
      shallow(<Checkbox type='checkbox' />)
        .find('input')
        .should.have.prop('type', 'checkbox')

      shallow(<Checkbox type='radio' />)
        .find('input')
        .should.have.prop('type', 'radio')
    })
  })

  describe('comparisons with native DOM', () => {
    const assertMatrix = [
      // Heads up!
      // Space key invokes a click on the hidden input.
      {
        description: 'space key',
        event: 'click',
        target: 'input',
      },
      {
        description: 'space key with an id',
        event: 'click',
        target: 'input',
        id: 'foo',
      },
      {
        description: 'click on label',
        event: 'click',
        target: 'label',
      },
      {
        description: 'click on label with an id',
        event: 'click',
        target: 'label',
        id: 'foo',
      },
    ]

    assertMatrix.forEach(({ description, event, target, ...props }) => {
      it(description, () => {
        const dataId = _.uniqueId('checkbox')
        const selector = `[data-id=${dataId}] ${target}`

        const onClick = sandbox.spy()
        const onChange = sandbox.spy()

        wrapperMount(
          <Checkbox {...props} data-id={dataId} onClick={onClick} onChange={onChange} />,
          { attachTo },
        )
        domEvent.fire(selector, event)

        onClick.should.have.been.calledOnce()
        onChange.should.have.been.calledOnce()

        onChange.should.have.been.calledAfter(onClick)
      })
    })
  })

  describe('Controlled component', () => {
    it('toggles state on "change" with "setState" as function', () => {
      // eslint-disable-next-line react/no-multi-comp
      class ControlledCheckbox extends React.Component {
        state = {}
        toggle = () => this.setState(({ checked }) => ({ checked: !checked }))
        render() {
          return <Checkbox checked={this.state.checked} onChange={this.toggle} />
        }
      }

      wrapperMount(<ControlledCheckbox />)
      const inputNode = wrapper.find('input').instance()
      inputNode.click()
      inputNode.should.have.property('checked', true)
    })

    it('toggles state on "click" with "setState" as function', () => {
      // eslint-disable-next-line react/no-multi-comp
      class ControlledCheckbox extends React.Component {
        state = {}
        toggle = () => this.setState(({ checked }) => ({ checked: !checked }))
        render() {
          return <Checkbox checked={this.state.checked} onClick={this.toggle} />
        }
      }
      wrapperMount(<ControlledCheckbox />)
        .find('input')
        .simulate('click')
        .instance()
        .should.have.property('checked', true)
    })
  })
})
