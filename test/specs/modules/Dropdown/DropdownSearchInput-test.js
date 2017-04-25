import faker from 'faker'
import React from 'react'

import * as common from 'test/specs/commonTests'
import { sandbox } from 'test/utils'
import DropdownSearchInput from 'src/modules/Dropdown/DropdownSearchInput'

describe('DropdownSearchInput', () => {
  common.hasValidTypings(DropdownSearchInput)
  common.rendersChildren(DropdownSearchInput)

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
    it('is called with (e, data) on change', () => {
      const onChange = sandbox.spy()
      const e = { target: { value: 'name' } }

      shallow(<DropdownSearchInput onChange={onChange} name='foo' />)
        .find('input')
        .simulate('change', e)

      onChange.should.have.been.calledOnce()
      onChange.should.have.been.calledWithMatch(e, { name: 'foo', value: e.target.value })
    })
  })

  describe('inputRef', () => {
    it('maintains ref on input', () => {
      const inputRef = sandbox.spy()
      const mountNode = document.createElement('div')
      document.body.appendChild(mountNode)

      const wrapper = mount(<DropdownSearchInput inputRef={inputRef} />, { attachTo: mountNode })
      const input = document.querySelector('input')

      inputRef.should.have.been.calledOnce()
      inputRef.should.have.been.calledWithMatch(input)

      wrapper.detach()
      document.body.removeChild(mountNode)
    })
  })

  describe('style', () => {
    const style = { left: 10, bottom: 10 }

    it('is not set by default', () => {
      shallow(<DropdownSearchInput />)
        .should.not.have.prop('style')
    })

    it('can be set explicitly', () => {
      shallow(<DropdownSearchInput style={style} />)
        .should.have.prop('style')
        .deep.equal(style)
    })

    it('merged with width prop', () => {
      const width = faker.random.number()

      shallow(<DropdownSearchInput style={style} width={width} />)
        .should.have.prop('style')
        .deep.equal({ ...style, width })
    })
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
    it('should have text by default', () => {
      shallow(<DropdownSearchInput />)
        .should.have.prop('type', 'text')
    })

    it('can be set explicitly', () => {
      const type = faker.random.word()

      shallow(<DropdownSearchInput type={type} />)
        .should.have.prop('type', type)
    })
  })

  describe('value', () => {
    it('is not set by default', () => {
      shallow(<DropdownSearchInput />)
        .should.not.have.prop('value')
    })

    it('can be set explicitly', () => {
      const value = faker.random.word()

      shallow(<DropdownSearchInput value={value} />)
        .should.have.prop('value', value)
    })
  })

  describe('width', () => {
    it('is not set by default', () => {
      shallow(<DropdownSearchInput />)
        .should.not.have.prop('width')
    })

    it('can be set explicitly', () => {
      const width = faker.random.number()

      shallow(<DropdownSearchInput width={width} />)
         .should.have.style('width', `${width}px`)
    })
  })
})
