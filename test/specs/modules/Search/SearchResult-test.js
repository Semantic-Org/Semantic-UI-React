import React from 'react'

import SearchResult from 'src/modules/Search/SearchResult'
import * as common from 'test/specs/commonTests'
import { sandbox } from 'test/utils'

const requiredProps = { title: '' }

describe('SearchResult', () => {
  common.isConformant(SearchResult, { requiredProps })
  common.forwardsRef(SearchResult, { requiredProps })
  common.propKeyOnlyToClassName(SearchResult, 'active', { requiredProps })

  describe('onClick', () => {
    it('is called with (e, data) when clicked', () => {
      const onClick = sandbox.spy()
      mount(<SearchResult onClick={onClick} {...requiredProps} />).simulate('click')

      onClick.should.have.been.calledOnce()
      onClick.should.have.been.calledWithMatch({ type: 'click' }, requiredProps)
    })
  })
})
