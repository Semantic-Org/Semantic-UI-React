import React from 'react'

import SearchCategory from 'src/modules/Search/SearchCategory'
import * as common from 'test/specs/commonTests'

describe('SearchCategory', () => {
  common.isConformant(SearchCategory)
  common.rendersChildren(SearchCategory)

  describe('children', () => {
    it('should be a child with a "name" className', () => {
      expect(shallow(<SearchCategory />).childAt(0)).have.className('name')
    })

    it('should be wrapped with a "results" className', () => {
      expect(shallow(<SearchCategory />).childAt(1)).have.className('results')
    })
  })
})
