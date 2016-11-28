import React from 'react'

import * as common from 'test/specs/commonTests'
import { sandbox } from 'test/utils'
import RatingIcon from 'src/modules/Rating/RatingIcon'
import { keyboardKey } from 'src/lib'

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

  describe('onKeyUp', () => {
    it('omitted when not defined', () => {
      const event = { keyCode: keyboardKey.Enter, preventDefault: sandbox.spy() }
      const keypress = () => shallow(<RatingIcon />).simulate('keyup', event)

      expect(keypress).to.not.throw()
      event.preventDefault.should.not.have.been.called()
    })

    it('is called with (e, index) when space key is pressed', () => {
      const spy = sandbox.spy()
      const event = { keyCode: keyboardKey.Spacebar, preventDefault: sandbox.spy() }

      mount(<RatingIcon index={0} onClick={spy} />)
        .simulate('keyup', event)

      spy.should.have.been.calledOnce()
      spy.should.have.been.calledWithMatch(event, 0)
      event.preventDefault.should.have.been.calledOnce()
    })

    it('is called with (e, index) when enter key is pressed', () => {
      const spy = sandbox.spy()
      const event = { keyCode: keyboardKey.Enter, preventDefault: sandbox.spy() }

      mount(<RatingIcon index={0} onClick={spy} />)
        .simulate('keyup', event)

      spy.should.have.been.calledOnce()
      spy.should.have.been.calledWithMatch(event, 0)
      event.preventDefault.should.have.been.calledOnce()
    })

    it('omitted when non space/enter key is pressed', () => {
      const spy = sandbox.spy()
      const event = { keyCode: keyboardKey.A, preventDefault: sandbox.spy() }

      const keyup = () => shallow(<RatingIcon onClick={spy} />).simulate('keyup', event)

      expect(keyup).to.not.throw()
      spy.should.not.have.been.called()
      event.preventDefault.should.not.have.been.called()
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
