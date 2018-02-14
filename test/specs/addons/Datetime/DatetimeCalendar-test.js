import DatetimeCalendar from 'src/addons/Datetime/DatetimeCalendar'
import * as common from 'test/specs/commonTests'

const requiredProps = {
  value: new Date(),
  mode: 'month',
}

describe('DatetimeCalendar', () => {
  common.isConformant(DatetimeCalendar, { requiredProps })
})
