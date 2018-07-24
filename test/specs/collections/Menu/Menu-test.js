import _ from 'lodash'
import React from 'react'

import Menu from 'src/collections/Menu/Menu'
import MenuItem from 'src/collections/Menu/MenuItem'
import MenuHeader from 'src/collections/Menu/MenuHeader'
import MenuMenu from 'src/collections/Menu/MenuMenu'
import { SUI } from 'src/lib'
import * as common from 'test/specs/commonTests'

describe('Menu', () => {
  common.isConformant(Menu)
  common.hasSubcomponents(Menu, [MenuHeader, MenuItem, MenuMenu])
  common.hasUIClassName(Menu)
  common.rendersChildren(Menu, {
    rendersContent: false,
  })

  common.implementsWidthProp(Menu, SUI.WIDTHS, {
    canEqual: false,
    propKey: 'widths',
  })

  common.propKeyAndValueToClassName(Menu, 'fixed', ['left', 'right', 'bottom', 'top'])

  common.propKeyOnlyToClassName(Menu, 'borderless')
  common.propKeyOnlyToClassName(Menu, 'compact')
  common.propKeyOnlyToClassName(Menu, 'fluid')
  common.propKeyOnlyToClassName(Menu, 'inverted')
  common.propKeyOnlyToClassName(Menu, 'pagination')
  common.propKeyOnlyToClassName(Menu, 'pointing')
  common.propKeyOnlyToClassName(Menu, 'secondary')
  common.propKeyOnlyToClassName(Menu, 'stackable')
  common.propKeyOnlyToClassName(Menu, 'text')
  common.propKeyOnlyToClassName(Menu, 'vertical')

  common.propKeyOrValueAndKeyToClassName(Menu, 'attached', ['top', 'bottom'])
  common.propKeyOrValueAndKeyToClassName(Menu, 'floated', ['right'])
  common.propKeyOrValueAndKeyToClassName(Menu, 'icon', ['labeled'])
  common.propKeyOrValueAndKeyToClassName(Menu, 'tabular', ['right'])

  common.propValueOnlyToClassName(Menu, 'color', SUI.COLORS)
  common.propValueOnlyToClassName(Menu, 'size', _.without(SUI.SIZES, 'medium', 'big'))

  describe('activeIndex', () => {
    const items = [{ key: 'home', name: 'home' }, { key: 'users', name: 'users' }]

    it('is null by default', () => {
      expect(shallow(<Menu items={items} />).find('.active')).toHaveLength(0)
    })

    it('is set when clicking an item', () => {
      const wrapper = mount(<Menu items={items} />)

      wrapper
        .find('MenuItem')
        .at(1)
        .simulate('click')

      // must re-query for the menu items or we get a cached copy
      expect(
        wrapper
          .find('MenuItem')
          .at(1)
          .prop('active'),
      ).toBe(true)
    })

    it('works as a string', () => {
      expect(
        mount(<Menu items={items} activeIndex={1} />)
          .find('MenuItem')
          .at(1)
          .prop('active'),
      ).toBe(true)
    })
  })

  describe('items', () => {
    const onClick = jest.fn()
    const items = [
      { key: 'home', name: 'home', onClick, 'data-foo': 'something' },
      { key: 'users', name: 'users', active: true, 'data-foo': 'something' },
    ]
    const children = mount(<Menu items={items} />).find('MenuItem')

    it('renders children', () => {
      expect(children.first().prop('name')).toBe('home')
      expect(children.last().prop('name')).toBe('users')
    })

    it('passes onClick handler', () => {
      const event = { target: null }
      const props = { name: 'home', index: 0 }

      children.first().simulate('click', event)

      expect(onClick).toHaveBeenCalledTimes(1)
      expect(onClick).toHaveBeenCalledWith(
        expect.objectContaining(event),
        expect.objectContaining(props),
      )
    })

    it('passes arbitrary props', () => {
      children.everyWhere(item => expect(item.prop('data-foo')).toBe('something'))
    })
  })

  describe('onItemClick', () => {
    it('can be omitted', () => {
      const click = () =>
        mount(<Menu items={[{ key: 'home', name: 'home' }]} />)
          .find('MenuItem')
          .first()
          .simulate('click')

      expect(click).not.toThrowError()
    })

    it('is called with (e, { name, index }) when clicked', () => {
      const event = { target: null }
      const onClick = jest.fn()
      const onItemClick = jest.fn()

      const items = [{ key: 'home', name: 'home' }, { key: 'users', name: 'users', onClick }]
      const matchProps = { index: 1, name: 'users' }

      mount(<Menu items={items} onItemClick={onItemClick} />)
        .find('MenuItem')
        .last()
        .simulate('click', event)

      expect(onClick).toHaveBeenCalledTimes(1)
      expect(onClick).toHaveBeenCalledWith(
        expect.objectContaining(event),
        expect.objectContaining(matchProps),
      )
      expect(onItemClick).toHaveBeenCalledTimes(1)
      expect(onItemClick).toHaveBeenCalledWith(
        expect.objectContaining(event),
        expect.objectContaining(matchProps),
      )
    })
  })
})
