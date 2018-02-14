import DatetimeMonths from 'src/addons/Datetime/DatetimeMonths'
import * as common from 'test/specs/commonTests'

const requiredProps = {
  value: new Date(),
}

describe('DatetimeMonths', () => {
  common.isConformant(DatetimeMonths, { requiredProps })
})
