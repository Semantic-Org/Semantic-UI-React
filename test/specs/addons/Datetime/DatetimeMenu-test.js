import DatetimeMenu from 'src/addons/Datetime/DatetimeMenu'
import * as common from 'test/specs/commonTests'

const requiredProps = {
  value: new Date(),
  mode: 'month',
}

describe('DatetimeMenu', () => {
  common.isConformant(DatetimeMenu, { requiredProps })
})
