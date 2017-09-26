import DatetimeCalendar from 'src/addons/Datetime/DatetimeCalendar'
import * as common from 'test/specs/commonTests'

const requiredProps = {
  value: new Date(),
  mode: 'month',
}
describe.only('DatetimeCalendar', () => {
  common.isConformant(DatetimeCalendar, { requiredProps })
})
