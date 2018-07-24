import faker from 'faker'
import React from 'react'

import ButtonOr from 'src/elements/Button/ButtonOr'
import * as common from 'test/specs/commonTests'

describe('ButtonOr', () => {
  common.isConformant(ButtonOr)

  describe('text', () => {
    it('should not define attr when not defined', () => {
      expect(shallow(<ButtonOr />).prop('data-text')).toBeUndefined()
    })

    it('should pass value to attr', () => {
      const word = faker.lorem.word()

      expect(shallow(<ButtonOr text={word} />).prop('data-text')).toBe(word)
    })
  })
})
