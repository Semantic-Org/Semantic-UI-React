import DatetimeDays from 'src/addons/Datetime/DatetimeDays'
import * as common from 'test/specs/commonTests'

const requiredProps = {
  value: new Date(),
}

describe('DatetimeDays', () => {
  common.isConformant(DatetimeDays, { requiredProps })
})
