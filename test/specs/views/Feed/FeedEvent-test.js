import _ from 'lodash'
import faker from 'faker'
import React from 'react'

import * as common from 'test/specs/commonTests'
import FeedEvent from 'src/views/Feed/FeedEvent'

describe('FeedEvent', () => {
  common.isConformant(FeedEvent)
  common.rendersChildren(FeedEvent)

  it('renders <FeedLabel> with icon prop', () => {
    shallow(<FeedEvent icon={faker.hacker.phrase()} />)
      .should.have.descendants('FeedLabel')
  })

  it('renders <FeedLabel> with image prop', () => {
    shallow(<FeedEvent image={faker.image.imageUrl()} />)
      .should.have.descendants('FeedLabel')
  })

  describe('content props', () => {
    it('renders <FeedContent> with extraImages prop', () => {
      const images = _.times(3, () => faker.image.imageUrl())
      shallow(<FeedEvent extraImages={images} />).should.have.descendants('FeedContent')
    })

    it('renders <FeedContent> with other content props', () => {
      const contentProps = ['content', 'date', 'extraText', 'meta', 'summary']

      contentProps.forEach(propKey => {
        const props = { [propKey]: faker.hacker.phrase() }
        shallow(<FeedEvent {...props} />).should.have.descendants('FeedContent')
      })
    })
  })
})
