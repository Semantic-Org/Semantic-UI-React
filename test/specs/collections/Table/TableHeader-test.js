import React from 'react'

import * as common from 'test/specs/commonTests'
import TableHeader from 'src/collections/Table/TableHeader'

describe('TableHeader', () => {
  common.isConformant(TableHeader)
  common.rendersChildren(TableHeader)

  common.propKeyOnlyToClassName(TableHeader, 'fullWidth', {
    className: 'full-width',
  })

  describe('as', () => {
    it('is "thead" by default', () => {
      expect(shallow(<TableHeader />).type()).toBe('thead')
    })
  })
})
