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
      const wrapper = shallow(<FeedLabel image={src} />)

      wrapper.should.have.descendants('img')
      wrapper.find('img').should.have.prop('src', src)
    })

    it('renders node', () => {
      const src = faker.image.imageUrl()
      const img = <img src={src} />
      const wrapper = shallow(<FeedLabel image={img} />)

      wrapper.should.have.descendants('img')
      wrapper.find('img').should.have.prop('src', src)
    })
  })
})
