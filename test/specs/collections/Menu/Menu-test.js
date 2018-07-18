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

  it('renders a `div` by default', () => {
    expect(shallow(<Menu />)).have.tagName('div')
  })

  describe('activeIndex', () => {
    const items = [{ key: 'home', name: 'home' }, { key: 'users', name: 'users' }]

    it('is null by default', () => {
      expect(shallow(<Menu items={items} />)).not.have.descendants('.active')
    })

    it('is set when clicking an item', () => {
      const wrapper = mount(<Menu items={items} />)

      wrapper
        .find('MenuItem')
        .at(1)
        .simulate('click')

      // must re-query for the menu items or we get a cached copy
      expect(wrapper.find('MenuItem').at(1)).have.prop('active', true)
    })

    it('works as a string', () => {
      expect(
        mount(<Menu items={items} activeIndex={1} />)
          .find('MenuItem')
          .at(1),
      ).have.prop('active', true)
    })
  })

  describe('items', () => {
    const spy = jest.fn()
    const items = [
      { key: 'home', name: 'home', onClick: spy, 'data-foo': 'something' },
      { key: 'users', name: 'users', active: true, 'data-foo': 'something' },
    ]
    const children = mount(<Menu items={items} />).find('MenuItem')

    it('renders children', () => {
      expect(children.first()).have.prop('name', 'home')
      expect(children.last()).have.prop('name', 'users')
    })

    it('onClick can omitted', () => {
      const click = () => children.last().simulate('click')
      expect(click).not.toThrowError()
    })

    it('passes onClick handler', () => {
      const event = { target: null }
      const props = { name: 'home', index: 0 }

      children.first().simulate('click', event)

      expect(spy).have.been.calledOnce()
      expect(spy).have.been.calledWithMatch(event, props)
    })

    it('passes arbitrary props', () => {
      children.everyWhere(item => expect(item).have.prop('data-foo', 'something'))
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
      const itemSpy = jest.fn()
      const menuSpy = jest.fn()

      const items = [
        { key: 'home', name: 'home' },
        { key: 'users', name: 'users', onClick: itemSpy },
      ]
      const matchProps = { index: 1, name: 'users' }

      mount(<Menu items={items} onItemClick={menuSpy} />)
        .find('MenuItem')
        .last()
        .simulate('click', event)

      expect(itemSpy).have.been.calledOnce()
      expect(itemSpy).have.been.calledWithMatch(event, matchProps)
      expect(menuSpy).have.been.calledOnce()
      expect(menuSpy).have.been.calledWithMatch(event, matchProps)
    })
  })
})
