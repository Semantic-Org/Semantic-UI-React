import faker from 'faker'
import React from 'react'

import Segment from 'src/elements/Segment/Segment'
import SegmentGroup from 'src/elements/Segment/SegmentGroup'
import * as common from 'test/specs/commonTests'

describe('Segment', () => {
  common.isConformant(Segment)
  common.hasSubComponents(Segment, [SegmentGroup])

  // TODO re-enable when Header v1 merged to master
  xdescribe('heading', () => {
    it('is not present by default', () => {
      shallow(<Segment />)
        .should.not.have.descendants('.sd-segment-heading')
    })

    it('adds a heading', () => {
      const heading = faker.hacker.phrase()
      const wrapper = shallow(<Segment heading={heading} />)
      wrapper
        .should.have.descendants('.sd-segment-heading')
      wrapper
        .should.contain.text(heading)
    })
  })
})
