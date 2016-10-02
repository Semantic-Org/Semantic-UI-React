import * as common from 'test/specs/commonTests'
import List from 'src/elements/List/List'
import ListContent from 'src/elements/List/ListContent'
import ListDescription from 'src/elements/List/ListDescription'
import ListHeader from 'src/elements/List/ListHeader'
import ListIcon from 'src/elements/List/ListIcon'
import ListItem from 'src/elements/List/ListItem'
import ListList from 'src/elements/List/ListList'

describe('List', () => {
  common.isConformant(List)
  common.hasUIClassName(List)
  common.hasSubComponents(List, [ListContent, ListDescription, ListHeader, ListIcon, ListItem, ListList])
  common.rendersChildren(List)

  common.propKeyOnlyToClassName(List, 'animated')
  common.propKeyOnlyToClassName(List, 'bulleted')
  common.propKeyOnlyToClassName(List, 'celled')
  common.propKeyOnlyToClassName(List, 'divided')
  common.propKeyOnlyToClassName(List, 'horizontal')
  common.propKeyOnlyToClassName(List, 'inverted')
  common.propKeyOnlyToClassName(List, 'link')
  common.propKeyOnlyToClassName(List, 'ordered')
  common.propKeyOnlyToClassName(List, 'selection')

  common.propKeyAndValueToClassName(List, 'floated')
  common.propKeyOrValueAndKeyToClassName(List, 'relaxed')
  common.propValueOnlyToClassName(List, 'size')
  common.implementsVerticalAlignProp(List)
})
