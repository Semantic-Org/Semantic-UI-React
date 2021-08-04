import faker from 'faker'
import React from 'react'

import * as common from 'test/specs/commonTests'
import { sandbox } from 'test/utils'
import DropdownSearchInput from 'src/modules/Dropdown/DropdownSearchInput'

describe('DropdownSearchInput', () => {
  common.isConformant(DropdownSearchInput)
  common.forwardsRef(DropdownSearchInput, { tagName: 'input' })

  describe('aria', () => {
    it('should have aria-autocomplete', () => {
      shallow(<DropdownSearchInput />).should.have.prop('aria-autocomplete', 'list')
    })
  })

  describe('autoComplete', () => {
    it('should have autoComplete by default', () => {
      shallow(<DropdownSearchInput />).should.have.prop('autoComplete', 'off')
    })

    it('should pass a defined value', () => {
      shallow(<DropdownSearchInput autoComplete='on' />).should.have.prop('autoComplete', 'on')
    })
  })

  describe('onChange', () => {
    it('is called with (e, data) on change', () => {
      const onChange = sandbox.spy()
      const e = { target: { value: 'value' } }

      shallow(<DropdownSearchInput onChange={onChange} />)
        .find('input')
        .simulate('change', e)

      onChange.should.have.been.calledOnce()
      onChange.should.have.been.calledWithMatch(e, { value: e.target.value })
    })
  })

  describe('tabIndex', () => {
    it('is not set by default', () => {
      shallow(<DropdownSearchInput />).should.not.have.prop('tabIndex')
    })

    it('can be set explicitly', () => {
      shallow(<DropdownSearchInput tabIndex={123} />).should.have.prop('tabIndex', 123)
    })
  })

  describe('type', () => {
    it('should have text by default', () => {
      shallow(<DropdownSearchInput />).should.have.prop('type', 'text')
    })

    it('can be set explicitly', () => {
      const type = faker.random.word()

      shallow(<DropdownSearchInput type={type} />).should.have.prop('type', type)
    })
  })

  describe('value', () => {
    it('is not set by default', () => {
      shallow(<DropdownSearchInput />).should.not.have.prop('value')
    })

    it('can be set explicitly', () => {
      const value = faker.random.word()

      shallow(<DropdownSearchInput value={value} />).should.have.prop('value', value)
    })
  })
})
