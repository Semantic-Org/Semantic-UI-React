import faker from 'faker'
import _ from 'lodash'
import React from 'react'

import { htmlImageProps } from 'src/lib'
import CommentAvatar from 'src/views/Comment/CommentAvatar'
import * as common from 'test/specs/commonTests'

describe('CommentAvatar', () => {
  common.isConformant(CommentAvatar)
  common.forwardsRef(CommentAvatar)

  describe('src', () => {
    it('passes to the "img" element', () => {
      const src = faker.image.imageUrl()
      const image = shallow(<CommentAvatar src={src} />).find('img')

      image.should.have.prop('src', src)
    })
  })

  describe('image props', () => {
    _.forEach(htmlImageProps, (propName) => {
      it(`passes "${propName}" to the "img" element`, () => {
        const propValue = faker.lorem.word()
        const image = shallow(<CommentAvatar src='foo.jpg' {...{ [propName]: propValue }} />).find(
          'img',
        )

        image.should.have.prop(propName, propValue)
      })
    })
  })
})
