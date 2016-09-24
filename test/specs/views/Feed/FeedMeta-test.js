import faker from 'faker'
import React from 'react'

import * as common from 'test/specs/commonTests'
import FeedMeta from 'src/views/Feed/FeedMeta'
import FeedLike from 'src/views/Feed/FeedLike'

describe('FeedMeta', () => {
  common.isConformant(FeedMeta)
  common.rendersChildren(FeedMeta)
  common.implementsShorthandProp(FeedMeta, {
    propKey: 'like',
    ShorthandComponent: FeedLike,
    mapValueToProps: val => ({ like: val }),
  })

  it('renders text with meta prop', () => {
    const text = faker.hacker.phrase()

    shallow(<FeedMeta meta={text} />).should.contain.text(text)
  })
})
