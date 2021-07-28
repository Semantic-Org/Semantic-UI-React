import * as common from 'test/specs/commonTests'

import Grid from 'src/collections/Grid/Grid'
import GridColumn from 'src/collections/Grid/GridColumn'
import GridRow from 'src/collections/Grid/GridRow'
import { SUI } from 'src/lib'

describe('Grid', () => {
  common.isConformant(Grid)
  common.forwardsRef(Grid)
  common.hasSubcomponents(Grid, [GridRow, GridColumn])
  common.hasUIClassName(Grid)
  common.rendersChildren(Grid, {
    rendersContent: false,
  })

  common.implementsMultipleProp(GridRow, 'reversed', [
    'computer',
    'computer vertically',
    'mobile',
    'mobile vertically',
    'tablet',
    'tablet vertically',
  ])
  common.implementsTextAlignProp(Grid)
  common.implementsVerticalAlignProp(Grid)
  common.implementsWidthProp(Grid, SUI.WIDTHS, {
    propKey: 'columns',
    widthClass: 'column',
  })

  common.propKeyOnlyToClassName(Grid, 'centered')
  common.propKeyOnlyToClassName(Grid, 'container')
  common.propKeyOnlyToClassName(Grid, 'doubling')
  common.propKeyOnlyToClassName(Grid, 'inverted')
  common.propKeyOnlyToClassName(Grid, 'stackable')
  common.propKeyOnlyToClassName(Grid, 'stretched')

  common.propKeyOrValueAndKeyToClassName(Grid, 'celled', ['internally'])
  common.propKeyOrValueAndKeyToClassName(Grid, 'divided', ['vertically'])
  common.propKeyOrValueAndKeyToClassName(Grid, 'padded', ['horizontally', 'vertically'])
  common.propKeyOrValueAndKeyToClassName(Grid, 'relaxed', ['very'])
})
