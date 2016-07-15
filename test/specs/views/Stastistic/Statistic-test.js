import React from 'react'
import * as common from 'test/specs/commonTests'

import Statistic from 'src/views/Statistic/Statistic'

describe('Statistic', () => {
  common.isConformant(Statistic)
  common.hasUIClassName(Statistic)
  // TODO: Add value and label
  // common.hasSubComponents()
  common.rendersChildren(Statistic)

  common.propValueOnlyToClassName(Statistic, 'color')
  common.propKeyAndValueToClassName(Statistic, 'floated')
  common.propKeyOnlyToClassName(Statistic, 'horizontal')
  common.propKeyOnlyToClassName(Statistic, 'inverted')
  common.propValueOnlyToClassName(Statistic, 'size')

  it('renders an div element', () => {
    shallow(<Statistic />)
      .should.have.tagName('div')
  })
})

