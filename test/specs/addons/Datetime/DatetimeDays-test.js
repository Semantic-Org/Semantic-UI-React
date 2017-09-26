import DatetimeDays from 'src/addons/Datetime/DatetimeDays'
import * as common from 'test/specs/commonTests'

const requiredProps = {
  value: new Date(),
}
describe.only('DatetimeDays', () => {
  common.isConformant(DatetimeDays, { requiredProps })
})
