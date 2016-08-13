import _ from 'lodash'
import faker from 'faker'
import React from 'react'

import * as common from 'test/specs/commonTests'
import FeedExtra from 'src/views/Feed/FeedExtra'

describe('FeedExtra', () => {
  common.isConformant(FeedExtra)
  common.propKeyOnlyToClassName(FeedExtra, 'images')
  common.propKeyOnlyToClassName(FeedExtra, 'text')
  common.rendersChildren(FeedExtra)

  it('renders text with text prop', () => {
    const text = faker.hacker.phrase()

    shallow(<FeedExtra text={text} />).should.contain(text)
  })

  it('renders <img> with images prop', () => {
    const images = _.times(3, () => faker.image.imageUrl())

    shallow(<FeedExtra images={images} />).should.have.exactly(3).descendants('img')
  })
})
