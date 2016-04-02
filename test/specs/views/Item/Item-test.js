import React from 'react'

import Item from 'src/views/Items/Item'
import Items from 'src/views/Items/Items'
import * as common from 'test/specs/commonTests'

// TODO: make parent item, deprecate, fix tests
describe('Items', () => {
  common.isConformant(Items)
  common.hasUIClassName(Items)
  common.rendersChildren(Items)
})

describe('Item', () => {
  common.isConformant(Item)
  common.rendersChildren(Item)
})
