import GridColumn from 'src/collections/Grid/GridColumn'
import * as common from 'test/specs/commonTests'

describe('GridColumn', () => {
  common.isConformant(GridColumn)
  common.rendersChildren(GridColumn)
})
