import * as common from 'test/specs/commonTests'
import ListHeader from 'src/elements/List/ListHeader'

describe('ListHeader', () => {
  common.isConformant(ListHeader)
  common.rendersChildren(ListHeader)
})
