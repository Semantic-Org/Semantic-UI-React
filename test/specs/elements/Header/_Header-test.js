import React from 'react'

import _Header from 'src/elements/Header/_Header'
import * as common from 'test/specs/commonTests'

describe('_Header', () => {
  common.propKeyAndValueToClassName(_Header, 'aligned')
  common.propKeyOnlyToClassName(_Header, 'dividing')
  common.propKeyOnlyToClassName(_Header, 'block')
  common.propKeyOnlyToClassName(_Header, 'attached')
  common.propKeyOnlyToClassName(_Header, 'floating')

  it('does not have aligned class when justified', () => {
    shallow(<_Header aligned='justified' />)
      .should.not.have.className('aligned')
  })
})
