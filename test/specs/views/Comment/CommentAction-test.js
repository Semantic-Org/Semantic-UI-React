import React from 'react'

import CommentAction from 'src/views/Comment/CommentAction'
import * as common from 'test/specs/commonTests'

describe('CommentAction', () => {
  common.isConformant(CommentAction)
  common.forwardsRef(CommentAction, { tagName: 'a' })
  common.rendersChildren(CommentAction)

  it('renders an a element by default', () => {
    shallow(<CommentAction />).should.have.tagName('a')
  })
})
