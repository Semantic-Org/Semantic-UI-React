import List from 'src/elements/List/List'
import ListItem from 'src/elements/List/ListItem'
import * as common from 'test/specs/commonTests'

describe('List', () => {
  common.isConformant(List)
  common.hasUIClassName(List)
  common.rendersChildren(List)
  common.hasSubComponents(List, [ListItem])
})
