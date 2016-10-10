import React from 'react'

import * as common from 'test/specs/commonTests'
import CommentAction from 'src/views/Comment/CommentAction'

describe('CommentAction', () => {
  common.isConformant(CommentAction)
  common.rendersChildren(CommentAction)

  it('renders an a element by default', () => {
    shallow(<CommentAction />)
      .should.have.tagName('a')
  })
})
