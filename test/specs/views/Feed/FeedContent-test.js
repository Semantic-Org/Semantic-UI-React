import React from 'react'

import * as common from 'test/specs/commonTests'
import FeedContent from 'src/views/Feed/FeedContent'
import FeedDate from 'src/views/Feed/FeedDate'
import FeedSummary from 'src/views/Feed/FeedSummary'
import FeedExtra from 'src/views/Feed/FeedExtra'
import FeedMeta from 'src/views/Feed/FeedMeta'

describe('FeedContent', () => {
  common.isConformant(FeedContent)

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

  common.rendersChildren(FeedContent)

  it('renders text with content prop', () => {
    shallow(<FeedContent content='foo' />)
      .should.contain.text('foo')
  })
})
