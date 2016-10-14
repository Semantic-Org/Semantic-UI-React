import * as common from 'test/specs/commonTests'

import Grid from 'src/collections/Grid/Grid'
import GridColumn from 'src/collections/Grid/GridColumn'
import GridRow from 'src/collections/Grid/GridRow'

describe('Grid', () => {
  common.isConformant(Grid)
  common.hasUIClassName(Grid)
  common.hasSubComponents(Grid, [GridRow, GridColumn])
  common.rendersChildren(Grid)

  common.propKeyOnlyToClassName(Grid, 'centered')
  common.propKeyOnlyToClassName(Grid, 'doubling')
  common.propKeyOnlyToClassName(Grid, 'stackable')
  common.propKeyOnlyToClassName(Grid, 'stretched')

  common.propKeyOrValueAndKeyToClassName(Grid, 'celled')
  common.propKeyOrValueAndKeyToClassName(Grid, 'divided')
  common.propKeyOrValueAndKeyToClassName(Grid, 'padded')
  common.propKeyOrValueAndKeyToClassName(Grid, 'relaxed')

  common.propKeyAndValueToClassName(Grid, 'reversed')

  common.implementsTextAlignProp(Grid)
  common.implementsVerticalAlignProp(Grid)
  common.implementsWidthProp(Grid, { propKey: 'columns', widthClass: 'column', canEqual: true })
})
