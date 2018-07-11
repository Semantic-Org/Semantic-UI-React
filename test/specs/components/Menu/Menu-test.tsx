import React from 'react'
import { mount } from 'enzyme'

import Menu from 'src/components/Menu/Menu'
import { isConformant } from 'test/specs/commonTests'
import { mountWithProvider } from 'test/utils'

describe('Menu', () => {
  isConformant(Menu)

  const getItems = () => [
    { key: 'home', content: 'home', onClick: jest.fn(), 'data-foo': 'something' },
    { key: 'users', content: 'users', 'data-foo': 'something' },
  ]

  describe('items', () => {
    it('renders children', () => {
      const menuItems = mountWithProvider(<Menu items={getItems()} />).find('MenuItem')

      expect(menuItems.length).toBe(2)
      expect(menuItems.first().props().content).toBe('home')
      expect(menuItems.last().props().content).toBe('users')
    })

    it('calls onClick handler for item', () => {
      const items = getItems()
      const menuItems = mountWithProvider(<Menu items={items} />).find('MenuItem')

      menuItems.first().simulate('click')
      expect(items[0].onClick).toHaveBeenCalled()
    })

    it('passes arbitrary props', () => {
      const menuItems = mountWithProvider(<Menu items={getItems()} />).find('MenuItem')

      expect(menuItems.everyWhere(item => item.prop('data-foo') === 'something')).toBe(true)
    })

    describe('activeIndex', () => {
      it('should not be set by default', () => {
        const menuItems = mountWithProvider(<Menu items={getItems()} />).find('MenuItem')

        expect(menuItems.everyWhere(item => !item.is('[active="true"]'))).toBe(true)
      })

      it('should be set when item is clicked', () => {
        const wrapper = mountWithProvider(<Menu items={getItems()} />)
        const menuItems = wrapper.find('MenuItem')

        menuItems.at(1).simulate('click')

        const updatedItems = wrapper.find('MenuItem')

        expect(updatedItems.at(0).props().active).toBe(false)
        expect(updatedItems.at(1).props().active).toBe(true)
      })
    })
  })
})
