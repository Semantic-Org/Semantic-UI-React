import faker from 'faker'
import _ from 'lodash'
import React from 'react'

import FeedEvent from 'src/views/Feed/FeedEvent'
import FeedLabel from 'src/views/Feed/FeedLabel'
import * as common from 'test/specs/commonTests'

describe('FeedEvent', () => {
  common.isConformant(FeedEvent)
  common.rendersChildren(FeedEvent, {
    rendersContent: false,
  })

  common.implementsShorthandProp(FeedEvent, {
    propKey: 'icon',
    ShorthandComponent: FeedLabel,
    mapValueToProps: val => ({ icon: val }),
  })
  common.implementsShorthandProp(FeedEvent, {
    propKey: 'image',
    ShorthandComponent: FeedLabel,
    mapValueToProps: val => ({ image: val }),
  })

  describe('content props', () => {
    it('renders <FeedContent> with extraImages prop', () => {
      const images = _.times(3, () => faker.image.imageUrl())
      expect(shallow(<FeedEvent extraImages={images} />).find('FeedContent')).toHaveLength(1)
    })

    it('renders <FeedContent> with other content props', () => {
      const contentProps = ['content', 'date', 'extraText', 'meta', 'summary']

      contentProps.forEach((propKey) => {
        const props = { [propKey]: faker.hacker.phrase() }
        expect(shallow(<FeedEvent {...props} />).find('FeedContent')).toHaveLength(1)
      })
    })
  })
})
