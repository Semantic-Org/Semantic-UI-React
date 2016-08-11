import faker from 'faker'
import React from 'react'

import * as common from 'test/specs/commonTests'
import FeedMeta from 'src/views/Feed/FeedMeta'

describe('FeedMeta', () => {
  common.isConformant(FeedMeta)
  common.rendersChildren(FeedMeta)

  it('renders <FeedLike> with like prop', () => {
    mount(<FeedMeta like={faker.hacker.phrase()} />)
      .should.have.descendants('FeedLike')
  })

  it('renders text with meta prop', () => {
    const text = faker.hacker.phrase()

    shallow(<FeedMeta meta={text} />).should.contain.text(text)
  })
})
