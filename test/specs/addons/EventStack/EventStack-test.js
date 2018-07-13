import React from 'react'

import EventStack from 'src/addons/EventStack'
import * as common from 'test/specs/commonTests'

describe('EventStack', () => {
  common.isConformant(EventStack)
  common.hasValidTypings(EventStack)

  describe('children', () => {
    it('renders single child', () => {
      shallow(<EventStack />).should.contain(null)
    })
  })
})
