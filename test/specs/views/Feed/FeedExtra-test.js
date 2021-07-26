import React from 'react'

import FeedExtra from 'src/views/Feed/FeedExtra'
import * as common from 'test/specs/commonTests'

describe('FeedExtra', () => {
  common.isConformant(FeedExtra)
  common.forwardsRef(FeedExtra)
  common.forwardsRef(FeedExtra, { requiredProps: { children: <span /> } })
  common.rendersChildren(FeedExtra)

  common.propKeyOnlyToClassName(FeedExtra, 'images')
  common.propKeyOnlyToClassName(FeedExtra, 'text')

  describe('images', () => {
    it('renders <img> with images prop', () => {
      shallow(<FeedExtra images={['a', 'b', 'c']} />)
        .should.have.exactly(3)
        .descendants('img')
    })
  })
})
