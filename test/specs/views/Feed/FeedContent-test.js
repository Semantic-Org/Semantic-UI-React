import * as React from 'react'

import FeedContent from 'src/views/Feed/FeedContent'
import FeedDate from 'src/views/Feed/FeedDate'
import FeedSummary from 'src/views/Feed/FeedSummary'
import FeedExtra from 'src/views/Feed/FeedExtra'
import FeedMeta from 'src/views/Feed/FeedMeta'
import * as common from 'test/specs/commonTests'

describe('FeedContent', () => {
  common.isConformant(FeedContent)
  common.forwardsRef(FeedContent)
  common.forwardsRef(FeedContent, { requiredProps: { children: <span /> } })
  common.rendersChildren(FeedContent)

  common.implementsShorthandProp(FeedContent, {
    autoGenerateKey: false,
    propKey: 'date',
    ShorthandComponent: FeedDate,
    mapValueToProps: (val) => ({ content: val }),
  })
  common.implementsShorthandProp(FeedContent, {
    autoGenerateKey: false,
    propKey: 'summary',
    ShorthandComponent: FeedSummary,
    mapValueToProps: (val) => ({ content: val }),
  })
  common.implementsShorthandProp(FeedContent, {
    autoGenerateKey: false,
    propKey: 'extraImages',
    ShorthandComponent: FeedExtra,
    mapValueToProps: (val) => ({ images: val }),
  })
  common.implementsShorthandProp(FeedContent, {
    autoGenerateKey: false,
    propKey: 'extraText',
    ShorthandComponent: FeedExtra,
    mapValueToProps: (val) => ({ text: true, content: val }),
  })
  common.implementsShorthandProp(FeedContent, {
    autoGenerateKey: false,
    propKey: 'meta',
    ShorthandComponent: FeedMeta,
    mapValueToProps: (val) => ({ content: val }),
  })
})
