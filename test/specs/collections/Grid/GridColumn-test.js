import GridColumn from 'src/collections/Grid/GridColumn'
import * as common from 'test/specs/commonTests'

describe('GridColumn', () => {
  common.isConformant(GridColumn)
  common.rendersChildren(GridColumn)

  // TODO: Miss with tests

  common.implementsAlignedProp(GridColumn, 'aligned')
  common.propValueOnlyToClassName(GridColumn, 'color')
  // common.implementsNumberToWordProp(GridColumn, 'computer')
  common.propKeyAndValueToClassName(GridColumn, 'floated')
  // common.implementsNumberToWordProp(GridColumn, 'largeScreen')
  // common.implementsNumberToWordProp(GridColumn, 'mobile')
  common.propKeyAndValueToClassName(GridColumn, 'only')
  // common.implementsNumberToWordProp(GridColumn, 'tablet')
  // common.propKeyAndValueToClassName(GridColumn, 'vertical')
  // common.implementsNumberToWordProp(GridColumn, 'widescreen')
  common.implementsNumberToWordProp(GridColumn, 'width')
})
