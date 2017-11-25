import React from 'react'

import TabPane from 'src/modules/Tab/TabPane'
import * as common from 'test/specs/commonTests'

describe('TabPane', () => {
  common.isConformant(TabPane)

  common.implementsCreateMethod(TabPane)

  common.propKeyOnlyToClassName(TabPane, 'active')
  common.propKeyOnlyToClassName(TabPane, 'loading')

  describe('as', () => {
    it('renders a Segment by default', () => {
      shallow(<TabPane />)
        .should.match('Segment')
    })
  })

  describe('loading', () => {
    it('does not add className when `active` is false', () => {
      shallow(<TabPane active={false} loading />)
        .should.not.have.className('loading')
    })
  })
})
