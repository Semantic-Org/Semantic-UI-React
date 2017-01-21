import GridColumn from 'src/collections/Grid/GridColumn'
import { SUI } from 'src/lib'
import * as common from 'test/specs/commonTests'

describe('GridColumn', () => {
  common.isConformant(GridColumn)
  common.rendersChildren(GridColumn)

  common.implementsTextAlignProp(GridColumn)
  common.implementsVerticalAlignProp(GridColumn)

  common.implementsWidthProp(GridColumn, {
    propKey: 'computer', widthClass: 'wide computer', canEqual: false,
  })
  common.implementsWidthProp(GridColumn, {
    propKey: 'largeScreen', widthClass: 'wide large screen', canEqual: false,
  })
  common.implementsWidthProp(GridColumn, {
    propKey: 'mobile', widthClass: 'wide mobile', canEqual: false,
  })
  common.implementsWidthProp(GridColumn, {
    propKey: 'tablet', widthClass: 'wide tablet', canEqual: false,
  })
  common.implementsWidthProp(GridColumn, {
    propKey: 'widescreen', widthClass: 'wide widescreen', canEqual: false,
  })
  common.implementsWidthProp(GridColumn, {
    propKey: 'width', widthClass: 'wide', canEqual: false,
  })

  common.propKeyAndValueToClassName(GridColumn, 'floated')
  common.propKeyAndValueToClassName(GridColumn, 'only')

  common.propKeyOnlyToClassName(GridColumn, 'stretched')

  common.propValueOnlyToClassName(GridColumn, 'color', SUI.COLORS)
})
