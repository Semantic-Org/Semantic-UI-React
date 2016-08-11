import * as common from 'test/specs/commonTests'
import Card from 'src/views/Card/Card'

describe('Card', () => {
  common.isConformant(Card)
  common.rendersChildren(Card)
  common.hasUIClassName(Card)
})
