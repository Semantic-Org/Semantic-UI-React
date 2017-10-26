import FeedContent from 'src/views/Feed/FeedContent'
import FeedDate from 'src/views/Feed/FeedDate'
import FeedSummary from 'src/views/Feed/FeedSummary'
import FeedExtra from 'src/views/Feed/FeedExtra'
import FeedMeta from 'src/views/Feed/FeedMeta'
import * as common from 'test/specs/commonTests'

describe('FeedContent', () => {
  common.isConformant(FeedContent)
  common.rendersChildren(FeedContent)

  common.implementsShorthandProp(FeedContent, {
    propKey: 'date',
    ShorthandComponent: FeedDate,
    mapValueToProps: val => ({ content: val }),
  })
  common.implementsShorthandProp(FeedContent, {
    propKey: 'summary',
    ShorthandComponent: FeedSummary,
    mapValueToProps: val => ({ content: val }),
  })
  common.implementsShorthandProp(FeedContent, {
    propKey: 'extraImages',
    ShorthandComponent: FeedExtra,
    mapValueToProps: val => ({ images: val }),
  })
  common.implementsShorthandProp(FeedContent, {
    propKey: 'extraText',
    ShorthandComponent: FeedExtra,
    mapValueToProps: val => ({ text: true, content: val }),
  })
  common.implementsShorthandProp(FeedContent, {
    propKey: 'meta',
    ShorthandComponent: FeedMeta,
    mapValueToProps: val => ({ content: val }),
  })
})
