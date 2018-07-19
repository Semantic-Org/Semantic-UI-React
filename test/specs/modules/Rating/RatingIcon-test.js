import keyboardKey from 'keyboard-key'
import React from 'react'

import RatingIcon from 'src/modules/Rating/RatingIcon'
import * as common from 'test/specs/commonTests'

describe('RatingIcon', () => {
  common.isConformant(RatingIcon)

  common.propKeyOnlyToClassName(RatingIcon, 'active')
  common.propKeyOnlyToClassName(RatingIcon, 'selected')

  describe('onClick', () => {
    it('calls onClick with (e, index) when space key is pressed', () => {
      const onClick = jest.fn()
      const event = { keyCode: keyboardKey.Spacebar, preventDefault: jest.fn() }

      mount(<RatingIcon index={0} onClick={onClick} />).simulate('keyup', event)

      expect(onClick).toHaveBeenCalledTimes(1)
      expect(onClick).toHaveBeenCalledWith(
        expect.objectContaining(event),
        expect.objectContaining({ index: 0 }),
      )
      expect(event.preventDefault).toHaveBeenCalledTimes(1)
    })

    it('calls onClick with (e, index) when enter key is pressed', () => {
      const onClick = jest.fn()
      const event = { keyCode: keyboardKey.Enter, preventDefault: jest.fn() }

      mount(<RatingIcon index={0} onClick={onClick} />).simulate('keyup', event)

      expect(onClick).toHaveBeenCalledTimes(1)
      expect(onClick).toHaveBeenCalledWith(
        expect.objectContaining(event),
        expect.objectContaining({ index: 0 }),
      )
      expect(event.preventDefault).toHaveBeenCalledTimes(1)
    })

    it('does not call onClick when non space/enter key is pressed', () => {
      const onClick = jest.fn()
      const event = { keyCode: keyboardKey.A, preventDefault: jest.fn() }
      shallow(<RatingIcon onClick={onClick} />).simulate('keyup', event)

      expect(onClick).not.toHaveBeenCalled()
      expect(event.preventDefault).not.toHaveBeenCalled()
    })
  })
})
