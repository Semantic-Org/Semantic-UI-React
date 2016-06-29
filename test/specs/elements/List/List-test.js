import React from 'react'

import List from 'src/elements/List/List'
import * as common from 'test/specs/commonTests'

describe('List', () => {
  common.isConformant(List)
  common.rendersChildren(List)
  common.hasUIClassName(List)

  common.propValueOnlyToClassName(List, 'size')
  common.propKeyAndValueToClassName(List, 'aligned')

  common.propKeyOnlyToClassName(List, 'bulleted')
  common.propKeyOnlyToClassName(List, 'link')
  common.propKeyOnlyToClassName(List, 'ordered')
  common.propKeyOnlyToClassName(List, 'animated')
  common.propKeyOnlyToClassName(List, 'celled')
  common.propKeyOnlyToClassName(List, 'divided')
  common.propKeyOnlyToClassName(List, 'horizontal')
  common.propKeyOnlyToClassName(List, 'inverted')
  common.propKeyOnlyToClassName(List, 'selection')

  common.propKeyOrValueToClassName(List, 'relaxed')

  it('renders a <div /> element', () => {
    shallow(<List />)
      .should.have.tagName('div')
  })

  it('adds the "list" class', () => {
    shallow(<List />)
      .should.have.className('list')
  })
})
