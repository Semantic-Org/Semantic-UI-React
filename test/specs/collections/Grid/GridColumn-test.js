import GridColumn from 'src/collections/Grid/GridColumn'
import * as common from 'test/specs/commonTests'

describe('GridColumn', () => {
  common.isConformant(GridColumn)
  common.rendersChildren(GridColumn)

  // TODO: Miss with tests

  common.propValueOnlyToClassName(GridColumn, 'color')
  // common.implementsNumberToWordProp(GridColumn, 'computer')
  common.propKeyAndValueToClassName(GridColumn, 'floated')
  // common.implementsNumberToWordProp(GridColumn, 'largeScreen')
  // common.implementsNumberToWordProp(GridColumn, 'mobile')
  common.propKeyAndValueToClassName(GridColumn, 'only')
  // common.implementsNumberToWordProp(GridColumn, 'tablet')
  common.implementsTextAlignProp(GridColumn)
  common.implementsVerticalAlignProp(GridColumn)
  // common.implementsNumberToWordProp(GridColumn, 'widescreen')
  common.implementsNumberToWordProp(GridColumn, 'width')
})
