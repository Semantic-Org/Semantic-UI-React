import faker from 'faker'
import React from 'react'

import * as common from 'test/specs/commonTests'
import { sandbox } from 'test/utils'
import DropdownItem from 'src/modules/Dropdown/DropdownItem'
import Flag from 'src/elements/Flag'

describe('DropdownItem', () => {
  common.isConformant(DropdownItem)
  common.rendersChildren(DropdownItem)

  common.propKeyOnlyToClassName(DropdownItem, 'selected')
  common.propKeyOnlyToClassName(DropdownItem, 'active')

  common.implementsIconProp(DropdownItem)
  common.implementsLabelProp(DropdownItem)
  common.implementsImageProp(DropdownItem)

  common.implementsShorthandProp(DropdownItem, {
    propKey: 'flag',
    ShorthandComponent: Flag,
    mapValueToProps: val => ({ name: val }),
  })

  common.implementsShorthandProp(DropdownItem, {
    propKey: 'description',
    ShorthandComponent: 'span',
    mapValueToProps: val => ({
      className: 'description',
      children: val,
    }),
  })

  describe('text', () => {
    it('renders with wrapping span when description', () => {
      const wrapper = shallow(<DropdownItem text='hey' description='description' />)

      wrapper.should.have.descendants('span.text')
      wrapper.text().should.include('hey')
    })

    it('renders without wrapping span when no description', () => {
      const wrapper = shallow(<DropdownItem text='hey' />)

      wrapper.should.not.have.descendants('span.text')
      wrapper.text().should.equal('hey')
    })
  })

  describe('content', () => {
    it('renders text if no content', () => {
      const wrapper = shallow(<DropdownItem text='hey' />)

      wrapper.text().should.include('hey')
    })

    it('renders content if present', () => {
      const wrapper = shallow(<DropdownItem text='hey' content='you' />)

      wrapper.text().should.not.include('hey')
      wrapper.text().should.include('you')
    })
  })

  describe('onClick', () => {
    it('omitted when not defined', () => {
      const click = () => shallow(<DropdownItem />).simulate('click')
      expect(click).to.not.throw()
    })

    it('is called with (e, props) when clicked', () => {
      const spy = sandbox.spy()

      const value = faker.hacker.phrase()
      const event = { target: null }
      const props = { value, 'data-foo': 'bar' }

      shallow(<DropdownItem onClick={spy} {...props} />)
        .simulate('click', event)

      spy.should.have.been.calledOnce()
      spy.should.have.been.calledWithMatch(event, props)
    })
  })
})
