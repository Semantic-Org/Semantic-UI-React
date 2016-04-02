import faker from 'faker'
import React from 'react'

import Menu from 'src/collections/Menu/Menu'
import MenuItem from 'src/collections/Menu/MenuItem'
import * as common from 'test/specs/commonTests'

describe('Menu', () => {
  common.isConformant(Menu)
  common.hasUIClassName(Menu)
  common.rendersChildren(Menu)
  common.hasSubComponents(Menu, [MenuItem])

  describe('initial state', () => {
    it('inherits activeItem from props', () => {
      const activeItem = faker.hacker.noun()
      shallow(<Menu activeItem={activeItem} />)
        .should.have.state('activeItem', activeItem)
    })
  })
})
