import React from 'react'

import { isConformant } from 'test/specs/commonTests'
import { getTestingRenderedComponent } from 'test/utils'

import Input from 'src/components/Input/Input'

describe('Input', () => {
  isConformant(Input)
})
