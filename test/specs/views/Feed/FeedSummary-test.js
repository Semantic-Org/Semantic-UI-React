import faker from 'faker'
import React from 'react'

import * as common from 'test/specs/commonTests'
import FeedSummary from 'src/views/Feed/FeedSummary'

describe('FeedSummary', () => {
  common.isConformant(FeedSummary)
  common.rendersChildren(FeedSummary)

  it('renders <FeedDate> with date prop', () => {
    mount(<FeedSummary date={faker.hacker.phrase()} />)
      .should.have.descendants('FeedDate')
  })

  it('renders text with summary prop', () => {
    const text = faker.hacker.phrase()

    shallow(<FeedSummary summary={text} />).should.contain.text(text)
  })
})
