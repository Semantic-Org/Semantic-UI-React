import ListItem from 'src/elements/List/ListItem'
import * as common from 'test/specs/commonTests'

describe('ListItem', () => {
  common.isConformant(ListItem)
  common.rendersChildren(ListItem)
})
