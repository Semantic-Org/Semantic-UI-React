import GridRow from 'src/collections/Grid/GridRow'
import * as common from 'test/specs/commonTests'

describe('GridRow', () => {
  common.isConformant(GridRow)
  common.rendersChildren(GridRow)
})
