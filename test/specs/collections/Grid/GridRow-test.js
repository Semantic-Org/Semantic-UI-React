import GridRow from 'src/collections/Grid/GridRow'
import { SUI } from 'src/lib'
import * as common from 'test/specs/commonTests'

describe('GridRow', () => {
  common.isConformant(GridRow)
  common.rendersChildren(GridRow)

  common.implementsOnlyProp(GridRow)
  common.implementsTextAlignProp(GridRow)
  common.implementsVerticalAlignProp(GridRow)
  common.implementsWidthProp(GridRow, SUI.WIDTHS, {
    propKey: 'columns',
    widthClass: 'column',
  })

  common.propKeyAndValueToClassName(GridRow, 'reversed', [
    ['computer', 'computer vertically', 'mobile', 'mobile vertically', 'tablet', 'tablet vertically'],
  ])

  common.propKeyOnlyToClassName(GridRow, 'centered')
  common.propKeyOnlyToClassName(GridRow, 'divided')
  common.propKeyOnlyToClassName(GridRow, 'stretched')

  common.propValueOnlyToClassName(GridRow, 'color', SUI.COLORS)
})
