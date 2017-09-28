import faker from 'faker'
import React from 'react'

import FeedDate from 'src/views/Feed/FeedDate'
import * as common from 'test/specs/commonTests'

describe('FeedDate', () => {
  common.isConformant(FeedDate)
  common.rendersChildren(FeedDate)

  it('renders text with date prop', () => {
    const text = faker.hacker.phrase()

    shallow(<FeedDate content={text} />)
      .children()
      .at(0)
      .should.contain.text(text)
  })
})
