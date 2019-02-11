import _ from 'lodash'
import React from 'react'

import { htmlInputAttrs } from 'src/lib'
import Checkbox from 'src/modules/Checkbox/Checkbox'
import * as common from 'test/specs/commonTests'
import { domEvent, sandbox } from 'test/utils'

const mockedMouseEvent = { button: 0 }

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

describe('Checkbox', () => {
  common.isConformant(Checkbox, {
    disabledHandlers: ['onClick'],
  })
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
      wrapperShallow(<Checkbox />)

      wrapper.find('input').should.not.be.checked()

      wrapper.simulate('mouseup', mockedMouseEvent)
      wrapper.find('input').should.be.checked()

      wrapper.simulate('mouseup', mockedMouseEvent)
      wrapper.find('input').should.not.be.checked()
    })
    it('can be checked but not unchecked when radio', () => {
      wrapperShallow(<Checkbox radio />)

      wrapper.find('input').should.not.be.checked()

      wrapper.simulate('mouseup', mockedMouseEvent)
      wrapper.find('input').should.be.checked()

      wrapper.simulate('mouseup', mockedMouseEvent)
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

      wrapper.simulate('mouseup', mockedMouseEvent)
      wrapper.find('input').should.not.be.checked()
    })

    it('cannot be unchecked', () => {
      wrapperShallow(<Checkbox defaultChecked disabled />)

      wrapper.simulate('mouseup', mockedMouseEvent)
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
    it('is called with (e, data) on mouse up', () => {
      const onChange = sandbox.spy()
      const props = { name: 'foo', value: 'bar', checked: false, indeterminate: true }
      mount(<Checkbox onChange={onChange} {...props} />).simulate('mouseup', mockedMouseEvent)

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
      mount(<Checkbox id='foo' onChange={onChange} />).simulate('mouseup', mockedMouseEvent)

      onChange.should.have.not.been.called()
    })

    it('is not called with other button click in mouse up', () => {
      const onChange = sandbox.spy()
      mount(<Checkbox id='foo' onChange={onChange} />).simulate('mouseup', { button: 2 })

      onChange.should.have.not.been.called()
    })
  })

  describe('onClick', () => {
    it('is called with (event, data) on mouseup', () => {
      const onClick = sandbox.spy()
      const props = { name: 'foo', value: 'bar', checked: false, indeterminate: true }
      mount(<Checkbox onClick={onClick} {...props} />).simulate('mouseup', mockedMouseEvent)

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
      mount(<Checkbox id='foo' onClick={onClick} />).simulate('mouseup', mockedMouseEvent)

      onClick.should.have.not.been.called()
    })

    it('is not called with left button click in mouse up', () => {
      const onClick = sandbox.spy()
      const mockedMouseRightClickEvent = { button: 2 }
      mount(<Checkbox id='foo' onClick={onClick} />).simulate('mouseup', mockedMouseRightClickEvent)

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
    it('prevents default event', () => {
      const preventDefault = sandbox.spy()
      wrapperShallow(<Checkbox />)

      wrapper.simulate('mousedown', { preventDefault })
      preventDefault.should.have.been.calledOnce()
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
      mount(<Checkbox onMouseUp={onMouseUp} {...props} />).simulate('mouseup', mockedMouseEvent)

      onMouseUp.should.have.been.calledOnce()
      onMouseUp.should.have.been.calledWithMatch({}, props)
    })

    it('is called with (event, data) on mouse up with right button', () => {
      const onMouseUp = sandbox.spy()
      mount(<Checkbox id='foo' onMouseUp={onMouseUp} />).simulate('mouseup', { button: 2 })

      onMouseUp.should.have.been.calledOnce()
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
      {
        description: 'click on label: fires on mouse up',
        event: 'mouseup',
        target: 'label',
      },
      {
        description: 'key on input: fires on space key',
        event: 'click',
        target: 'input',
      },

      {
        description: 'click on label: fires on mouse click',
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
    const getControlledCheckbox = isOnClick =>
      class ControlledCheckbox extends React.Component {
        state = { checked: false }
        toggle = () => this.setState(prevState => ({ checked: !prevState.checked }))
        render() {
          const handler = isOnClick ? { onClick: this.toggle } : { onChange: this.toggle }
          return <Checkbox label='Check this box' checked={this.state.checked} {...handler} />
        }
      }

    it('toggles state on "change" with "setState" as function', () => {
      const ControlledCheckbox = getControlledCheckbox(false)
      wrapperMount(<ControlledCheckbox />)
      domEvent.fire(document.querySelector('input'), 'click')
      wrapper.state().should.eql({ checked: true })
    })

    it('toggles state on "click" with "setState" as function', () => {
      const ControlledCheckbox = getControlledCheckbox(true)
      wrapperMount(<ControlledCheckbox />)
      domEvent.fire(document.querySelector('input'), 'click')
      wrapper.state().should.eql({ checked: true })
    })
  })
})
