import React from 'react'

import Divider from 'src/elements/Divider/Divider'
import * as common from 'test/specs/commonTests'

describe('Divider', () => {
  common.isConformant(Divider)
  common.rendersChildren(Divider)
  common.hasUIClassName(Divider)

  common.propKeyOnlyToClassName(Divider, 'horizontal')
  common.propKeyOnlyToClassName(Divider, 'vertical')
  common.propKeyOnlyToClassName(Divider, 'inverted')
  common.propKeyOnlyToClassName(Divider, 'fitted')
  common.propKeyOnlyToClassName(Divider, 'hidden')
  common.propKeyOnlyToClassName(Divider, 'section')
  common.propKeyOnlyToClassName(Divider, 'clearing')

  it('renders a <div /> element', () => {
    expect(shallow(<Divider />)).have.tagName('div')
  })

  it('adds the "divider" class', () => {
    expect(shallow(<Divider />)).have.className('divider')
  })
})
