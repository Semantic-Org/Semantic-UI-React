import faker from 'faker'
import React from 'react'

import FeedUser from 'src/views/Feed/FeedUser'
import * as common from 'test/specs/commonTests'

describe('FeedUser', () => {
  common.isConformant(FeedUser)
  common.rendersChildren(FeedUser)

  it('renders text with user prop', () => {
    const text = faker.hacker.phrase()

    shallow(<FeedUser content={text} />).should.contain.text(text)
  })
})
