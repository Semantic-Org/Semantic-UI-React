import React from 'react'

import FeedExtra from 'src/views/Feed/FeedExtra'
import * as common from 'test/specs/commonTests'

describe('FeedExtra', () => {
  common.isConformant(FeedExtra)
  common.rendersChildren(FeedExtra)

  common.propKeyOnlyToClassName(FeedExtra, 'images')
  common.propKeyOnlyToClassName(FeedExtra, 'text')

  describe('images', () => {
    it('renders <img> with images prop', () => {
      expect(shallow(<FeedExtra images={['a', 'b', 'c']} />).find('img')).toHaveLength(3)
    })
  })
})
