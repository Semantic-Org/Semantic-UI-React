import ListHeader from 'src/elements/List/ListHeader'
import * as common from 'test/specs/commonTests'

describe('ListHeader', () => {
  common.isConformant(ListHeader)
  common.forwardsRef(ListHeader)
  common.rendersChildren(ListHeader)

  common.implementsCreateMethod(ListHeader)
})
