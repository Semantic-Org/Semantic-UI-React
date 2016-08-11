import faker from 'faker'
import React from 'react'

import * as common from 'test/specs/commonTests'
import FeedLike from 'src/views/Feed/FeedLike'

describe('FeedLike', () => {
  common.isConformant(FeedLike)
  common.implementsIconProp(FeedLike)
  common.rendersChildren(FeedLike)

  it('renders text with like prop', () => {
    const text = faker.hacker.phrase()

    shallow(<FeedLike like={text} />).should.contain.text(text)
  })
})
