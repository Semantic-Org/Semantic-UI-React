import faker from 'faker'
import React from 'react'

import FeedLabel from 'src/views/Feed/FeedLabel'
import * as common from 'test/specs/commonTests'

describe('FeedLabel', () => {
  common.isConformant(FeedLabel)
  common.forwardsRef(FeedLabel)
  common.forwardsRef(FeedLabel, { requiredProps: { children: <span /> } })
  common.rendersChildren(FeedLabel)

  common.implementsIconProp(FeedLabel, { autoGenerateKey: false })

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
