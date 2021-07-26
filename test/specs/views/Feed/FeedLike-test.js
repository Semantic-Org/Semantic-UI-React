import * as React from 'react'

import FeedLike from 'src/views/Feed/FeedLike'
import * as common from 'test/specs/commonTests'

describe('FeedLike', () => {
  common.isConformant(FeedLike)
  common.forwardsRef(FeedLike, { tagName: 'a' })
  common.forwardsRef(FeedLike, { requiredProps: { children: <span /> }, tagName: 'a' })
  common.rendersChildren(FeedLike)

  common.implementsIconProp(FeedLike, { autoGenerateKey: false })
})
