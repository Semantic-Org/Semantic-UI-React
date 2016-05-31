import Card from 'src/views/Card/Card'
import * as common from 'test/specs/commonTests'

describe.only('Card', () => {
  common.isConformant(Card)
  common.hasUIClassName(Card)
  common.rendersChildren(Card)
})
