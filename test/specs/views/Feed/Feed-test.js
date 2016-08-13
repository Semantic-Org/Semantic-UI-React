import _ from 'lodash'
import faker from 'faker'
import React from 'react'

import * as common from 'test/specs/commonTests'
import Feed from 'src/views/Feed/Feed'

describe('Feed', () => {
  common.hasUIClassName(Feed)
  common.isConformant(Feed)
  common.propValueOnlyToClassName(Feed, 'size')
  common.rendersChildren(Feed)

  describe('events prop', () => {
    it('renders <FeedEvent>', () => {
      const events = _.times(3, () => {
        return { summary: faker.hacker.phrase() }
      })

      shallow(<Feed events={events} />)
        .should.have.exactly(3).descendants('FeedEvent')
    })
  })
})
