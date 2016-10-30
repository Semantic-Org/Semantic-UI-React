import _ from 'lodash'
import React from 'react'

import Sidebar from 'src/collections/Sidebar/Sidebar'
import * as common from 'test/specs/commonTests'
import { sandbox } from 'test/utils'

describe('Sidebar', () => {
  common.isConformant(Sidebar)
})
