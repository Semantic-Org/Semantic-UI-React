import faker from 'faker'
import React from 'react'

import * as common from 'test/specs/commonTests'
import { sandbox } from 'test/utils'
import DropdownSearchInput from 'src/modules/Dropdown/DropdownSearchInput'

describe('DropdownSearchInput', () => {
  common.isConformant(DropdownSearchInput)
  common.rendersChildren(DropdownSearchInput)

  common.propKeyOnlyToClassName(DropdownSearchInput, 'selected')
  common.propKeyOnlyToClassName(DropdownSearchInput, 'active')

  describe('aria', () => {
    it('should have aria-autocomplete', () => {
      shallow(<DropdownSearchInput />)
        .should.have.prop('aria-autocomplete', 'list')
    })
  })

  describe('autoComplete', () => {
    it('should have autoComplete', () => {
      shallow(<DropdownSearchInput />)
        .should.have.prop('autoComplete', 'off')
    })
  })

  describe('name', () => {
    it('appends name with "-search"', () => {
      const name = faker.random.word()

      shallow(<DropdownSearchInput name={name} />)
        .should.have.attr('name', `${name}-search`)
    })
  })

  describe('onChange', () => {

  })

  describe('ref', () => {

  })

  describe('style', () => {

  })

  describe('tabIndex', () => {
    it('is not set by default', () => {
      shallow(<DropdownSearchInput />)
        .should.not.have.prop('tabIndex')
    })

    it('can be set explicitly', () => {
      shallow(<DropdownSearchInput tabIndex={123} />)
        .should.have.prop('tabIndex', 123)
    })
  })

  describe('type', () => {

  })

  describe('value', () => {

  })

  describe('width', () => {
    const width = faker.random.number()

    shallow(<DropdownSearchInput name={width} />)
      .should.have.style('width', `${width}px`)
  })
})
