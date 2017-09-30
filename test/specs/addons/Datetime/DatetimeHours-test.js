import DatetimeHours from 'src/addons/Datetime/DatetimeHours'
import * as common from 'test/specs/commonTests'

const requiredProps = {
  value: new Date(),
}

describe('DatetimeHours', () => {
  common.isConformant(DatetimeHours, { requiredProps })
})
