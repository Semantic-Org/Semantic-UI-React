import FeedLike from 'src/views/Feed/FeedLike'
import * as common from 'test/specs/commonTests'

describe('FeedLike', () => {
  common.isConformant(FeedLike)
  common.rendersChildren(FeedLike)

  common.implementsIconProp(FeedLike, { autoGenerateKey: false })
})
