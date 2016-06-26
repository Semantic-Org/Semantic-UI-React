import faker from 'faker'
import React from 'react'

import Segment from 'src/elements/Segment/Segment'
import SegmentGroup from 'src/elements/Segment/SegmentGroup'
import * as common from 'test/specs/commonTests'

describe('Segment', () => {
  common.isConformant(Segment)
  common.hasUIClassName(SegmentGroup)
  common.rendersChildren(Segment)
  common.hasSubComponents(Segment, [SegmentGroup])

  common.propKeyOnlyToClassName(Segment, 'basic')
  common.propKeyOnlyToClassName(Segment, 'circular')
  common.propKeyOnlyToClassName(Segment, 'clearing')
  common.propKeyOnlyToClassName(Segment, 'compact')
  common.propKeyOnlyToClassName(Segment, 'disabled')
  common.propKeyOnlyToClassName(Segment, 'inverted')
  common.propKeyOnlyToClassName(Segment, 'loading')
  common.propKeyOnlyToClassName(Segment, 'vertical')
  common.propValueOnlyToClassName(Segment, 'color')
  common.propKeyAndValueToClassName(Segment, 'floated')
  common.propKeyOrValueToClassName(Segment, 'attached')
  common.propKeyOrValueToClassName(Segment, 'padded')
  common.implementsAlignedProp(Segment)

  describe('heading', () => {
    it('is not present by default', () => {
      render(<Segment />)
        .should.not.have.descendants('.header')
    })

    it('adds a heading', () => {
      const heading = faker.hacker.phrase()
      const wrapper = render(<Segment heading={heading} />)
      wrapper
        .should.have.descendants('.header')
      wrapper
        .should.contain.text(heading)
    })
  })
})
