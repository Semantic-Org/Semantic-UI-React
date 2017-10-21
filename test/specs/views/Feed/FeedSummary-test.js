import FeedSummary from 'src/views/Feed/FeedSummary'
import FeedDate from 'src/views/Feed/FeedDate'
import FeedUser from 'src/views/Feed/FeedUser'
import * as common from 'test/specs/commonTests'

describe('FeedSummary', () => {
  common.isConformant(FeedSummary)
  common.rendersChildren(FeedSummary)

  common.implementsShorthandProp(FeedSummary, {
    propKey: 'date',
    ShorthandComponent: FeedDate,
    mapValueToProps: val => ({ content: val }),
  })
  common.implementsShorthandProp(FeedSummary, {
    propKey: 'user',
    ShorthandComponent: FeedUser,
    mapValueToProps: val => ({ content: val }),
  })
})
