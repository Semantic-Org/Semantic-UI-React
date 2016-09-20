import SearchCategory from 'src/modules/Search/SearchCategory'
import * as common from 'test/specs/commonTests'

describe('SearchCategory', () => {
  common.isConformant(SearchCategory)
  common.rendersChildren(SearchCategory)
})
