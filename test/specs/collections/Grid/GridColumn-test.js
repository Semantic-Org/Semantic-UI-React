import Grid from 'src/collections/Grid/Grid'
import GridRow from 'src/collections/Grid/GridRow'
import GridColumn from 'src/collections/Grid/GridColumn'
import * as common from '../../commonTests'

describe('Grid', () => {
  common.isConformant(Grid)
  common.hasUIClassName(Grid)
  common.rendersChildren(Grid)
  common.hasSubComponents(Grid, [GridRow, GridColumn])
})

describe('GridRow', () => {
  common.isConformant(GridRow)
  common.rendersChildren(GridRow)
})

describe('GridColumn', () => {
  common.isConformant(GridRow)
  common.rendersChildren(GridRow)
})
