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
      const expectProps = { name: 'foo', value: 'bar', checked: false }
      mount(<Checkbox onChange={spy} {...expectProps} />)
        .simulate('click')

      spy.should.have.been.calledOnce()
      spy.should.have.been.calledWithMatch({}, {})
      spy.firstCall.args[1]
        .should.deep.equal({ ...expectProps, checked: true })
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
      const expectProps = { name: 'foo', value: 'bar', checked: false }
      mount(<Checkbox onClick={spy} {...expectProps} />)
        .simulate('click')

      spy.should.have.been.calledOnce()
      spy.should.have.been.calledWithMatch({}, {})
      spy.firstCall.args[1]
        .should.deep.equal(expectProps)
    })
    it('is not called when the checkbox has the disabled prop set', () => {
      const spy = sandbox.spy()
      mount(<Checkbox disabled onClick={spy} />).simulate('click')
      spy.should.not.have.been.called()
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
