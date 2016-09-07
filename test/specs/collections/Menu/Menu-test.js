import React from 'react'

import Menu from 'src/collections/Menu/Menu'
import MenuItem from 'src/collections/Menu/MenuItem'
import MenuHeader from 'src/collections/Menu/MenuHeader'
import MenuMenu from 'src/collections/Menu/MenuMenu'
import * as common from 'test/specs/commonTests'

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
})
