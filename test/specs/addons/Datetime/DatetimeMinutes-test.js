import DatetimeMinutes from 'src/addons/Datetime/DatetimeMinutes'
import * as common from 'test/specs/commonTests'

const requiredProps = {
  value: new Date(),
}

describe('DatetimeMinutes', () => {
  common.isConformant(DatetimeMinutes, { requiredProps })
})
