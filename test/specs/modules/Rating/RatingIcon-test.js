import keyboardKey from 'keyboard-key'
import React from 'react'

import RatingIcon from 'src/modules/Rating/RatingIcon'
import * as common from 'test/specs/commonTests'

describe('RatingIcon', () => {
  common.isConformant(RatingIcon)

  common.propKeyOnlyToClassName(RatingIcon, 'active')
  common.propKeyOnlyToClassName(RatingIcon, 'selected')

  describe('onKeyUp', () => {
    it('omitted when not defined', () => {
      const event = { keyCode: keyboardKey.Enter, preventDefault: jest.fn() }
      const keypress = () => shallow(<RatingIcon />).simulate('keyup', event)

      expect(keypress).not.toThrowError()
      expect(event.preventDefault).not.have.been.called()
    })

    it('calls onClick with (e, index) when space key is pressed', () => {
      const spy = jest.fn()
      const event = { keyCode: keyboardKey.Spacebar, preventDefault: jest.fn() }

      mount(<RatingIcon index={0} onClick={spy} />).simulate('keyup', event)

      expect(spy).have.been.calledOnce()
      expect(spy).have.been.calledWithMatch(event, { index: 0 })
      expect(event.preventDefault).have.been.calledOnce()
    })

    it('calls onClick with (e, index) when enter key is pressed', () => {
      const spy = jest.fn()
      const event = { keyCode: keyboardKey.Enter, preventDefault: jest.fn() }

      mount(<RatingIcon index={0} onClick={spy} />).simulate('keyup', event)

      expect(spy).have.been.calledOnce()
      expect(spy).have.been.calledWithMatch(event, { index: 0 })
      expect(event.preventDefault).have.been.calledOnce()
    })

    it('does not call onClick when non space/enter key is pressed', () => {
      const spy = jest.fn()
      const event = { keyCode: keyboardKey.A, preventDefault: jest.fn() }

      const keyup = () => shallow(<RatingIcon onClick={spy} />).simulate('keyup', event)

      expect(keyup).not.toThrowError()
      expect(spy).not.have.been.called()
      expect(event.preventDefault).not.have.been.called()
    })
  })
})
