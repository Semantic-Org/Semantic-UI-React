import _ from 'lodash'
import React from 'react'

import Checkbox from 'src/modules/Checkbox/Checkbox'
import * as common from 'test/specs/commonTests'
import { sandbox } from 'test/utils'

describe('Checkbox', () => {
  common.isConformant(Checkbox)
  common.hasUIClassName(Checkbox)

  describe('defaultChecked', () => {
    it('sets the initial checked state', () => {
      // consoleUtil.disableOnce()
      shallow(<Checkbox defaultChecked />)
        .find('input')
        .should.be.checked()
    })
  })

  it('adds the "fitted" class if no label is given', () => {
    shallow(<Checkbox name='firstName' />)
      .should.have.className('fitted')
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

  describe('inputType', () => {
    it('overrides type', () => {
      // for every type, override with each inputType
      _.each(Checkbox._meta.props.type, (type) => {
        _.each(Checkbox._meta.props.inputType, (inputType) => {
          shallow(<Checkbox type={type} inputType={inputType} />)
            .find('input')
            .should.have.prop('type', inputType)
        })
      })
    })
  })

  describe('type', () => {
    it('renders an input of type checkbox when not set', () => {
      shallow(<Checkbox />)
        .find('input')
        .should.have.prop('type', 'checkbox')
    })
    it('renders an input of type checkbox when set to slider', () => {
      shallow(<Checkbox type='slider' />)
        .find('input')
        .should.have.prop('type', 'checkbox')
    })
    it('renders an input of type checkbox when set to toggle', () => {
      shallow(<Checkbox type='toggle' />)
        .find('input')
        .should.have.prop('type', 'checkbox')
    })
    it('renders an input of type radio when set to radio', () => {
      shallow(<Checkbox type='radio' />)
        .find('input')
        .should.have.prop('type', 'radio')
    })
    it('it adds the prop value to className, except checkbox', () => {
      const types = _.without(Checkbox._meta.props.type, 'checkbox')
      _.each(types, (type) => {
        shallow(<Checkbox type={type} />)
          .should.have.className(type)
      })
    })
    it('does not add duplicate checkbox classes when set to "checkbox"', () => {
      shallow(<Checkbox type='checkbox' />)
        .prop('className')
        .match(/checkbox/g)
        .should.have.length(1)
    })
  })

  describe('onClick', () => {
    it('is called with (event { name, value, checked }) on label click', () => {
      const spy = sandbox.spy()
      const expectProps = { name: 'foo', value: 'bar', checked: false }
      mount(<Checkbox onClick={spy} {...expectProps} />)
        .find('label')
        .simulate('click')

      spy.should.have.been.calledOnce()
      spy.should.have.been.calledWithMatch({}, {})
      spy.firstCall.args[1]
        .should.deep.equal(expectProps)
    })
  })

  describe('onChange', () => {
    it('is called with (event { name, value, !checked }) on click', () => {
      const spy = sandbox.spy()
      const expectProps = { name: 'foo', value: 'bar', checked: false }
      mount(<Checkbox onChange={spy} {...expectProps} />)
        .find('label')
        .simulate('click')

      spy.should.have.been.calledOnce()
      spy.should.have.been.calledWithMatch({}, {})
      spy.firstCall.args[1]
        .should.deep.equal({ ...expectProps, checked: true })
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
})
