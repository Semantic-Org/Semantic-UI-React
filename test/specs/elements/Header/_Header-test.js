import React from 'react'

import _Header from 'src/elements/Header/_Header'
import * as common from 'test/specs/commonTests'

describe('_Header', () => {
  common.propKeyOnlyToClassName(_Header, 'left', { className: 'aligned' })
  common.propKeyOnlyToClassName(_Header, 'center', { className: 'aligned' })
  common.propKeyOnlyToClassName(_Header, 'right', { className: 'aligned' })
  common.propKeyOnlyToClassName(_Header, 'justified')
  common.propKeyOnlyToClassName(_Header, 'dividing')
  common.propKeyOnlyToClassName(_Header, 'block')
  common.propKeyOnlyToClassName(_Header, 'attached')
  common.propKeyOnlyToClassName(_Header, 'floating')
})
