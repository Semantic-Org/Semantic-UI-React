import React from 'react'

import * as common from 'test/specs/commonTests'
import FeedExtra from 'src/views/Feed/FeedExtra'

describe('FeedExtra', () => {
  common.isConformant(FeedExtra)
  common.propKeyOnlyToClassName(FeedExtra, 'images')
  common.propKeyOnlyToClassName(FeedExtra, 'text')
  common.rendersChildren(FeedExtra)

  it('renders text with content prop', () => {
    shallow(<FeedExtra content='foo' />)
      .should.contain.text('foo')
  })

  it('renders <img> with images prop', () => {
    shallow(<FeedExtra images={['a', 'b', 'c']} />)
      .should.have.exactly(3).descendants('img')
  })
})
