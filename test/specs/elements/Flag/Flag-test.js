import React from 'react'

import Flag from 'src/elements/Flag/Flag'
import * as common from 'test/specs/commonTests'

const requiredProps = { name: 'us' }

describe('Flag', () => {
  common.isConformant(Flag, { requiredProps })

  common.implementsCreateMethod(Flag)

  common.propValueOnlyToClassName(Flag, 'name', [], { requiredProps })

  describe('as', () => {
    it('renders an "i" element', () => {
      expect(shallow(<Flag {...requiredProps} />).type()).toBe('i')
    })
  })
})
