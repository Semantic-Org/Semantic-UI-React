import SearchResults from 'src/modules/Search/SearchResults'
import * as common from 'test/specs/commonTests'

describe('SearchResults', () => {
  common.isConformant(SearchResults)
  common.forwardsRef(SearchResults)
  common.rendersChildren(SearchResults)
})
