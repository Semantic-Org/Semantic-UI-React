import React from 'react'

import Menu from 'src/collections/Menu/Menu'
import MenuItem from 'src/collections/Menu/MenuItem'
import MenuHeader from 'src/collections/Menu/MenuHeader'
import MenuMenu from 'src/collections/Menu/MenuMenu'
import * as common from 'test/specs/commonTests'
import { sandbox } from 'test/utils'

describe('Menu', () => {
  common.isConformant(Menu)
  common.hasUIClassName(Menu)
  common.hasSubComponents(Menu, [MenuHeader, MenuItem, MenuMenu])

  common.implementsWidthProp(Menu, { propKey: 'widths', canEqual: false })
  common.propKeyOrValueToClassName(Menu, 'attached')
  common.propKeyOnlyToClassName(Menu, 'borderless')
  common.propValueOnlyToClassName(Menu, 'color')
  common.propKeyOnlyToClassName(Menu, 'compact')
  common.propKeyAndValueToClassName(Menu, 'fixed')
  common.propKeyOnlyToClassName(Menu, 'fluid')
  common.propKeyOrValueToClassName(Menu, 'icon')
  common.propKeyOnlyToClassName(Menu, 'inverted')
  common.propKeyOnlyToClassName(Menu, 'pagination')
  common.propKeyOnlyToClassName(Menu, 'pointing')
  common.propKeyOnlyToClassName(Menu, 'secondary')
  common.propKeyOnlyToClassName(Menu, 'stackable')
  common.propKeyOrValueToClassName(Menu, 'tabular')
  common.propKeyOnlyToClassName(Menu, 'text')
  common.propValueOnlyToClassName(Menu, 'size')
  common.propKeyOnlyToClassName(Menu, 'vertical')

  common.rendersChildren(Menu)

  it('renders a `div` by default', () => {
    shallow(<Menu />)
      .should.have.tagName('div')
  })

  describe('activeIndex', () => {
    it('-1 by default', () => {
      const items = [
        { name: 'home' },
        { name: 'users' },
      ]

      shallow(<Menu items={items} />).should.have.state('activeIndex', -1)
    })

    it('can be overridden with "active"', () => {
      const items = [
        { name: 'home' },
        { active: true, name: 'users' },
      ]

      shallow(<Menu items={items} />).should.have.state('activeIndex', 1)
    })
  })

  describe('items', () => {
    const spy = sandbox.spy()
    const items = [
      { name: 'home', onClick: spy },
      { active: true, name: 'users' },
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
  })

  describe('onItemClick', () => {
    const items = [
      { name: 'home' },
      { name: 'users' },
    ]

    it('can be omitted', () => {
      const click = () => mount(<Menu items={items} />).find('MenuItem').first().simulate('click')

      expect(click).to.not.throw()
    })

    it('is called with (e, { name, index }) when clicked', () => {
      const spy = sandbox.spy()
      const event = { target: null }
      const props = { name: 'home', index: 0 }

      mount(<Menu items={items} onItemClick={spy} />).find('MenuItem').first()
        .simulate('click', event)

      spy.should.have.been.calledOnce()
      spy.should.have.been.calledWithMatch(event, props)
    })
  })
})
