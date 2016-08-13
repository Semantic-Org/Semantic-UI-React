import _ from 'lodash'
import faker from 'faker'
import React from 'react'

import * as common from 'test/specs/commonTests'
import FeedContent from 'src/views/Feed/FeedContent'

describe('FeedContent', () => {
  common.isConformant(FeedContent)
  common.rendersChildren(FeedContent)

  it('renders text with content prop', () => {
    const text = faker.hacker.phrase()

    shallow(<FeedContent content={text} />).should.contain.text(text)
  })

  it('renders <FeedDate> with date prop', () => {
    shallow(<FeedContent date={faker.hacker.phrase()} />)
      .should.have.descendants('FeedDate')
  })

  it('renders <FeedExtra> with extraImages prop', () => {
    const images = _.times(3, () => faker.image.imageUrl())

    shallow(<FeedContent extraImages={images} />)
      .should.have.descendants('FeedExtra')
  })

  it('renders <FeedExtra> with extraText prop', () => {
    shallow(<FeedContent extraText={faker.hacker.phrase()} />)
      .should.have.descendants('FeedExtra')
  })

  it('renders <FeedMeta> with meta prop', () => {
    shallow(<FeedContent meta={faker.hacker.phrase()} />)
      .should.have.descendants('FeedMeta')
  })

  it('renders <FeedSummary> with summary prop', () => {
    shallow(<FeedContent summary={faker.hacker.phrase()} />)
      .should.have.descendants('FeedSummary')
  })
})
