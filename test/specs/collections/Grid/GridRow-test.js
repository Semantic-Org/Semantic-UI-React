import * as common from 'test/specs/commonTests'
import GridRow from 'src/collections/Grid/GridRow'

describe('GridRow', () => {
  common.isConformant(GridRow)
  common.rendersChildren(GridRow)

  common.propKeyAndValueToClassName(GridRow, 'only')
  common.propKeyAndValueToClassName(GridRow, 'reversed')

  common.propKeyOnlyToClassName(GridRow, 'centered')
  common.propKeyOnlyToClassName(GridRow, 'divided')
  common.propKeyOnlyToClassName(GridRow, 'stretched')

  common.propValueOnlyToClassName(GridRow, 'color')

  common.implementsTextAlignProp(GridRow)
  common.implementsVerticalAlignProp(GridRow)
  common.implementsWidthProp(GridRow, { propKey: 'columns', widthClass: 'column', canEqual: true })
})
