import * as common from 'test/specs/commonTests'
import GridRow from 'src/collections/Grid/GridRow'

describe('GridRow', () => {
  common.isConformant(GridRow)
  common.rendersChildren(GridRow)

  common.implementsAlignedProp(GridRow, 'aligned')
  common.propKeyOnlyToClassName(GridRow, 'centered')
  common.propValueOnlyToClassName(GridRow, 'color')
  common.implementsNumberToWordProp(GridRow, 'column')
  common.propKeyAndValueToClassName(GridRow, 'only')
  common.propKeyAndValueToClassName(GridRow, 'reversed')
  common.propKeyOnlyToClassName(GridRow, 'stretched')
  // TODO: Miss with test
  // common.propKeyAndValueToClassName(GridRow, 'vertical')
})
