import React from 'react'

import FeedLike from 'src/views/Feed/FeedLike'
import * as common from 'test/specs/commonTests'

describe('FeedLike', () => {
  common.isConformant(FeedLike)
  common.rendersChildren(FeedLike)

  common.implementsIconProp(FeedLike)

  it('renders text with content prop', () => {
    shallow(<FeedLike content='foo' />)
      .should.contain.text('foo')
  })
})
