import faker from 'faker'
import React from 'react'

import * as common from 'test/specs/commonTests'
import FeedExtra from 'src/views/Feed/FeedExtra'

describe('FeedExtra', () => {
  common.isConformant(FeedExtra)
  common.propKeyOnlyToClassName(FeedExtra, 'images')
  common.propKeyOnlyToClassName(FeedExtra, 'text')
  common.rendersChildren(FeedExtra)

  it('renders text with text prop', () => {
    const text = faker.hacker.phrase()

    shallow(<FeedExtra text={text} />).should.contain(text)
  })
})
