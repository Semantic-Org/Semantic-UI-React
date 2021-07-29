import React from 'react'

import Flag from 'src/elements/Flag/Flag'
import * as common from 'test/specs/commonTests'

const requiredProps = { name: 'us' }

describe('Flag', () => {
  common.isConformant(Flag, { requiredProps })
  common.forwardsRef(Flag, { isMemoized: true, requiredProps, tagName: 'i' })

  common.implementsCreateMethod(Flag)

  common.propValueOnlyToClassName(Flag, 'name', [], { requiredProps })

  it('renders an <i /> element', () => {
    shallow(<Flag {...requiredProps} />).should.have.tagName('i')
  })
})
