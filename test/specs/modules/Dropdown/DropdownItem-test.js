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

  common.implementsCreateMethod(DropdownItem)
  common.implementsIconProp(DropdownItem)
  common.implementsLabelProp(DropdownItem)
  common.implementsImageProp(DropdownItem)

  common.implementsShorthandProp(DropdownItem, {
    propKey: 'flag',
    ShorthandComponent: Flag,
    mapValueToProps: name => ({ name }),
  })

  common.implementsShorthandProp(DropdownItem, {
    propKey: 'description',
    ShorthandComponent: 'span',
    mapValueToProps: children => ({ children }),
    shorthandDefaultProps: { className: 'description' },
  })

  common.implementsShorthandProp(DropdownItem, {
    propKey: 'text',
    ShorthandComponent: 'span',
    mapValueToProps: children => ({ children }),
    shorthandDefaultProps: { className: 'text' },
  })

  describe('aria', () => {
    it('should render DropdownItem as role=option', () => {
      const wrapper = shallow(<DropdownItem />)
      wrapper.should.have.prop('role', 'option')
    })
    it('should render DropdownItem with children as role=option', () => {
      const wrapper = shallow(<DropdownItem>Text</DropdownItem>)
      wrapper.should.have.prop('role', 'option')
    })
    it('should render DropdownItem with description as role=option', () => {
      const wrapper = shallow(<DropdownItem description='Text' />)
      wrapper.should.have.prop('role', 'option')
    })
    it('should render disabled DropdownItem with aria-disabled', () => {
      const wrapper = shallow(<DropdownItem disabled />)
      wrapper.should.have.prop('aria-disabled', true)
    })
    it('should render normal DropdownItem without aria-disabled', () => {
      const wrapper = shallow(<DropdownItem />)
      wrapper.should.not.have.prop('aria-disabled')
    })
    it('should render active DropdownItem with aria-checked', () => {
      const wrapper = shallow(<DropdownItem active />)
      wrapper.should.have.prop('aria-checked', true)
    })
    it('should render normal DropdownItem without aria-disabled', () => {
      const wrapper = shallow(<DropdownItem />)
      wrapper.should.not.have.prop('aria-checked')
    })
    it('should render selected DropdownItem with aria-selected', () => {
      const wrapper = shallow(<DropdownItem selected />)
      wrapper.should.have.prop('aria-selected', true)
    })
    it('should render normal DropdownItem without aria-selected', () => {
      const wrapper = shallow(<DropdownItem />)
      wrapper.should.not.have.prop('aria-selected')
    })
  })

  describe('description', () => {
    it('adds className="description" to element shorthand', () => {
      shallow(<DropdownItem description={<strong />} />)
        .should.have.descendants('strong.description')
    })
  })

  describe('text', () => {
    it('adds className="text" to element shorthand', () => {
      shallow(<DropdownItem text={<strong />} />)
        .should.have.descendants('strong.text')
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
