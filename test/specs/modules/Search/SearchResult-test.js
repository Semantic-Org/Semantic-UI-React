import facker from 'faker'
import React from 'react'

import SearchResult from 'src/modules/Search/SearchResult'
import * as common from 'test/specs/commonTests'
import { sandbox } from 'test/utils'

describe('SearchResult', () => {
  common.isConformant(SearchResult)
  common.propKeyOnlyToClassName(SearchResult, 'active')

  describe('onClick', () => {
    it('omitted when not defined', () => {
      const click = () => shallow(<SearchResult />).simulate('click')
      expect(click).to.not.throw()
    })

    it('is called with (e, id) when clicked', () => {
      const spy = sandbox.spy()

      const id = facker.random.number()
      const event = { target: null }
      const props = { id }

      shallow(<SearchResult onClick={spy} {...props} />)
        .simulate('click', event)

      spy.should.have.been.calledOnce()
      spy.should.have.been.calledWithMatch(event, id)
    })
  })
})
