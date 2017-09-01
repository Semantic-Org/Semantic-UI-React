import React from 'react'

import Checkbox from 'src/modules/Checkbox/Checkbox'
import * as common from 'test/specs/commonTests'
import { sandbox } from 'test/utils'

describe('Checkbox', () => {
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
      const wrapper = shallow(<Checkbox />)

      wrapper.find('input').should.not.be.checked()
      wrapper.simulate('click').find('input').should.be.checked()
      wrapper.simulate('click').find('input').should.not.be.checked()
    })
    it('can be checked but not unchecked when radio', () => {
      const wrapper = shallow(<Checkbox radio />)

      wrapper.find('input').should.not.be.checked()
      wrapper.simulate('click').find('input').should.be.checked()
      wrapper.simulate('click').find('input').should.be.checked()
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
      const wrapper = mount(<Checkbox indeterminate />)
      const checkboxNode = wrapper.getDOMNode()
      const input = checkboxNode.querySelector('input')

      input.indeterminate.should.be.true()

      wrapper.simulate('click').find('input')
      input.indeterminate.should.be.true()
    })
    it('can not be indeterminate', () => {
      const wrapper = mount(<Checkbox indeterminate={false} />)
      const checkboxNode = wrapper.getDOMNode()
      const input = checkboxNode.querySelector('input')

      input.indeterminate.should.be.false()

      wrapper.simulate('click').find('input')
      input.indeterminate.should.be.false()
    })
  })

  describe('defaultIndeterminate', () => {
    it('sets the initial indeterminate state', () => {
      const wrapper = mount(<Checkbox defaultIndeterminate />)
      const checkboxNode = wrapper.getDOMNode()
      const input = checkboxNode.querySelector('input')

      input.indeterminate.should.be.true()
    })

    it('unsets indeterminate state on any click', () => {
      const wrapper = mount(<Checkbox defaultIndeterminate />)
      const checkboxNode = wrapper.getDOMNode()
      const input = checkboxNode.querySelector('input')

      input.indeterminate.should.be.true()

      wrapper.simulate('click').find('input')
      input.indeterminate.should.be.false()

      wrapper.simulate('click').find('input')
      input.indeterminate.should.be.false()
    })
  })

  describe('disabled', () => {
    it('cannot be checked', () => {
      shallow(<Checkbox disabled />)
        .simulate('click')
        .find('input')
        .should.not.be.checked()
    })
    it('cannot be unchecked', () => {
      shallow(<Checkbox disabled defaultChecked />)
        .simulate('click')
        .find('input')
        .should.be.checked()
    })
  })

  describe('label', () => {
    it('adds the "fitted" class when not present', () => {
      shallow(<Checkbox name='firstName' />)
        .should.have.className('fitted')
    })
  })

  describe('onChange', () => {
    it('is called with (event { name, value, !checked }) on click', () => {
      const spy = sandbox.spy()
      const expectProps = { name: 'foo', value: 'bar', checked: false, indeterminate: true }
      mount(<Checkbox onChange={spy} {...expectProps} />)
        .simulate('click')

      spy.should.have.been.calledOnce()
      spy.should.have.been.calledWithMatch({}, {
        ...expectProps,
        checked: !expectProps.checked,
        indeterminate: false,
      })
    })
    it('is not called when the checkbox has the disabled prop set', () => {
      const spy = sandbox.spy()
      mount(<Checkbox disabled onChange={spy} />).simulate('click')
      spy.should.not.have.been.called()
    })
  })

  describe('onClick', () => {
    it('is called with (event { name, value, checked }) on label click', () => {
      const spy = sandbox.spy()
      const expectProps = { name: 'foo', value: 'bar', checked: false, indeterminate: true }
      mount(<Checkbox onClick={spy} {...expectProps} />)
        .simulate('click')

      spy.should.have.been.calledOnce()
      spy.should.have.been.calledWithMatch({}, {
        ...expectProps,
        checked: !expectProps.checked,
        indeterminate: expectProps.indeterminate,
      })
    })
    it('is not called when the checkbox has the disabled prop set', () => {
      const spy = sandbox.spy()
      mount(<Checkbox disabled onClick={spy} />).simulate('click')
      spy.should.not.have.been.called()
    })
  })

  describe('onMouseDown', () => {
    it('is called with (event { name, value, checked }) on label mouse down', () => {
      const onMousedDown = sandbox.spy()
      const expectProps = { name: 'foo', value: 'bar', checked: false, indeterminate: true }
      mount(<Checkbox onMouseDown={onMousedDown} {...expectProps} />)
        .simulate('mousedown')

      onMousedDown.should.have.been.calledOnce()
      onMousedDown.should.have.been.calledWithMatch({}, {
        ...expectProps,
        checked: expectProps.checked,
        indeterminate: expectProps.indeterminate,
      })
    })
    it('prevents default event', () => {
      const preventDefault = sandbox.spy()
      const wrapper = shallow(<Checkbox />)

      wrapper.simulate('mousedown', { preventDefault })
      preventDefault.should.have.been.calledOnce()
    })
    it('sets focus to container', () => {
      const mountNode = document.createElement('div')
      document.body.appendChild(mountNode)

      const wrapper = mount(<Checkbox />, { attachTo: mountNode })
      const input = document.querySelector('.ui.checkbox input')

      wrapper.simulate('mousedown')
      document.activeElement.should.equal(input)

      wrapper.detach()
      document.body.removeChild(mountNode)
    })
  })

  describe('readOnly', () => {
    it('cannot be checked', () => {
      shallow(<Checkbox readOnly />)
        .simulate('click')
        .find('input')
        .should.not.be.checked()
    })
    it('cannot be unchecked', () => {
      shallow(<Checkbox readOnly defaultChecked />)
        .simulate('click')
        .find('input')
        .should.be.checked()
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
})
