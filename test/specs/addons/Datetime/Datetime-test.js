import Datetime from 'src/addons/Datetime/Datetime'
import DatetimeGrid from 'src/addons/Datetime/DatetimeGrid'
import DatetimeMenu from 'src/addons/Datetime/DatetimeMenu'
import DatetimeCalendar from 'src/addons/Datetime/DatetimeCalendar'
import DatetimeYears from 'src/addons/Datetime/DatetimeYears'
import DatetimeMonths from 'src/addons/Datetime/DatetimeMonths'
import DatetimeDays from 'src/addons/Datetime/DatetimeDays'
import DatetimeHours from 'src/addons/Datetime/DatetimeHours'
import DatetimeMinutes from 'src/addons/Datetime/DatetimeMinutes'
import * as common from 'test/specs/commonTests'

const requiredProps = {
  value: new Date(),
}
describe.only('Datetime', () => {
  common.isConformant(Datetime, { requiredProps })
  common.hasSubComponents(Datetime, [
    DatetimeGrid,
    DatetimeMenu,
    DatetimeCalendar,
    DatetimeYears,
    DatetimeMonths,
    DatetimeDays,
    DatetimeHours,
    DatetimeMinutes,
  ])
})
