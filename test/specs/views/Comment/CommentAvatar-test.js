import faker from 'faker'
import React from 'react'

import CommentAvatar from 'src/views/Comment/CommentAvatar'
import * as common from 'test/specs/commonTests'

describe('CommentAvatar', () => {
  common.isConformant(CommentAvatar)

  describe('src', () => {
    it('renders img', () => {
      const url = faker.image.imageUrl()
      expect(shallow(<CommentAvatar src={url} />).contains(<img src={url} />)).toBeTruthy()
    })
  })
})
