import _ from 'lodash'
import faker from 'faker'
import React from 'react'

import * as common from 'test/specs/commonTests'
import FeedEvent from 'src/views/Feed/FeedEvent'

describe('FeedEvent', () => {
  common.isConformant(FeedEvent)
  common.rendersChildren(FeedEvent)

  it('renders <FeedLabel> with icon prop', () => {
    mount(<FeedEvent icon={faker.hacker.phrase()} />)
      .should.have.descendants('FeedLabel')
  })

  it('renders <FeedLabel> with image prop', () => {
    mount(<FeedEvent image={faker.image.imageUrl()} />)
      .should.have.descendants('FeedLabel')
  })

  describe('content props', () => {
    it('renders <FeedContent> with extraImages prop', () => {
      const images = _.times(3, () => faker.image.imageUrl())
      mount(<FeedEvent extraImages={images} />).should.have.descendants('FeedContent')
    })

    it('renders <FeedContent> with other content props', () => {
      const contentProps = ['content', 'date', 'extraText', 'meta', 'summary']

      contentProps.map(propKey => {
        const props = { [propKey]: faker.hacker.phrase() }
        mount(<FeedEvent {...props} />).should.have.descendants('FeedContent')
      })
    })
  })
})
