import faker from 'faker'
import React from 'react'

import * as common from 'test/specs/commonTests'
import FeedUser from 'src/views/Feed/FeedUser'

describe('FeedUser', () => {
  common.isConformant(FeedUser)
  common.rendersChildren(FeedUser)

  it('renders text with user prop', () => {
    const text = faker.hacker.phrase()

    shallow(<FeedUser content={text} />).should.contain.text(text)
  })
})
