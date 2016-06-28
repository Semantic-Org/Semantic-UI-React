import faker from 'faker'
import React from 'react'

import Segment from 'src/elements/Segment/Segment'
import Segments from 'src/elements/Segment/SegmentSegments'
import * as common from 'test/specs/commonTests'

describe('Segment', () => {
  common.isConformant(Segment)
  common.hasUIClassName(Segment)
  common.rendersChildren(Segment)
  common.hasSubComponents(Segment, [Segments])

  describe('heading', () => {
    it('is not present by default', () => {
      mount(<Segment />)
        .should.not.have.descendants('.header')
    })

    it('adds a heading', () => {
      const heading = faker.hacker.phrase()
      const wrapper = mount(<Segment heading={heading} />)
      wrapper
        .should.have.descendants('.header')
      wrapper
        .should.contain.text(heading)
    })
  })
})
