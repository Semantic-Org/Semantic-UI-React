import _ from 'lodash'
import React from 'react'

import Menu from 'src/collections/Menu/Menu'
import MenuItem from 'src/collections/Menu/MenuItem'
import MenuHeader from 'src/collections/Menu/MenuHeader'
import MenuMenu from 'src/collections/Menu/MenuMenu'
import { SUI } from 'src/lib'
import * as common from 'test/specs/commonTests'
import { sandbox } from 'test/utils'

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
    shallow(<Menu />).should.have.tagName('div')
  })

  describe('activeIndex', () => {
    const items = [
      { key: 'home', name: 'home' },
      { key: 'users', name: 'users' },
    ]

    it('is null by default', () => {
      shallow(<Menu items={items} />).should.not.have.descendants('.active')
    })

    it('is set when clicking an item', () => {
      const wrapper = mount(<Menu items={items} />)

      wrapper.find('MenuItem').at(1).simulate('click')

      // must re-query for the menu items or we get a cached copy
      wrapper.find('MenuItem').at(1).should.have.prop('active', true)
    })

    it('works as a string', () => {
      mount(<Menu items={items} activeIndex={1} />)
        .find('MenuItem')
        .at(1)
        .should.have.prop('active', true)
    })
  })

  describe('items', () => {
    const spy = sandbox.spy()
    const items = [
      { key: 'home', name: 'home', onClick: spy, 'data-foo': 'something' },
      { key: 'users', name: 'users', active: true, 'data-foo': 'something' },
    ]
    const children = mount(<Menu items={items} />).find('MenuItem')

    it('renders children', () => {
      children.first().should.have.prop('name', 'home')
      children.last().should.have.prop('name', 'users')
    })

    it('onClick can omitted', () => {
      const click = () => children.last().simulate('click')
      expect(click).to.not.throw()
    })

    it('passes onClick handler', () => {
      const event = { target: null }
      const props = { name: 'home', index: 0 }

      children.first().simulate('click', event)

      spy.should.have.been.calledOnce()
      spy.should.have.been.calledWithMatch(event, props)
    })

    it('passes arbitrary props', () => {
      children.everyWhere((item) => item.should.have.prop('data-foo', 'something'))
    })
  })

  describe('onItemClick', () => {
    it('is called with (e, { name, index }) when clicked', () => {
      const onClick = sandbox.spy()
      const onItemClick = sandbox.spy()

      const items = [
        { key: 'home', name: 'home' },
        { key: 'users', name: 'users', onClick },
      ]
      const matchProps = { index: 1, name: 'users' }

      const wrapper = mount(<Menu items={items} onItemClick={onItemClick} />)

      wrapper.find('MenuItem').last().simulate('click')

      onClick.should.have.been.calledOnce()
      onClick.should.have.been.calledWithMatch({ type: 'click' }, matchProps)
      onItemClick.should.have.been.calledOnce()
      onItemClick.should.have.been.calledWithMatch({ type: 'click' }, matchProps)
    })
  })
})
