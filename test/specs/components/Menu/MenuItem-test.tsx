import React from 'react'

import { isConformant } from 'test/specs/commonTests'
import { getTestingRenderedComponent } from 'test/utils'
import MenuItem from 'src/components/Menu/MenuItem'

describe('MenuItem', () => {
  isConformant(MenuItem)

  it('content renders as `li > a`', () => {
    const menuItem = getTestingRenderedComponent(MenuItem, <MenuItem content="Home" />).find(
      '.ui-menu__item',
    )

    expect(menuItem.is('li')).toBe(true)
    expect(menuItem.childAt(0).is('a')).toBe(true)
    expect(menuItem.text()).toBe('Home')
  })

  it('children render directly inside `li`', () => {
    const menuItem = getTestingRenderedComponent(MenuItem, <MenuItem>Home</MenuItem>)

    expect(menuItem.find('.ui-menu__item').is('li')).toBe(true)
    expect(menuItem.text()).toBe('Home')
  })
})
