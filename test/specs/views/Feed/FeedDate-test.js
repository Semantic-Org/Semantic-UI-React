import faker from 'faker'
import React from 'react'

import * as common from 'test/specs/commonTests'
import FeedDate from 'src/views/Feed/FeedDate'

describe('FeedDate', () => {
  common.isConformant(FeedDate)
  common.rendersChildren(FeedDate)

  it('renders text with date prop', () => {
    const text = faker.hacker.phrase()

    shallow(<FeedDate content={text} />).should.contain.text(text)
  })
})
