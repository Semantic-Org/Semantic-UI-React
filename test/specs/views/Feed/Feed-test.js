import faker from 'faker'
import _ from 'lodash'
import React from 'react'

import { SUI } from 'src/lib'
import Feed from 'src/views/Feed/Feed'
import * as common from 'test/specs/commonTests'

describe('Feed', () => {
  common.isConformant(Feed)
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
      const wrapper = shallow(<Feed events={events} />)

      expect(wrapper.find('FeedEvent')).toHaveLength(3)
    })
  })
})
