import React from 'react'

import * as common from 'test/specs/commonTests'
import Rail from 'src/elements/Rail/Rail'

const requiredProps = { position: 'left' }

describe('Rail', () => {
  common.isConformant(Rail, { requiredProps })
  common.hasUIClassName(Rail, { requiredProps })
  common.rendersChildren(Rail, { requiredProps })

  common.propKeyOnlyToClassName(Rail, 'attached', { requiredProps })
  common.propKeyOnlyToClassName(Rail, 'dividing', { requiredProps })
  common.propKeyOnlyToClassName(Rail, 'internal', { requiredProps })

  common.propKeyOrValueAndKeyToClassName(Rail, 'close', ['very'], { requiredProps })

  common.propValueOnlyToClassName(Rail, 'position', { requiredProps })
  common.propValueOnlyToClassName(Rail, 'size', { requiredProps })

  it('renders an div element', () => {
    shallow(<Rail {...requiredProps} />)
      .should.have.tagName('div')
  })
})
