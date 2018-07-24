import React from 'react'

import SearchCategory from 'src/modules/Search/SearchCategory'
import * as common from 'test/specs/commonTests'

describe('SearchCategory', () => {
  common.isConformant(SearchCategory)
  common.rendersChildren(SearchCategory)

  describe('children', () => {
    it('should be a child with a "name" className', () => {
      expect(shallow(<SearchCategory />).childAt(0).hasClass('name')).toBe(true)
    })

    it('should be wrapped with a "results" className', () => {
      expect(shallow(<SearchCategory />).childAt(1).hasClass('results')).toBe(true)
    })
  })
})
