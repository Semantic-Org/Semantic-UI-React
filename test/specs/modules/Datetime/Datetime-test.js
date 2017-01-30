import _ from 'lodash'
import faker from 'faker'
import React from 'react'

import * as common from 'test/specs/commonTests'
import Datetime from 'src/modules/Datetime/Datetime'

describe.only('Datetime Component', () => {
  common.isConformant(Datetime)
})
