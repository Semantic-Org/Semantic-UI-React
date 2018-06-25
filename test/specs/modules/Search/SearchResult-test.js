import SearchResult from 'src/modules/Search/SearchResult'
import * as common from 'test/specs/commonTests'

const requiredProps = { title: '' }

describe('SearchResult', () => {
  common.isConformant(SearchResult, { requiredProps })
  common.propKeyOnlyToClassName(SearchResult, 'active', { requiredProps })
})
