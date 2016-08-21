import * as common from 'test/specs/commonTests'
import GridColumn from 'src/collections/Grid/GridColumn'

describe('GridColumn', () => {
  common.isConformant(GridColumn)
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
  common.propValueOnlyToClassName(GridColumn, 'color')
  common.propKeyAndValueToClassName(GridColumn, 'floated')
  common.propKeyAndValueToClassName(GridColumn, 'only')
  common.rendersChildren(GridColumn)
})
