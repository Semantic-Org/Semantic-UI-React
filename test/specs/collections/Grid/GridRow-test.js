import GridRow from 'src/collections/Grid/GridRow'
import { SUI } from 'src/lib'
import * as common from 'test/specs/commonTests'

describe('GridRow', () => {
  common.isConformant(GridRow)
  common.rendersChildren(GridRow)

  common.implementsTextAlignProp(GridRow)
  common.implementsVerticalAlignProp(GridRow)
  common.implementsWidthProp(GridRow, { propKey: 'columns', widthClass: 'column', canEqual: true })

  common.propKeyAndValueToClassName(GridRow, 'only')
  common.propKeyAndValueToClassName(GridRow, 'reversed')

  common.propKeyOnlyToClassName(GridRow, 'centered')
  common.propKeyOnlyToClassName(GridRow, 'divided')
  common.propKeyOnlyToClassName(GridRow, 'stretched')

  common.propValueOnlyToClassName(GridRow, 'color', SUI.COLORS)
})
