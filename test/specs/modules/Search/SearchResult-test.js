import SearchResult from 'src/modules/Search/SearchResult'
import * as common from 'test/specs/commonTests'

describe('SearchResult', () => {
  common.isConformant(SearchResult)
  common.propKeyOnlyToClassName(SearchResult, 'active')
})
