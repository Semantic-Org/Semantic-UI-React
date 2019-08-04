import FeedMeta from 'src/views/Feed/FeedMeta'
import FeedLike from 'src/views/Feed/FeedLike'
import * as common from 'test/specs/commonTests'

describe('FeedMeta', () => {
  common.isConformant(FeedMeta)
  common.rendersChildren(FeedMeta)

  common.implementsShorthandProp(FeedMeta, {
    autoGenerateKey: false,
    propKey: 'like',
    ShorthandComponent: FeedLike,
    mapValueToProps: (val) => ({ content: val }),
  })
})
