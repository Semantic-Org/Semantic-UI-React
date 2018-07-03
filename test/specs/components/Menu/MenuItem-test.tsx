import React from 'react'

import { isConformant } from '../../commonTests'
import { getTestingRenderedComponent } from 'test/utils'
import MenuItem from 'src/components/Menu/MenuItem'

describe('MenuItem', () => {
  isConformant(MenuItem)

  it('content renders as `li > a`', () => {
    const menuItem = getTestingRenderedComponent(MenuItem, <MenuItem content="Home" />)
    expect(menuItem.childAt(0).is('li')).toBe(true)
    expect(
      menuItem
        .childAt(0)
        .childAt(0)
        .is('a'),
    ).toBe(true)
    expect(
      menuItem
        .childAt(0)
        .childAt(0)
        .text(),
    ).toBe('Home')
  })

  it('children render directly inside `li`', () => {
    const menuItem = getTestingRenderedComponent(
      MenuItem,
      <MenuItem>
        <div>Home</div>
      </MenuItem>,
    )
    expect(menuItem.childAt(0).is('li')).toBe(true)
    expect(
      menuItem
        .childAt(0)
        .childAt(0)
        .html(),
    ).toBe('<div>Home</div>')
  })
})
