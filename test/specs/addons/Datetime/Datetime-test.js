import Datetime from 'src/addons/Datetime/Datetime'
import DatetimeYears from 'src/addons/Datetime/DatetimeYears'
import DatetimeMonths from 'src/addons/Datetime/DatetimeMonths'
import DatetimeDays from 'src/addons/Datetime/DatetimeDays'
import DatetimeHours from 'src/addons/Datetime/DatetimeHours'
import DatetimeMinutes from 'src/addons/Datetime/DatetimeMinutes'
import * as common from 'test/specs/commonTests'

describe.only('Datetime', () => {
  common.isConformant(Datetime)
  common.hasSubComponents(Datetime, [
    DatetimeYears,
    DatetimeMonths,
    DatetimeDays,
    DatetimeHours,
    DatetimeMinutes,
  ])
})
