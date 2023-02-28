import keyboardKey from 'keyboard-key'
import React from 'react'

import RatingIcon from 'src/modules/Rating/RatingIcon'
import * as common from 'test/specs/commonTests'
import { sandbox } from 'test/utils'

describe('RatingIcon', () => {
  common.isConformant(RatingIcon)
  common.forwardsRef(RatingIcon, { tagName: 'i' })

  common.propKeyOnlyToClassName(RatingIcon, 'active')
  common.propKeyOnlyToClassName(RatingIcon, 'selected')

  describe('onClick', () => {
    it('calls onClick with (e, data) when space key is pressed', () => {
      const onClick = sandbox.spy()
      const event = { keyCode: keyboardKey.Spacebar, preventDefault: sandbox.spy() }

      mount(<RatingIcon index={0} onClick={onClick} />).simulate('keyup', event)

      onClick.should.have.been.calledOnce()
      onClick.should.have.been.calledWithMatch(event, { index: 0 })
      event.preventDefault.should.have.been.calledOnce()
    })

    it('calls onClick with (e, data) when enter key is pressed', () => {
      const onClick = sandbox.spy()
      const event = { keyCode: keyboardKey.Enter, preventDefault: sandbox.spy() }

      mount(<RatingIcon index={0} onClick={onClick} />).simulate('keyup', event)

      onClick.should.have.been.calledOnce()
      onClick.should.have.been.calledWithMatch(event, { index: 0 })
      event.preventDefault.should.have.been.calledOnce()
    })

    it('does not call onClick when non space/enter key is pressed', () => {
      const onClick = sandbox.spy()
      const event = { keyCode: keyboardKey.A, preventDefault: sandbox.spy() }

      shallow(<RatingIcon onClick={onClick} />).simulate('keyup', event)

      onClick.should.not.have.been.called()
      event.preventDefault.should.not.have.been.called()
    })
  })

  describe('onKeyUp', () => {
    it('calls onKeyUp with (e, data) when key is pressed', () => {
      const onKeyUp = sandbox.spy()
      mount(<RatingIcon index={0} onKeyUp={onKeyUp} />).simulate('keyup')

      onKeyUp.should.have.been.calledOnce()
      onKeyUp.should.have.been.calledWithMatch({}, { index: 0 })
    })
  })
})
