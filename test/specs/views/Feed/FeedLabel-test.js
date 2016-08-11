import faker from 'faker'
import React from 'react'

import * as common from 'test/specs/commonTests'
import FeedLabel from 'src/views/Feed/FeedLabel'

describe('FeedLabel', () => {
  common.isConformant(FeedLabel)
  common.implementsIconProp(FeedLabel)
  common.rendersChildren(FeedLabel)

  describe('image prop', () => {
    it('renders <img> with string', () => {
      const src = faker.image.imageUrl()

      shallow(<FeedLabel image={src} />).should.contain(<img src={src} />)
    })

    it('renders node', () => {
      const img = <img src={faker.image.imageUrl()} />

      shallow(<FeedLabel image={img} />).should.contain(img)
    })
  })
})
