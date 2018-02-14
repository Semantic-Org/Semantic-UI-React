import React from 'react'

import TabPane from 'src/modules/Tab/TabPane'
import * as common from 'test/specs/commonTests'

describe('TabPane', () => {
  common.isConformant(TabPane)

  common.implementsCreateMethod(TabPane)

  common.propKeyOnlyToClassName(TabPane, 'active')
  common.propKeyOnlyToClassName(TabPane, 'loading')

  it('renders a Segment by default', () => {
    shallow(<TabPane />).should.match('Segment')
  })
})
