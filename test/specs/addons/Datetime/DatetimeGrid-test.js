import DatetimeGrid from 'src/addons/Datetime/DatetimeGrid'
import * as common from 'test/specs/commonTests'

const requiredProps = {
  columns: 1,
  cells: [{ content: 'row1' }],
}

describe('DatetimeGrid', () => {
  common.isConformant(DatetimeGrid, { requiredProps })
})
