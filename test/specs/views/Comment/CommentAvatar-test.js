import faker from 'faker'
import React from 'react'

import * as common from 'test/specs/commonTests'
import CommentAvatar from 'src/views/Comment/CommentAvatar'

describe('CommentAvatar', () => {
  common.isConformant(CommentAvatar)

  describe('src', () => {
    it('renders img', () => {
      const url = faker.image.imageUrl()
      shallow(<CommentAvatar src={url} />)
        .should.contain(<img src={url} />)
    })
  })
})
