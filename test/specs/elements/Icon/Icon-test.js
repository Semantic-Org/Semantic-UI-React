import React from 'react'

import Icon from 'src/elements/Icon/Icon'
import * as common from 'test/specs/commonTests'

describe('Icon', () => {
  common.isConformant(Icon)

  it('renders an <i /> element', () => {
    deprecatedRender(<Icon />)
      .findTag('i')
  })

  it('adds the "icon" class', () => {
    deprecatedRender(<Icon />)
      .findClass('icon')
  })
})
