import faker from 'faker'
import _ from 'lodash'
import React from 'react'

import { SUI } from 'src/lib'
import Feed from 'src/views/Feed/Feed'
import * as common from 'test/specs/commonTests'

describe('Feed', () => {
  common.isConformant(Feed)
  common.forwardsRef(Feed)
  common.forwardsRef(Feed, { requiredProps: { children: <span /> } })
  common.hasUIClassName(Feed)
  common.rendersChildren(Feed, {
    rendersContent: false,
  })

  common.propValueOnlyToClassName(
    Feed,
    'size',
    _.without(SUI.SIZES, 'mini', 'tiny', 'medium', 'big', 'huge', 'massive'),
  )

  describe('events prop', () => {
    it('renders <FeedEvent>', () => {
      const events = _.times(3, () => ({ summary: faker.hacker.phrase() }))

      shallow(<Feed events={events} />)
        .should.have.exactly(3)
        .descendants('FeedEvent')
    })
  })
})
