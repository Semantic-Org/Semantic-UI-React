import React from 'react'

import * as common from 'test/specs/commonTests'
import FeedLike from 'src/views/Feed/FeedLike'

describe('FeedLike', () => {
  common.isConformant(FeedLike)
  common.implementsIconProp(FeedLike)
  common.rendersChildren(FeedLike)

  it('renders text with content prop', () => {
    shallow(<FeedLike content='foo' />)
      .should.contain.text('foo')
  })
})
