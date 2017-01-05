import React from 'react'
import * as common from 'test/specs/commonTests'

import Icon from 'src/elements/Icon/Icon'
import ListIcon from 'src/elements/List/ListIcon'

describe('ListIcon', () => {
  common.isConformant(ListIcon)
  common.implementsVerticalAlignProp(ListIcon)

  it('returns Icon component', () => {
    shallow(<ListIcon />)
      .should.have.descendants(Icon)
  })
})
