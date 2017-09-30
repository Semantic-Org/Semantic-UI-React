import DatetimeYears from 'src/addons/Datetime/DatetimeYears'
import * as common from 'test/specs/commonTests'

const requiredProps = {
  value: new Date(),
}

describe('DatetimeYears', () => {
  common.isConformant(DatetimeYears, { requiredProps })
})
