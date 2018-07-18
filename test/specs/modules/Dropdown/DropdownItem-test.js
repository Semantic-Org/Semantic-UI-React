import faker from 'faker'
import React from 'react'

import * as common from 'test/specs/commonTests'

import DropdownItem from 'src/modules/Dropdown/DropdownItem'
import Flag from 'src/elements/Flag'

describe('DropdownItem', () => {
  common.isConformant(DropdownItem)
  common.rendersChildren(DropdownItem, {
    rendersContent: false,
  })

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
      expect(wrapper.prop('role')).toBe('option')
    })
    it('should render DropdownItem with children as role=option', () => {
      const wrapper = shallow(<DropdownItem>Text</DropdownItem>)
      expect(wrapper.prop('role')).toBe('option')
    })
    it('should render DropdownItem with description as role=option', () => {
      const wrapper = shallow(<DropdownItem description='Text' />)
      expect(wrapper.prop('role')).toBe('option')
    })
    it('should render disabled DropdownItem with aria-disabled', () => {
      const wrapper = shallow(<DropdownItem disabled />)
      expect(wrapper.prop('aria-disabled')).toBe(true)
    })
    it('should render normal DropdownItem without aria-disabled', () => {
      const wrapper = shallow(<DropdownItem />)
      expect(wrapper.prop('aria-disabled')).toBeUndefined()
    })
    it('should render active DropdownItem with aria-checked', () => {
      const wrapper = shallow(<DropdownItem active />)
      expect(wrapper.prop('aria-checked')).toBe(true)
    })
    it('should render normal DropdownItem without aria-disabled', () => {
      const wrapper = shallow(<DropdownItem />)
      expect(wrapper.prop('aria-checked')).toBeUndefined()
    })
    it('should render selected DropdownItem with aria-selected', () => {
      const wrapper = shallow(<DropdownItem selected />)
      expect(wrapper.prop('aria-selected')).toBe(true)
    })
    it('should render normal DropdownItem without aria-selected', () => {
      const wrapper = shallow(<DropdownItem />)
      expect(wrapper.prop('aria-selected')).toBeUndefined()
    })
  })

  describe('description', () => {
    it('adds className="description" to element shorthand', () => {
      expect(shallow(<DropdownItem description={<strong />} />)).have.descendants(
        'strong.description',
      )
    })
  })

  describe('text', () => {
    it('adds className="text" to element shorthand', () => {
      expect(shallow(<DropdownItem text={<strong />} />)).have.descendants('strong.text')
    })
  })

  describe('content', () => {
    it('renders text if no content', () => {
      const wrapper = shallow(<DropdownItem text='hey' />)

      expect(wrapper.text()).toContain('hey')
    })

    it('renders content if present', () => {
      const wrapper = shallow(<DropdownItem text='hey' content='you' />)

      expect(wrapper.text()).not.toContain('hey')
      expect(wrapper.text()).toContain('you')
    })
  })

  describe('onClick', () => {
    it('omitted when not defined', () => {
      const click = () => shallow(<DropdownItem />).simulate('click')
      expect(click).not.toThrowError()
    })

    it('is called with (e, props) when clicked', () => {
      const onClick = jest.fn()

      const value = faker.hacker.phrase()
      const event = { target: null }
      const props = { value, 'data-foo': 'bar' }

      shallow(<DropdownItem onClick={onClick} {...props} />).simulate('click', event)

      expect(onClick).toHaveBeenCalledTimes(1)
      expect(onClick).toHaveBeenCalledWith(event, props)
    })
  })
})
