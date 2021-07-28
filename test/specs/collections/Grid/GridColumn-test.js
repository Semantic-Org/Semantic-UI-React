import GridColumn from 'src/collections/Grid/GridColumn'
import { SUI } from 'src/lib'
import * as common from 'test/specs/commonTests'

describe('GridColumn', () => {
  common.isConformant(GridColumn)
  common.forwardsRef(GridColumn)
  common.rendersChildren(GridColumn, {
    rendersContent: false,
  })

  common.implementsCreateMethod(GridColumn)
  common.implementsMultipleProp(GridColumn, 'only', SUI.VISIBILITY)
  common.implementsTextAlignProp(GridColumn)
  common.implementsVerticalAlignProp(GridColumn)

  common.implementsWidthProp(GridColumn, SUI.WIDTHS, {
    canEqual: false,
    propKey: 'computer',
    widthClass: 'wide computer',
  })
  common.implementsWidthProp(GridColumn, SUI.WIDTHS, {
    canEqual: false,
    propKey: 'largeScreen',
    widthClass: 'wide large screen',
  })
  common.implementsWidthProp(GridColumn, SUI.WIDTHS, {
    canEqual: false,
    propKey: 'mobile',
    widthClass: 'wide mobile',
  })
  common.implementsWidthProp(GridColumn, SUI.WIDTHS, {
    canEqual: false,
    propKey: 'tablet',
    widthClass: 'wide tablet',
  })
  common.implementsWidthProp(GridColumn, SUI.WIDTHS, {
    canEqual: false,
    propKey: 'widescreen',
    widthClass: 'wide widescreen',
  })
  common.implementsWidthProp(GridColumn, SUI.WIDTHS, {
    canEqual: false,
    propKey: 'width',
    widthClass: 'wide',
  })

  common.propKeyAndValueToClassName(GridColumn, 'floated', SUI.FLOATS)

  common.propKeyOnlyToClassName(GridColumn, 'stretched')

  common.propValueOnlyToClassName(GridColumn, 'color', SUI.COLORS)
})
