import _ from 'lodash'
import React from 'react'

import Rail from 'src/elements/Rail/Rail'
import { SUI } from 'src/lib'
import * as common from 'test/specs/commonTests'

const requiredProps = { position: 'left' }

describe('Rail', () => {
  common.isConformant(Rail, { requiredProps })
  common.forwardsRef(Rail, { requiredProps })
  common.hasUIClassName(Rail, { requiredProps })
  common.rendersChildren(Rail, { requiredProps })

  common.propKeyOnlyToClassName(Rail, 'attached', { requiredProps })
  common.propKeyOnlyToClassName(Rail, 'dividing', { requiredProps })
  common.propKeyOnlyToClassName(Rail, 'internal', { requiredProps })

  common.propKeyOrValueAndKeyToClassName(Rail, 'close', ['very'], { requiredProps })

  common.propValueOnlyToClassName(Rail, 'position', SUI.FLOATS, { requiredProps })
  common.propValueOnlyToClassName(Rail, 'size', _.without(SUI.SIZES, 'medium'), { requiredProps })

  it('renders an div element', () => {
    shallow(<Rail {...requiredProps} />).should.have.tagName('div')
  })
})
