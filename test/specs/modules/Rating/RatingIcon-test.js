import React from 'react'

import * as common from 'test/specs/commonTests'
import { sandbox } from 'test/utils'
import RatingIcon from 'src/modules/Rating/RatingIcon'

describe('RatingIcon', () => {
  common.propKeyOnlyToClassName(RatingIcon, 'active')
  common.propKeyOnlyToClassName(RatingIcon, 'selected')

  describe('onClick', () => {
    it('omitted when not defined', () => {
      const click = () => shallow(<RatingIcon />).simulate('click')
      expect(click).to.not.throw()
    })

    it('is called with (e, index) when clicked', () => {
      const spy = sandbox.spy()
      const event = { target: null }

      shallow(<RatingIcon index={0} onClick={spy} />)
        .simulate('click', event)

      spy.should.have.been.calledOnce()
      spy.should.have.been.calledWithMatch(event, 0)
    })
  })

  describe('onMouseEnter', () => {
    it('omitted when not defined', () => {
      const click = () => shallow(<RatingIcon />).simulate('mouseEnter')
      expect(click).to.not.throw()
    })

    it('is called with (index) when clicked', () => {
      const spy = sandbox.spy()

      shallow(<RatingIcon index={0} onMouseEnter={spy} />)
        .simulate('mouseEnter')

      spy.should.have.been.calledOnce()
      spy.should.have.been.calledWithMatch(0)
    })
  })
})
