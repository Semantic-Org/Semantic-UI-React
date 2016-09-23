import faker from 'faker'
import React from 'react'

import * as common from 'test/specs/commonTests'
import FeedSummary from 'src/views/Feed/FeedSummary'
import FeedDate from 'src/views/Feed/FeedDate'

describe('FeedSummary', () => {
  common.isConformant(FeedSummary)
  common.rendersChildren(FeedSummary)
  common.implementsShorthandProp(FeedSummary, {
    propKey: 'date',
    ShorthandComponent: FeedDate,
    mapValueToProps: val => ({ date: val }),
  })

  it('renders text with summary prop', () => {
    const text = faker.hacker.phrase()

    shallow(<FeedSummary summary={text} />).should.contain.text(text)
  })
})
